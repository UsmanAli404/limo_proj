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
      className="service-card bg-zinc-100 p-6 rounded-[1.5rem] w-[300px] sm:w-full sm:flex sm:space-x-8 text-sm"
    >
      <div className="card-img w-[260px] rounded-[1rem] mb-8 sm:mb-0 overflow-hidden">
        <Image
          src={image}
          alt="service-illustration"
          width={260}
          height={180}
          className="rounded-[1rem] w-full h-auto object-cover"
        />
      </div>

      <div className="card-content flex flex-col justify-between">
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
