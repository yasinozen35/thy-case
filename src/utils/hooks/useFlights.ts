export const fetchFlights = async () => {
  const response = await import("@/../public/flights.json");
  return response.flights;
};
