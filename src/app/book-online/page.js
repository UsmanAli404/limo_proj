'use client';

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ReservationContext } from "@/contexts/ReservationContext";
import emailjs from '@emailjs/browser';
const Reservation = () => {
  const { reservationInfo, handleInput, selectedVehicle } = useContext(ReservationContext);

  useEffect(() => window.scrollTo(0, 0), []);

  const [touched, setTouched] = useState({});

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isFieldValid = (field) => reservationInfo[field]?.trim() !== "";

  const requiredFields = [
    "name", "cellphone", "email", "numPassengers",
    "pickup", "dropoff", "date", "time"
  ];
  const onBooking = () => {
   emailjs.send(
    "LimoService",
    "NewTemplate",
  {
    name: reservationInfo.name,
    cellphone: reservationInfo.cellphone,
    email: reservationInfo.email,
    pickup: reservationInfo.pickup,
    dropoff: reservationInfo.dropoff,
    numPassengers: reservationInfo.numPassengers,
    date: reservationInfo.date,
    time: reservationInfo.time,
    vehicle: reservationInfo.vehicle?.name || "Not selected",
    specialRequest: reservationInfo.specialRequest || "None",
  },
  "nDc1bgGPlprzJBOmy"
).then((result) => {
      console.log("Email sent successfully:", result.text);
      alert("Reservation request sent!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send reservation. Try again.");
    });;

  }
  const isFormValid = requiredFields.every(isFieldValid);

 return (
  <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 mt-20">
    {/* Left: Image */}
    <div className="relative h-[500px] md:h-auto ">
      <Image
        src={selectedVehicle?.image || "/placeholder.png"}
        alt="Vehicle"
        fill
        quality={100}
        className="object-contain object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/10 rounded-3xl"  />
    </div>

<<<<<<< HEAD:src/app/reservation/page.js
    {/* Right: Form */}
    <div className="bg-white text-black p-8 md:p-12 flex flex-col justify-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-neutral-700">
        Reservation
      </h1>
=======
      {/* Optional overlay (very light for readabiadlity) */}
      <div className="absolute inset-0 bg-black/10 z-0" />
>>>>>>> muteeb:src/app/book-online/page.js

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "name", label: "Full Name", type: "text", placeholder: "Your Full Name" },
          { name: "cellphone", label: "Phone", type: "tel", placeholder: "03XX-XXXXXXX" },
          { name: "email", label: "Email", type: "email", placeholder: "example@mail.com" },
          { name: "numPassengers", label: "No. of Passengers", type: "number", placeholder: "e.g. 4" },
          { name: "pickup", label: "Pick Up", type: "text", placeholder: "Pick Up Address" },
          { name: "dropoff", label: "Drop Off", type: "text", placeholder: "Drop Off Address" },
          { name: "date", label: "Date", type: "date", min: new Date().toISOString().split("T")[0] },
          { name: "time", label: "Time", type: "time" },
        ].map((field, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              {field.label}
              {touched[field.name] && !isFieldValid(field.name) && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </label>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={reservationInfo[field.name]}
              onChange={handleInput}
              onBlur={() => handleBlur(field.name)}
              min={field.min || undefined}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-500"
            />
          </div>
        ))}

        {/* Special Request - Full Width */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-neutral-700 mb-1">Special Request</label>
          <textarea
            name="specialRequest"
            value={reservationInfo.specialRequest}
            onChange={handleInput}
            rows="3"
            placeholder="Any special instructions..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <Link href="/vehicles">
          <Button>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Select Vehicle
          </Button>
        </Link>
        <Link href={isFormValid ? "/thankyou" : "/reservation"}>
          <Button
            disabled={!isFormValid}
            className={!isFormValid ? "opacity-50 cursor-not-allowed" : ""}
            onClick={onBooking}
          >
            Reserve Now
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

};

export default Reservation;
