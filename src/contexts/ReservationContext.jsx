// contexts/ReservationContext.js
'use client';
import cars from '@/data/cars';
import { createContext, useState } from 'react';

export const ReservationContext = createContext(null);

export const ReservationContextProvider = ({ children }) => {
  const [reservation, setReservation] = useState({
    name: '',
    cellphone: '',
    email: '',
    numPassengers: '',
    pickup: '',
    dropoff: '',
    time: '',
    date: '',
    vehicle: cars[0], 
    specialRequest: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setSelectedVehicle = (vehicleObj) => {
    setReservation((prev) => ({
      ...prev,
      vehicle: vehicleObj,
    }));
  };

  return (
    <ReservationContext.Provider
      value={{ reservationInfo: reservation, handleInput, selectedVehicle: reservation.vehicle, setSelectedVehicle }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
