interface City {
  code: string;
  name: string;
}

interface Country {
  code: string;
  name: string;
}

interface Airport {
  name: string;
  code: string;
  city: City;
  country: Country;
}

interface Price {
  amount: number;
  currency: string;
}

export interface Subcategory {
  brandCode: string;
  price: Price;
  order: number;
  status: string;
  rights: string[];
}

export interface FareCategory {
  subcategories: Subcategory[];
}

export interface FareCategories {
  BUSINESS: FareCategory;
  ECONOMY: FareCategory;
}

export interface Flight {
  originAirport: Airport;
  destinationAirport: Airport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: FareCategories;
}

export interface FlightsData {
  flights: Flight[];
  loading: boolean;
}

export type FormattedFlightData = {
  start: { time: string; cityShortCode: string; city: string };
  finish: { time: string; cityShortCode: string; city: string };
  totalTime: string;
  economyMinPrice: number;
  businessMinPrice: number;
  fareCategories: FareCategories;
};
