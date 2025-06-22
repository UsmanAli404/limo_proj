'use client';

import Link from 'next/link';

const FooterLink = ({ link, children }) => {
  return (
    <li className="mb-2">
      <Link href={link} className="hover:text-white transition">
        {children}
      </Link>
    </li>
  );
};

export default FooterLink;
