'use client';

import { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-default mt-28 text-center">
      <h1 className="text-5xl md:text-7xl font-semibold">Reserved!</h1>
      <p className="text-zinc-600 mt-4">
        Thank you for choosing us. Your ride is booked!
      </p>
    </div>
  );
};

export default ThankYouPage;
