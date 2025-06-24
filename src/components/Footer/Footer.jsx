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
      names: ['Home', 'Our Fleet', 'Services', 'Contact'],
      links: ['/home', '/vehicles', '/services', '/contact'],
    },
    {
      title: 'Top cities',
      names: ['New York', 'London', 'Berlin', 'Los Angeles', 'Paris'],
      links: ['#', '#', '#', '#', '#'],
    },
    {
      title: 'Our Services',
      names: ['Airport Transfers', 'Intercity Trips', 'Wedding Events', 'Business Meetings'],
      links: ['/services#airport-transfers', '/services#intercity-trips', '/services#wedding-events', '/services#business-meetings'],
    },
    {
      title: 'Explore',
      names: [
        'Intercity rides',
        'Limousine service',
        'Chauffeur service',
        'Private car service',
        'Airport transfers',
      ],
      links: ['#', '#', '#', '#', '#'],
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
      <div className="flex flex-col md:flex-row gap-15 md:justify-between mb-12">
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
          <FooterNewsLetter />
        </div>

        <div className="footer-links flex flex-col gap-6 md:flex-row md:justify-evenly md:items-start w-full md:w-auto">
          <div className="flex content-center grow items-center gap-1 mt-6 mx-4 max-w-xs md:max-w-sm">
            <FaPhoneAlt className="text-xl text-white" />
            <a href="tel:+16318597522" className="font-medium text-white hover:font-bold">
              +1 631-859-7522
            </a>
          </div>

          <div className="flex content-center items-center grow gap-1 mt-6 mx-4 max-w-xs md:max-w-sm">
            <FaMapMarkerAlt className="text-xl text-white" />
            <a
              href="https://www.google.com/maps?q=82+Southaven+Ave,+Medford,+NY+11763"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:font-bold"
            >
              82 Southaven Ave, Medford, NY 11763, United States
            </a>.
          </p>
          <FooterNewsLetter />
        </div>

        <div className="footer-links flex flex-col md:flex-row md:justify-between md:w-2/3">
          {linkCols.map((col) => (
            <FooterLinkColumn col={col} key={col.title} />
          ))}

        </div>

      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="font-medium mb-2">&copy; 2025 Long Island Limo</p>

        <ul className="bottom-links flex flex-col md:flex-row gap-4 text-neutral-400 font-normal">
          <FooterLink link="#">Terms</FooterLink>
          <FooterLink link="#">Privacy policy</FooterLink>
          <FooterLink link="#">Legal notice</FooterLink>
          <FooterLink link="#">Accessibility</FooterLink>
        </ul>

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
