import { flightClass } from "@/utils/constants/consts";

export const getPriceKey = (selectedClass: string) => {
  return selectedClass === flightClass.ECONOMY
    ? "economyMinPrice"
    : "businessMinPrice";
};
