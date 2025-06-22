"use client";

import logo from "../../assets/logo-default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PrimaryNav from "./PrimaryNav";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const screenMd = 800;

  const [shadowVisible, setShadowVisible] = useState(false);
  const [navHidden, setNavHidden] = useState(true);
  const [screenSize, setScreenSize] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);

      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);

      const handleScroll = () => {
        setShadowVisible(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (screenSize >= screenMd) setNavHidden(false);
    else setNavHidden(true);
  }, [screenSize]);

  if (!hasMounted) return null;

  return (
    <header
      className={`py-6 fixed z-10 bg-white left-0 right-0 top-0 ${
        shadowVisible ? "shadow-default" : ""
      }`}
    >
      <div className="container-big flex justify-between">
        <a href="/">
          <img className="w-28" src={logo} alt="LIMO-logo" />
        </a>
        <PrimaryNav screenSize={screenSize} navHidden={navHidden} />
        {screenSize >= screenMd && <LanguageSelector />}
        {screenSize < screenMd && (
          <button onClick={() => setNavHidden(!navHidden)} className="text-lg">
            <FontAwesomeIcon
              icon={navHidden ? faBars : faXmark}
              style={{ color: "#000000" }}
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;