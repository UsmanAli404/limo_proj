'use client';

import { useState, useContext } from "react";
import Button from "@/components/Button";
import { ReservationContext } from "@/contexts/ReservationContext";
import emailjs from '@emailjs/browser';

const ReservationCard = () => {
  const [activeMethod, setActiveMethod] = useState(1);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({
    pickup: false,
    dropoff: false,
    numPassengers: false,
    date: false,
    time: false,
    contactNo: false,
  });

  const { reservationInfo, handleInput } = useContext(ReservationContext);

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    // Check for empty value
    if (value.trim() === "") {
      newErrors[name] = true;
    } else {
      // Specific validation for numPassengers
      if (name === "numPassengers") {
        const valid = /^\d+$/.test(value) && parseInt(value) > 0 && parseInt(value) <= 20;
        newErrors.numPassengers = !valid;
      }

      // Specific validation for contact number
      if (name === "contactNo") {
        const valid = /^[0-9]{10,15}$/.test(value);
        newErrors.contactNo = !valid;
      }

      if (name !== "numPassengers" && name !== "contactNo") {
        newErrors[name] = false;
      }
    }

    setErrors(newErrors);
    return !newErrors[name]; // return validity
  };

  const validateAllFields = () => {
    const fields = ["pickup", "dropoff", "numPassengers", "date", "time", "contactNo"];
    let isValid = true;
    let updatedErrors = { ...errors };

    fields.forEach((field) => {
      const value = reservationInfo[field];
      if (!validateField(field, value)) {
        updatedErrors[field] = true;
        isValid = false;
      }
    });

    setErrors(updatedErrors);
    return isValid;
  };

  const sendEmail = () => {
    if (!validateAllFields()) {
      alert("Please fill out all fields correctly before submitting.");
      return;
    }

    emailjs.send(
      "LimoService",    
      "LimoService",   
      {
        pickup: reservationInfo.pickup,
        dropoff: reservationInfo.dropoff,
        numPassengers: reservationInfo.numPassengers,
        date: reservationInfo.date,
        time: reservationInfo.time,
        contactNo: reservationInfo.contactNo,
      },
      "GLuCpQdPfo7-bSxHd"     
    )
    .then((result) => {
      console.log("Email sent successfully:", result.text);
      alert("Reservation request sent!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send reservation. Try again.");
    });
  };

  return (
    <form className="reservation reserve-card w-[320px] p-8 pt-[4.5rem] absolute bottom-8 right-16 shadow-lg bg-white rounded-[1.5rem] text-left text-[15px]">
      <div className="absolute top-4 left-0 right-0 flex justify-center items-center px-3 gap-4 text-lg font-medium">
        <p>Book Now</p>
      </div>

      <input
        onChange={(e) => {
          handleInput(e);
          validateField("pickup", e.target.value);
        }}
        value={reservationInfo.pickup}
        name="pickup"
        placeholder="Pick Up Address"
        type="text"
        className={`w-full mb-3 rounded-[0.6rem] py-2 px-4 ${errors.pickup ? 'border border-red-500' : 'border-none'}`}
      />
      {errors.pickup && <p className="text-red-500 text-xs mb-2">Pickup is required.</p>}

      <input
        onChange={(e) => {
          handleInput(e);
          validateField("dropoff", e.target.value);
        }}
        value={reservationInfo.dropoff}
        name="dropoff"
        placeholder="Drop Off Address"
        type="text"
        className={`w-full mb-3 rounded-[0.6rem] py-2 px-4 ${errors.dropoff ? 'border border-red-500' : 'border-none'}`}
      />
      {errors.dropoff && <p className="text-red-500 text-xs mb-2">Drop-off is required.</p>}

      <input
        onChange={(e) => {
          handleInput(e);
          validateField("numPassengers", e.target.value);
        }}
        value={reservationInfo.numPassengers}
        name="numPassengers"
        placeholder="No. of Passengers"
        type="text"
        className={`w-full mb-3 rounded-[0.6rem] py-2 px-4 ${errors.numPassengers ? 'border border-red-500' : 'border-none'}`}
      />
      {errors.numPassengers && <p className="text-red-500 text-xs mb-2">Enter a number between 1–20.</p>}

      <input
        onFocus={() => setFocusedField("date")}
        onBlur={() => setFocusedField(null)}
        onChange={(e) => {
          handleInput(e);
          validateField("date", e.target.value);
        }}
        value={reservationInfo.date}
        name="date"
        type="date"
        min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
        className={`w-full mb-3 rounded-[0.6rem] py-2 px-4 ${errors.date ? 'border border-red-500' : 'border-none'}`}
      />
      {errors.date && <p className="text-red-500 text-xs mb-2">Date is required.</p>}

      <input
        onFocus={() => setFocusedField("time")}
        onBlur={() => setFocusedField(null)}
        onChange={(e) => {
          handleInput(e);
          validateField("time", e.target.value);
        }}
        value={reservationInfo.time}
        name="time"
        type="time"
        className={`w-full mb-3 rounded-[0.6rem] py-2 px-4 ${errors.time ? 'border border-red-500' : 'border-none'}`}
      />
      {errors.time && <p className="text-red-500 text-xs mb-2">Time is required.</p>}

      <input
        onChange={(e) => {
          handleInput(e);
          validateField("contactNo", e.target.value);
        }}
        value={reservationInfo.contactNo}
        name="contactNo"
        placeholder="Contact No."
        type="text"
        className={`w-full mb-3 rounded-[0.6rem] py-2 px-4 ${errors.contactNo ? 'border border-red-500' : 'border-none'}`}
      />
      {errors.contactNo && <p className="text-red-500 text-xs mb-2">Contact number must be 10–15 digits.</p>}

      <Button
        className="w-full"
        onClick={(e) => {
          e.preventDefault();
          sendEmail();
        }}
      >
        Reserve Now
      </Button>
    </form>
  );
};

export default ReservationCard;
