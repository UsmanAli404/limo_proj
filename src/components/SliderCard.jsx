'use client';

import { faBriefcase, faPerson } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ReservationContext } from '@/contexts/ReservationContext';
import CapacityItem from '../app/home/FleetSection/CapacityItem';

const SliderCard = ({ image, name, seats, luggage }) => {
  const { setSelectedVehicle } = useContext(ReservationContext);

  const handleClick = () => {
    const vehicle = {
      name,
      image,
      seats,
      luggage,
    };
    setSelectedVehicle(vehicle);
  };

  return (
    <Link
      href={{ pathname: '/vehicles', query: { selected: name } }}
      onClick={handleClick}
    >
      <div className="slider-card mx-2 pb-8 cursor-pointer">
        <div className="car-image w-full h-[290px] flex items-center justify-center bg-zinc-100 rounded-[1.5rem] hover:shadow-md px-8">
          <Image
            src={image}
            alt={`${name} - image`}
            width={400}
            height={250}
            className="car w-full h-auto object-contain transition"
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
