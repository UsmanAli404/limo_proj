'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import ReservationCard from './ReservationCard';

const BannerSection = () => {
  return (
   <div className="banner relative container-big rounded-[1.5rem] text-center mt-24 space-y-4 md:space-y-6">
      <h1 className="
        font-semibold tracking-wide pt-6 text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-8xl lg:pt-8
      ">
        Luxury Limo Hires
      </h1>
      <p className="sm:w-[42ch] mx-10 sm:mx-auto mb-2 sm:mb-6">
        We offer professional car rental & limousine services in our range of high-end vehicles
      </p>

      <Link href="/vehicles">
        <Button className=''>Open Fleet</Button>
      </Link>

      <ReservationCard />
    </div>
  );
};

export default BannerSection;
