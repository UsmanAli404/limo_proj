"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { ReservationContextProvider } from "@/contexts/ReservationContext";
import { useState } from "react";
import cars from "@/data/cars";

export default function RootLayout({ children }) {
  const scrollUp = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const [selectedVehicle, setSelectedVehicle] = useState(cars[0]);

  return (
    <html lang="en">
      <body>
        <ReservationContextProvider>
          <Header />
          {/* Pass props via context or children */}
          {children}
          <Footer />
          <BackToTopButton scrollUp={scrollUp} />
        </ReservationContextProvider>
      </body>
    </html>
  );
}