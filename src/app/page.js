// app/page.js
'use client';
import HomePage from "./home/page";

export default function Start() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <>
      <HomePage/>
  </>;
}
