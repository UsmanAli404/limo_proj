const Button = ({ children }) => {
  return (
    <button
      onClick={(e) => {
        // e.preventDefault();
      }}
      className="bg-black hover:bg-neutral-800 transition duration-200 text-sm font-light text-white rounded-[0.6rem] py-3 px-8"
    >
      {children}
    </button>
  );
};

export default Button;
