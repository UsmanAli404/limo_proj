'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';

const PrimaryNav = ({ navHidden, setNavHidden, screenSize }) => {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? 'nav-link text-black font-semibold' : 'nav-link';

  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      e.stopPropagation();
      if (navRef.current && !navRef.current.contains(e.target) && !navHidden) {
        console.log(`pre: ${navHidden}, post: true`);
        setNavHidden(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navHidden]);

  return (
    <nav
      ref={navRef}
      className={` 
        absolute z-10 left-0 right-0 top-18
        md:h-full md:static
        py-8 text-center md:py-0
        bg-white md:bg-transparent
        rounded-b-[1rem] rounded-t-none
        shadow-lg md:shadow-none
        transition-all duration-300 ease-in-out transform
        ${navHidden ? 'opacity-0 -translate-y-4 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'}
      `}
    >
      <ul className="flex flex-col md:flex-row gap-16 mb-8 md:mb-0 justify-center">
        <li>
          <Link href="/" className={isActive('/')} onClick={() => setNavHidden(true)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/vehicles" className={isActive('/vehicles')} onClick={() => setNavHidden(true)}>
            Vehicles
          </Link>
        </li>
        <li>
          <Link href="/services" className={isActive('/services')} onClick={() => setNavHidden(true)}>
            Services
          </Link>
        </li>
        <li>
         <Link href="/contact" className={isActive('/contact')} onClick={() => setNavHidden(true)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
