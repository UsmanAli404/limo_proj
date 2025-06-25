'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import BannerSection from './BannerSection/BannerSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import FleetSection from './FleetSection/FleetSection';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Head>
        <title>Long Island Car and Limo | Luxury Limo & Black Car Service</title>
        <meta
          name="description"
          content="Book Long Island's top-rated limo and black car service for airport transfers, events, and hourly rentals. Serving Long Island, NYC, and beyond."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Long Island Car and Limo" />
        <meta name="keywords" content="Long Island limo, airport limo Long Island, car service Long Island, Long Island black car, JFK limo, ISP limo, luxury car Long Island" />

        <meta property="og:title" content="Long Island Car and Limo | Premium Chauffeur Service" />
        <meta property="og:description" content="Experience luxury travel across Long Island, NYC, and major airports with our limo and black car service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://longislandcarandlimo.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Long Island Car and Limo | Reliable Airport & Event Limo Service" />
        <meta name="twitter:description" content="Luxury transportation for JFK, LGA, weddings, proms, and business travel in Long Island & NYC." />

        <link rel="canonical" href="https://longislandcarandlimo.com/" />
      </Head>

      <BannerSection />
      <FeaturesSection />
      <ServicesSection />
      <FleetSection />
      <FeaturedSection />
    </>
  );
};

export default HomePage;
