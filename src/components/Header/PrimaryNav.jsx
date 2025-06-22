"use client";

import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PrimaryNav = ({ navHidden, screenSize }) => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`absolute z-10 rounded-[1rem] shadow-default md:shadow-none top-20 left-4 md:h-full right-4 sm:w-96 sm:right-4 sm:left-auto py-8 text-center md:py-0 bg-white md:bg-transparent md:static ${
        navHidden && "hidden"
      }`}
    >
      <ul className="flex flex-col md:flex-row gap-16 mb-8 md:mb-0 justify-center">
        <li>
          <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/vehicles" className={`nav-link ${isActive("/vehicles") ? "active" : ""}`}>
            Vehicles
          </Link>
        </li>
        <li>
          <Link href="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`}>
            Services
          </Link>
        </li>
        <li>
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>

      {/* Show LanguageSelector below nav items on small screens */}
      {screenSize < 800 && <LanguageSelector />}
    </nav>
  );
};

export default PrimaryNav;