'use client';

const LanguageSelector = () => {
  return (
    <select
      name="language"
      className="bg-zinc-100/50 h-full border-zinc-400 text-neutral-600 border-2 px-1 rounded-[0.4rem]"
      aria-label="Select Language"
    >
      <option value="english">Eng</option>
    </select>
  );
};

export default LanguageSelector;
