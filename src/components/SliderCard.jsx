'use client';

import { faBriefcase, faPerson } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ReservationContext } from '@/contexts/ReservationContext';
import CapacityItem from '../app/home/FleetSection/CapacityItem';

const SliderCard = ({ index, image, name, seats, luggage, chooseVehicle }) => {
  return (
    <Link
      href={{ pathname: '/vehicles', query: { selected: name } }}
    >
      <div
        onClick={()=>chooseVehicle(name)} 
        className={`slider-card mx-2 pb-8 cursor-pointer ${index === 0 && ""}`}
      >
        <div 
          className={`car-image w-full h-[290px] flex items-center justify-center ${
            index === 0 ? "bg-accent/20" : "bg-zinc-100"
          } rounded-[1.5rem] hover:shadow-md px-8`}
        >
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