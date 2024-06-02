"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { fetchFlights } from "@/utils/hooks/useFlights";
import { Flight, FlightsData } from "@/utils/types/flightTypes";

const FlightContext = createContext<FlightsData | undefined>(undefined);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFlights = async () => {
      const data = await fetchFlights();
      setFlights(data);
      setLoading(false);
    };
    getFlights();
  }, []);

  return (
    <FlightContext.Provider value={{ flights, loading }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlights = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlights must be used within a FlightProvider");
  }
  return context;
};
