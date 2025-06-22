'use client';

import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

import cars from '@/data/cars';
import SliderCard from '@/components/SliderCard';

const CarSlider = ({ activeTab, setSelectedVehicle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1000, min: 480 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const chooseVehicle = (name) => {
    const selected = cars.find((car) => car.name === name);
    setSelectedVehicle(selected);
  };

  const filteredCars = cars.filter((car) => {
    switch (activeTab) {
      case 1:
        return true;
      case 2:
        return car.type.includes('luxury');
      case 3:
        return car.type.includes('business');
      case 4:
        return car.type.includes('crossover');
      default:
        return true;
    }
  });

  return (
    <div className="md:pl-16" data-aos="fade-left">
      <Carousel
        responsive={responsive}
        showDots={true}
        partialVisible={true}
        swipeable={true}
        draggable={true}
      >
        {filteredCars.map((car, i) => (
          <SliderCard
            {...car}
            index={i}
            key={car.id}
            chooseVehicle={chooseVehicle}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarSlider;
