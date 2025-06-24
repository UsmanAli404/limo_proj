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
      "nDc1bgGPlprzJBOmy"     
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
    <form className="
      reservation w-[320px] p-8
      absolute left-1/2 bottom-5 -translate-x-1/2
      lg:left-auto lg:right-5 lg:translate-x-0
      shadow-lg bg-white rounded-[1.5rem] text-left text-[15px]
      transition-all duration-500 ease-in-out
    ">

      <p className="text-center text-lg font-medium mb-3">Book Now</p>

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

       <div className="mb-3">
        {focusedField === "date" && (
          <label className="block text-sm text-gray-600 mb-1">Pick Up Date</label>
        )}
        <input
          onFocus={() => setFocusedField("date")}
          onBlur={() => setFocusedField(null)}
          onChange={handleInput}
          value={reservationInfo.date}
          name="date"
          type="date"
          id="date"
           min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
          className="w-full rounded-[0.6rem] py-2 px-4 border-none"
        />
      </div>
      {errors.date && <p className="text-red-500 text-xs mb-2">Date is required.</p>}

      <div className="mb-3">
        {focusedField === "time" && (
          <label className="block text-sm text-gray-600 mb-1">Pick Up Time</label>
        )}
        <input
          onFocus={() => setFocusedField("time")}
          onBlur={() => setFocusedField(null)}
          onChange={handleInput}
          value={reservationInfo.time}
          name="time"
          type="time"
          id="time"
          className="w-full rounded-[0.6rem] py-2 px-4 border-none"
        />
      </div>
      {errors.time && <p className="text-red-500 text-xs mb-2">Time is required.</p>}

      <input
        onChange={(e) => {
          handleInput(e);
          validateField("contactNo", e.target.value);
        }}
        value={reservationInfo.contactNo || ''}
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
