"use client";

import { faBriefcase, faPerson } from "@fortawesome/free-solid-svg-icons";
import CapacityItem from "../app/home/FleetSection/CapacityItem";
import Link from "next/link";

const SliderCard = ({ index, image, name, seats, luggage, chooseVehicle }) => {
  return (
    <Link href="/vehicles">
      <div
        onClick={() => chooseVehicle(name)}
        className={`slider-card mx-2 pb-8 cursor-pointer ${index === 0 && ""}`}
      >
        <div
          className={`car-image w-full h-[290px] flex items-center justify-center ${
            index === 0 ? "bg-accent/20" : "bg-zinc-100"
          } rounded-[1.5rem] hover:shadow-md px-8`}
        >
          <img
            className="car w-full transition"
            src={image}
            alt={name + " - image"}
          />
        </div>
        <h2 className="text-lg font-medium my-4">{name}</h2>
        <div className="capacity-info flex gap-2">
          <CapacityItem text={seats} icon={faPerson} />
          <CapacityItem text={luggage} icon={faBriefcase} />
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;