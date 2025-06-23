'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PrimaryNav = ({ navHidden, screenSize }) => {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? 'nav-link text-black font-semibold' : 'nav-link';

  return (
    <nav
      className={`absolute z-10 rounded-[1rem] shadow-default md:shadow-none top-20 left-4 md:h-full right-4 sm:w-96 sm:right-4 sm:left-auto py-8 text-center md:py-0 bg-white md:bg-transparent md:static ${
        navHidden ? 'hidden' : ''
      }`}
    >
      <ul className="flex flex-col md:flex-row gap-16 mb-8 md:mb-0 justify-center">
        <li>
          <Link href="/" className={isActive('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/vehicles" className={isActive('/vehicles')}>
            Vehicles
          </Link>
        </li>
        <li>
          <Link href="/services" className={isActive('/services')}>
            Services
          </Link>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
