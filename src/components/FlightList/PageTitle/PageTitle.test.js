import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PageTitle } from "./PageTitle";
import { airportTerms, LOCAL_STORAGE_KEYS } from "@/utils/constants/consts";

describe("PageTitle Component", () => {
  const mockDict = {
    list_passenger: "passengers",
  };

  beforeEach(() => {
    localStorage.clear();
  });

  const setupLocalStorage = () => {
    localStorage.setItem(
      airportTerms.ORIGIN_AIRPORTS,
      JSON.stringify({ name: "Istanbul", value: "IST" }),
    );
    localStorage.setItem(
      airportTerms.DESTINATION_AIRPORTS,
      JSON.stringify({ name: "Antalya", value: "AYT" }),
    );
    localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_COUNT, "3");
  };

  const setup = () => {
    render(<PageTitle dict={mockDict} />);
  };

  it("renders the PageTitle with correct flight information", () => {
    setupLocalStorage();
    setup();
    expect(
      screen.getByText("Istanbul - Antalya, 3 passengers"),
    ).toBeInTheDocument();
  });
});
