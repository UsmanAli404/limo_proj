'use client';

import FooterLink from './FooterLink';

const FooterLinkColumn = ({col}) => {
  return (
    <div className="text-neutral-400">
      <h2 className="font-semibold text-white my-6">{col.title}</h2>
      <ul>
        {col.links.map((link, index) => (
          <FooterLink link={link} key={index}>
            {col.names[index]}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
