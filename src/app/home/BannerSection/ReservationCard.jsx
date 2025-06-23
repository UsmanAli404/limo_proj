'use client';

import { useState, useContext } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { ReservationContext } from "@/contexts/ReservationContext";

const ReservationCard = () => {
  const [activeMethod, setActiveMethod] = useState(1);
  const [errors, setErrors] = useState({
    numPassengers: false,
    contactNo: false,
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleClick = (e, method) => {
    e.preventDefault();
    setActiveMethod(method);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    if (value.trim() === "") {
      newErrors[name] = false;
    } else {
      if (name === "numPassengers") {
        const valid = /^\d+$/.test(value) && parseInt(value) > 0 && parseInt(value) <= 20;
        newErrors.numPassengers = !valid;
      }

      if (name === "contactNo") {
        const valid = /^[0-9]{10,15}$/.test(value);
        newErrors.contactNo = !valid;
      }
    }

    setErrors(newErrors);
  };


  const { reservationInfo, handleInput } = useContext(ReservationContext);

  return (
    <form className="reservation reserve-card w-[320px] p-8 pt-[4.5rem] absolute bottom-8 right-16 shadow-lg bg-white rounded-[1.5rem] text-left text-[15px]">
      <div className="absolute top-4 left-0 right-0 flex justify-center items-center px-3 gap-4 text-lg font-medium">
        <p>Book Now</p>
      </div>

      <input
        onChange={handleInput}
        value={reservationInfo.pickup}
        name="pickup"
        placeholder="Pick Up Address"
        type="text"
      />

      <input
        onChange={handleInput}
        value={reservationInfo.dropoff}
        name="dropoff"
        placeholder="Drop Off Address"
        type="text"
      />

      <div className="mb-3">
        <input
          onChange={(e)=>{
            handleInput(e);
            validateField(e.target.name, e.target.value);
          }}
          value={reservationInfo.numPassengers}
          name="numPassengers"
          placeholder="No. of Passengers"
          type="text"
          className={`w-full mb-3 rounded-[0.6rem] py-2 px-4 ${errors.numPassengers ? 'border border-red-500' : 'border-none'}`}
        />
        {errors.numPassengers && (
          <p className="text-red-500 text-xs mt-1">Please enter a valid number (1–20).</p>
        )}
      </div>

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
          className="w-full rounded-[0.6rem] py-2 px-4 border-none"
        />
      </div>

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

      <div className="mb-3">
        <input
          onChange={(e)=>{
            handleInput(e);
            validateField(e.target.name, e.target.value);
          }}
          value={reservationInfo.contactNo}
          name="contactNo"
          placeholder="Contact No."
          type="text"
          className={`w-full rounded-[0.6rem] py-2 px-4 ${errors.contactNo ? 'border border-red-500' : 'border-none'}`}
        />
        {errors.contactNo && (
          <p className="text-red-500 text-xs mt-1">Please enter a valid contact number (10–15 digits).</p>
        )}
      </div>

      <Link href="/vehicles">
        <Button className="w-full">Reserve Now</Button>
      </Link>
    </form>
  );
};

export default ReservationCard;
