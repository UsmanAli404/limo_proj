'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import PrimaryNav from './PrimaryNav';

const Header = () => {
  const screenMd = 800;

  const [shadowVisible, setShadowVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleButtonRef = useRef(null);

  // Handle scroll shadower
  useEffect(() => {
    const handleScroll = () => {
      setShadowVisible(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < screenMd;
      setIsMobile(mobile);
      if (!mobile) setNavOpen(false); // Close nav when resizing to desktop
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`py-6 fixed z-50 bg-white left-0 right-0 top-0 transition-shadow ${
        shadowVisible ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo-default.svg"
            alt="LIMO-logo"
            width={112}
            height={40}
            className="w-36"
          />
        </Link>

        <PrimaryNav
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          isMobile={isMobile}
          toggleButtonRef={toggleButtonRef}
        />

        {isMobile && (
          <button
            ref={toggleButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              setNavOpen((prev) => !prev);
            }}
            className="text-xl"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={navOpen ? faXmark : faBars}
              style={{ color: '#000000' }}
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
