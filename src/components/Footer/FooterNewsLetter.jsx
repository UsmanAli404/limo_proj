'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FooterNewsLetter = () => {
  return (
    <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">Subscribe to the newsletter</label>
      <div className="flex items-center mt-4">
        <input
          className="bg-neutral-700 text-white placeholder:text-neutral-400 block py-3 px-4 pr-8 rounded-[0.4rem]"
          type="email"
          placeholder="Email..."
          id="email"
          required
        />
        <button
          className="bg-white text-black w-[38px] h-[38px] rounded-[0.4rem] -ml-[41px]"
          type="submit"
          aria-label="Submit newsletter"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </form>
  );
};

export default FooterNewsLetter;
