import { Flight } from "@/utils/types/flightTypes";

export const useUniqueAirports = (flights: Flight[]) => {
  const originAirportsMap = new Map();
  const destinationAirportsMap = new Map();

  flights.forEach((flight) => {
    const {
      code: originCode,
      city: { name: originCity },
    } = flight.originAirport;
    if (!originAirportsMap.has(originCity)) {
      originAirportsMap.set(originCity, originCode);
    }

    const {
      code: destinationCode,
      city: { name: destinationCity },
    } = flight.destinationAirport;
    if (!destinationAirportsMap.has(destinationCity)) {
      destinationAirportsMap.set(destinationCity, destinationCode);
    }
  });

  const originAirports = Array.from(originAirportsMap, ([key, value]) => ({
    key,
    value,
  }));

  const destinationAirports = Array.from(
    destinationAirportsMap,
    ([key, value]) => ({
      key,
      value,
    }),
  );

  return { originAirports, destinationAirports };
};
