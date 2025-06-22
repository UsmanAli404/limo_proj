'use client';

import { useEffect } from 'react';
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
      <BannerSection />
      <FeaturesSection />
      <ServicesSection />
      <FleetSection />
      <FeaturedSection />
    </>
  );
};

export default HomePage;
