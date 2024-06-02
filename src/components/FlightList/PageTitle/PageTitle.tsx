"use client";

import { DictType } from "@/utils/types/commonTypes";
import { useEffect, useState } from "react";
import { airportTerms, LOCAL_STORAGE_KEYS } from "@/utils/constants/consts";

export const PageTitle = ({ dict }: { dict: DictType }) => {
  const [flightInfo, setFlightInfo] = useState<{
    originAirport: {
      name: string | null;
      value: string | null;
    };
    destinationAirport: {
      name: string | null;
      value: string | null;
    };
  }>();

  const [passengerCount, setPassengerCount] = useState<string>();

  useEffect(() => {
    const originAirportJson = localStorage.getItem(
      airportTerms.ORIGIN_AIRPORTS,
    );
    const destinationAirportJson = localStorage.getItem(
      airportTerms.DESTINATION_AIRPORTS,
    );

    const passengerCountData = localStorage.getItem(
      LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_COUNT,
    );

    const originAirport = originAirportJson
      ? JSON.parse(originAirportJson)
      : null;
    const destinationAirport = destinationAirportJson
      ? JSON.parse(destinationAirportJson)
      : null;

    setFlightInfo({ originAirport, destinationAirport });
    setPassengerCount(passengerCountData || "0");
  }, []);

  return (
    <h1>
      {flightInfo?.originAirport.name} - {flightInfo?.destinationAirport.name},{" "}
      {passengerCount} {dict.list_passenger}
    </h1>
  );
};
