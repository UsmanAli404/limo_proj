'use client';

import { faBriefcase, faPerson } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import CapacityItem from '../app/home/FleetSection/CapacityItem';

const SliderCard = ({ index, image, name, seats, luggage, chooseVehicle }) => {
  return (
    <div
      onClick={()=>{
        chooseVehicle(name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} 
      className={`slider-card mx-2 pb-8 cursor-pointer ${index === 0 && ""}`}
    >
      <div 
        className={`car-image w-full h-[290px] bg-zinc-100 flex items-center justify-center rounded-[1.5rem] hover:shadow-md px-8`}
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
  );
};

export default SliderCard;