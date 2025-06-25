'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

const ServiceCard = ({ image, heading, text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="service-card bg-zinc-100 p-6 rounded-[1.5rem] w-[300px] sm:w-full sm:flex sm:items-start sm:gap-6 text-sm"
    >
      <div className="card-img w-full sm:w-[40%] rounded-[1rem] mb-4 sm:mb-0 overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt="service-illustration"
          width={400}
          height={300}
          className="rounded-[1rem] w-full h-auto object-cover"
        />
      </div>

      <div className="card-content flex flex-col justify-between w-full sm:w-[60%]">
        <h2 className="text-2xl font-semibold mb-3">{heading}</h2>
        <p className="text-neutral-600 mb-3">{text}</p>
        <Link href="/services">
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
