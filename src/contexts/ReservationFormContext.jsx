// contexts/ReservationFormContext.js
'use client';

import { createContext, useState } from 'react';

export const ReservationFormContext = createContext(null);

export const ReservationFormContextProvider = ({ children }) => {
  const [reservation, setReservation] = useState({
    name: '',
    cellphone: '',
    email: '',
    numPassengers: '',
    pickup: '',
    dropoff: '',
    time: '',
    date: '',
    vehicle: null,
    specialRequest: '',
  });

  const handleReservationInput = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setVehicle = (vehicleObj) => {
    setReservation((prev) => ({
      ...prev,
      vehicle: vehicleObj,
    }));
  };

  return (
    <ReservationFormContext.Provider
      value={{ reservation, handleReservationInput, setVehicle }}
    >
      {children}
    </ReservationFormContext.Provider>
  );
};
