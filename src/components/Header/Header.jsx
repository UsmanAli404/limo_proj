'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import PrimaryNav from './PrimaryNav';

const Header = () => {
  const screenMd = 800;

  const [shadowVisible, setShadowVisible] = useState(false);
  const [navHidden, setNavHidden] = useState(true);
  const [screenSize, setScreenSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  // Shadow toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShadowVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize handling
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-toggle navHidden based on screen size
  useEffect(() => {
    setNavHidden(screenSize < screenMd);
  }, [screenSize]);

  return (
    <header
      className={`py-6 fixed z-10 bg-white left-0 right-0 top-0 ${
        shadowVisible ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between">

        <Link href="/">
          <Image
            src="/logo-default.webp"
            alt="LIMO-logo"
            width={112}
            height={40}
            className="w-28"
          />
        </Link>

        <PrimaryNav screenSize={screenSize} navHidden={navHidden} />

        {screenSize < screenMd && (
          <button onClick={() => setNavHidden(!navHidden)} className="text-lg">
            <FontAwesomeIcon
              icon={navHidden ? faBars : faXmark}
              style={{ color: '#000000' }}
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
