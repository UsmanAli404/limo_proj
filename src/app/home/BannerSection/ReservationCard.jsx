"use client";

import { useState, useContext } from "react";
import Button from "../../../components/Button";
import Link from "next/link";
import ReservationContext from "../../../contexts/ReservationContext";

const ReservationCard = () => {
  const [activeMethod, setActiveMethod] = useState(1);

  const handleClick = (e, method) => {
    setActiveMethod(method);
    e.preventDefault();
  };

  // Reservation Inputs
  const { reservationInfo, handleInput } = useContext(ReservationContext);
  console.log(reservationInfo);

  return (
    <form className="reservation reserve-card w-[320px] p-8 pt-[4.5rem] absolute bottom-8 right-16 shadow-lg bg-white rounded-[1.5rem] text-left text-[15px] hidden md:block">
      <div className="text-sm absolute px-3 right-0 left-0 top-4 flex justify-center gap-4">
        <button
          onClick={(e) => handleClick(e, 1)}
          className={
            activeMethod === 1
              ? "py-2 px-4 h-full rounded-[0.6rem] active"
              : "py-2 px-4 h-full rounded-[0.6rem]"
          }
        >
          Distance
        </button>
        <button
          onClick={(e) => handleClick(e, 2)}
          className={
            activeMethod === 2
              ? "py-2 px-4 h-full rounded-[0.6rem] active"
              : "py-2 px-4 h-full rounded-[0.6rem]"
          }
        >
          Hourly
        </button>
        <button
          onClick={(e) => handleClick(e, 3)}
          className={
            activeMethod === 3
              ? "py-2 px-4 h-full rounded-[0.6rem] active"
              : "py-2 px-4 h-full rounded-[0.6rem]"
          }
        >
          Flat Rate
        </button>
      </div>

      <input
        onChange={(e) => handleInput(e)}
        value={reservationInfo.pickup}
        name="pickup"
        placeholder="Pick Up Address"
        type="text"
      />
      <input
        onChange={(e) => handleInput(e)}
        value={reservationInfo.dropoff}
        name="dropoff"
        placeholder="Drop Off Address"
        type="text"
      />
      <select
        className="bg-gray-100 mb-3 rounded-[0.6rem] py-2 px-4 w-full"
        style={{ appearance: "none" }}
        disabled
        name=""
        id=""
      >
        <option value="one_way">One Way</option>
      </select>
      <input
        onChange={(e) => handleInput(e)}
        value={reservationInfo.date}
        name="date"
        type="date"
      />
      <div className="flex space-x-4 items-center">
        <label className="text-gray-700 w-5/6 mb-3" htmlFor="time">
          Pick Up Time
        </label>
        <input
          onChange={(e) => handleInput(e)}
          value={reservationInfo.time}
          name="time"
          type="time"
          id="time"
        />
      </div>

      <Link href="/vehicles">
        <Button>Reserve Now</Button>
      </Link>
    </form>
  );
};

export default ReservationCard;