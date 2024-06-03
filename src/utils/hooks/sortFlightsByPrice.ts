import { FormattedFlightData } from "@/utils/types/flightTypes";

const isPriceKey = (
  key: string,
): key is "economyMinPrice" | "businessMinPrice" => {
  return key === "economyMinPrice" || key === "businessMinPrice";
};
export const sortFlightsByPrice = (
  flights: FormattedFlightData[],
  key: string,
  isMinPriceSorting: boolean,
) => {
  if (!isPriceKey(key)) {
    throw new Error(`Invalid key: ${key}`);
  }
  return flights.sort((a, b) => {
    if (isMinPriceSorting) {
      return a[key] - b[key];
    } else {
      return b[key] - a[key];
    }
  });
};
