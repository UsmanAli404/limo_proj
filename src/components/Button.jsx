'use client';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-black hover:bg-neutral-800 transition duration-200 text-sm font-light text-white rounded-[0.6rem] py-3 px-8 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
