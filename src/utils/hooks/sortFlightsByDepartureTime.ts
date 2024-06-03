import { timeToMinutes } from "./timeToMinutes";
import { FormattedFlightData } from "@/utils/types/flightTypes";

export const sortFlightsByDepartureTime = (
  flights: FormattedFlightData[],
  ascending = true,
) => {
  return flights.sort((a, b) => {
    const totalMinutesA = timeToMinutes(a.start.time);
    const totalMinutesB = timeToMinutes(b.start.time);

    if (ascending) {
      return totalMinutesA - totalMinutesB;
    } else {
      return totalMinutesB - totalMinutesA;
    }
  });
};
