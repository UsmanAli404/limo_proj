'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import FooterNewsLetter from './FooterNewsLetter';
import FooterLinkColumn from './FooterLinkColumn';
import FooterLink from './FooterLink';

const Footer = () => {
  const linkCols = [
    {
      title: 'Quick Links',
      names: ['Home', 'Our Fleet', 'Services', 'Book Now'],
      links: ['/home', '/vehicles', '/services', '/book-online'],
    },
   
    {
      title: 'Our Services',
      names: ['Airport Transfers', 'Intercity Trips', 'Wedding Events', 'Business Meetings'],
      links: ['/services', '/services', '/services', '/services'],
    },
    
  ];

  const socialIcons = [
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
  ];

  return (
    <footer className="container-big text-center md:text-left bg-neutral-800 text-sm font-light text-white rounded-[1.5rem] flex flex-col items-center md:block mt-20 mb-[2.5vw] py-12 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between mb-12">
        <div className='flex flex-col justify-center items-center'>
          <Image
            src="/logo-footer.svg"
            width={112}
            height={40}
            alt="logo"
            className="w-36 mx-auto md:mx-0 pb-10"
          />
          <p className="max-w-sm text-center md:text-left px-4">
            Long Island Limo provides premier limousine services across New York, New Jersey, and Connecticut.
            Specializing in luxurious, chauffeur-driven vehicles, we cater to weddings, proms, corporate events,
            and airport transfers. Our fleet includes stretch limos, luxury sedans, SUVs, Vans, Coaches, and
            Party Buses, ensuring comfort, safety, and professionalism for a stylish travel experience in the tri-state area.
          </p>
        </div>

        <div className="footer-links flex flex-col gap-6 md:flex-row md:justify-evenly md:items-start w-full md:w-auto">
          <div className='flex flex-col justify-center items-center self-center
          mt-6
          gap-3 sm:gap-8'>
            <div className="
            flex justify-center items-center 
            gap-1 mx-4 ">
              <FaMapMarkerAlt className="text-xl text-white" />
              <a
                href="https://www.google.com/maps?q=82+Southaven+Ave,+Medford,+NY+11763"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-gray-200 max-w-xs md:max-w-sm"
              >
                82 Southaven Ave, Medford, NY 11763, United States
              </a>
            </div>

            <div className="
            flex justify-center items-center 
            gap-1 mx-4 ">
              <FaPhoneAlt className="text-xl text-white" />
              <a href="tel:+16318597522" 
                className="font-medium text-white hover:text-gray-200 max-w-xs md:max-w-sm"
              >
                +1 631-859-7522
              </a>
            </div>
          </div>
          
          {linkCols.map((col) => (
            <FooterLinkColumn col={col} key={col.title} />
          ))}
        </div>

      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="font-medium mb-2">&copy; 2025 Long Island Car & Limo</p>

        <ul className="social-links text-2xl flex gap-6">
          {socialIcons.map((icon, i) => (
            <FooterLink link="#" key={i}>
              <FontAwesomeIcon
                className="text-neutral-400 hover:text-white transition"
                icon={icon}
              />
            </FooterLink>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
