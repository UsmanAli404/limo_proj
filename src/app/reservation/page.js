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
    <div className="relative min-h-screen flex items-center justify-center mt-28 overflow-hidden">
      <Image
        src={selectedVehicle?.image || "/placeholder.png"}
        alt="Background"
        fill
        quality={100}
        className="object-cover object-center -z-10"
        priority
      />

      {/* Optional overlay (very light for readability) */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Transparent Form Container */}
      <div className="relative z-10 w-full max-w-6xl p-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 text-center drop-shadow-lg">
          Reservation
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {[
            { name: "name", label: "Full Name", type: "text", placeholder: "Your Full Name" },
            { name: "cellphone", label: "Phone", type: "tel", placeholder: "03XX-XXXXXXX" },
            { name: "email", label: "Email", type: "email", placeholder: "example@mail.com" },
            { name: "numPassengers", label: "# of Passengers", type: "number", placeholder: "e.g. 4" },
            { name: "pickup", label: "Pick Up", type: "text", placeholder: "Pick Up Address" },
            { name: "dropoff", label: "Drop Off", type: "text", placeholder: "Drop Off Address" },
            { name: "date", label: "Date", type: "date", min: new Date().toISOString().split("T")[0] },
            { name: "time", label: "Time", type: "time" },
          ].map((field, i) => (
            <div key={i}>
              <label className="flex justify-between font-medium mb-1">
                <span>{field.label}</span>
                {touched[field.name] && !isFieldValid(field.name) && (
                  <span className="text-red-400 text-sm">Required</span>
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
                className="w-full border border-white bg-white text-black rounded px-3 py-2"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="font-medium mb-1 block">Special Request</label>
            <textarea
              name="specialRequest"
              value={reservationInfo.specialRequest}
              onChange={handleInput}
              rows="3"
              placeholder="Any special instructions..."
              className="w-full border border-white bg-white text-black rounded px-3 py-2"
            />
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4 text-white">
          <Link href="/vehicles">
            <Button>
              <FontAwesomeIcon icon={faArrowLeft} className="text-white mr-3" />
              Select Vehicle
            </Button>
          </Link>
          <Link href={isFormValid ? "/thankyou" : "/reservation"}>
            <Button disabled={!isFormValid} className={!isFormValid ? "opacity-50 cursor-not-allowed" : ""} onClick={onBooking}>
              Reserve Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
