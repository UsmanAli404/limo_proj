'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const PrimaryNav = ({ navOpen, setNavOpen, isMobile, toggleButtonRef }) => {
  const pathname = usePathname();
  const navRef = useRef(null);

  const isActive = (path) =>
    pathname === path ? 'nav-link text-black font-semibold' : 'nav-link';

  // Close nav on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        (!toggleButtonRef.current || !toggleButtonRef.current.contains(e.target))
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navOpen, setNavOpen, toggleButtonRef]);

  // Close nav on route change
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className={`
        absolute z-40 left-0 right-0 top-20
        md:static md:z-auto
        py-8 md:py-0
        text-center md:text-left
        bg-white md:bg-transparent
        rounded-b-xl md:rounded-none
        shadow-lg md:shadow-none
        transition-all duration-300 ease-in-out
        transform
        ${isMobile ? (navOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none') : ''}
      `}
    >
      <ul className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center md:justify-end items-center">
        {[
          { name: 'Home', path: '/' },
          { name: 'Our Fleet', path: '/vehicles' },
          { name: 'Services', path: '/services' },
          { name: 'Contact', path: '/contact' },
        ].map(({ name, path }) => (
          <li key={path}>
            <Link href={path} className={isActive(path)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryNav;
