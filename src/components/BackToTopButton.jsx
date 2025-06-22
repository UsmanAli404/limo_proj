'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
  const [bttVisible, setBttVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setBttVisible(true);
      else setBttVisible(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollUp}
      className={`fixed bg-neutral-900 w-12 transition-opacity duration-200 h-12 text-lg rounded-full p-2 bottom-4 right-4 ${
        bttVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} style={{ color: '#fff' }} />
    </button>
  );
};

export default BackToTopButton;
