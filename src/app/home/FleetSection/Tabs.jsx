'use client';

const Tabs = ({ handleClick, active }) => {
  const tabClass = (tabNumber) =>
    `px-4 py-2 text-sm font-medium transition rounded-[0.5rem] ${
      active === tabNumber ? 'bg-black text-white' : 'text-neutral-600 hover:bg-neutral-200'
    }`;

  return (
    <div className="tabs text-center mb-12 space-x-4">
      <button className={tabClass(1)} onClick={() => handleClick(1)}>
        All
      </button>
      <button className={tabClass(2)} onClick={() => handleClick(2)}>
        Luxury
      </button>
      <button className={tabClass(3)} onClick={() => handleClick(3)}>
        Business
      </button>
      <button className={tabClass(4)} onClick={() => handleClick(4)}>
        Crossover
      </button>
    </div>
  );
};

export default Tabs;
