import { Flight } from "@/utils/types/flightTypes";
import { getMinPrices } from "@/utils/hooks/getMinPrice";

export const formattedFlightList = (flights: Flight[]) => {
  return flights.map((flight) => {
    const {
      originAirport,
      arrivalDateTimeDisplay,
      departureDateTimeDisplay,
      destinationAirport,
      flightDuration,
    } = flight;

    const { economyMinPrice, businessMinPrice } = getMinPrices(
      flight.fareCategories,
    );
    return {
      start: {
        time: arrivalDateTimeDisplay,
        cityShortCode: originAirport.code,
        city: originAirport.city.name,
      },
      finish: {
        time: departureDateTimeDisplay,
        cityShortCode: destinationAirport.code,
        city: destinationAirport.city.name,
      },
      totalTime: flightDuration,
      economyMinPrice,
      businessMinPrice,
      fareCategories: flight.fareCategories,
    };
  });
};
