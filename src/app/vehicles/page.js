'use client';

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import cars from "@/data/cars";
import SliderCard from "@/components/SliderCard";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ReservationContext } from "@/contexts/ReservationContext";

const Vehicles = () => {
  const [filter, setFilter] = useState("1");
  const [selectedVehicle, setSelectedVehicle] = useState(cars[0]);

  const { setSelectedVehicle: setContextVehicle } = useContext(ReservationContext);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chooseVehicle = (name) => {
    setSelectedVehicle(cars.find((car) => car.name === name));
  };

  const handleBookNow = () => {
    setContextVehicle(selectedVehicle);
    router.push("/book-online");
  };

  return (
    <div className="container-default text-center md:text-left mt-28 py-8 px-20">
      <h1 className="text-5xl md:text-7xl font-semibold">Our Fleet</h1>
      <p className="md:w-2/3 text-zinc-600">
        We offer a variety of luxurious vehicles for you to choose from...
      </p>

      <div className="grid md:grid-cols-2 gap-12 my-16">
        <div className="bg-zinc-200 p-4 rounded-[1rem] flex items-center">
          <Image
            className="w-full"
            src={selectedVehicle.image}
            alt={selectedVehicle.name}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-4xl font-semibold">{selectedVehicle.name}</h2>
          <p className="text-zinc-600 mt-4">{selectedVehicle.detail}</p>
          <hr className="mt-4" />
          <h3 className="mt-8 text-2xl font-medium">Capacity</h3>
          <p className="mt-1">Luggage: <span className="font-medium">{selectedVehicle.luggage}</span></p>
          <p className="mt-1 mb-12">Seats: <span className="font-medium">{selectedVehicle.seats}</span></p>
          
          <Button onClick={handleBookNow}>
            Book Now
            <FontAwesomeIcon icon={faArrowRight} className="text-white ml-4" />
          </Button>
        </div>
      </div>

      <h2 className="text-4xl font-semibold mb-6">Other Cars</h2>
      <label className="ml-2" htmlFor="filter">Filter By:</label>
      <select
        className="rounded-[0.4rem] border border-zinc-400 py-1 pl-2 pr-4 ml-2 mb-8"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="1">All</option>
        <option value="2">Luxury</option>
        <option value="3">Business</option>
        <option value="4">Crossover</option>
      </select>

      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {cars
          .filter((car) => {
            switch (filter) {
              case "1":
                return true;
              case "2":
                return car.type.includes("luxury");
              case "3":
                return car.type.includes("business");
              case "4":
                return car.type.includes("crossover");
            }
          })
          .map((car, i) => (
            <SliderCard {...car} key={i} chooseVehicle={chooseVehicle} />
          ))}
      </div>
    </div>
  );
};

export default Vehicles;
