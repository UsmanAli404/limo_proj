'use client';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const FeatureCard = ({ featureIcon, heading, text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="feature-card w-[200px] mx-auto" data-aos="fade-left">
      <Image
        src={featureIcon}
        alt="feature-illustration"
        width={80}
        height={80}
        className="mb-5"
      />
      <h2 className="mb-2 text-lg font-medium">{heading}</h2>
      <p className="text-neutral-600 text-sm">{text}</p>
    </div>
  );
};

export default FeatureCard;
