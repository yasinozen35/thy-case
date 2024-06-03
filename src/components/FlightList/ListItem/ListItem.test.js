import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import { STATUS } from "../../../utils/constants/consts";

jest.mock(
  "@/components/FlightList/ListItem/FlightLocationAndTimes/FlightLocationAndTimes",
  () =>
    jest.fn(({ time, cityShortCode, city, isAlignRight }) => (
      <div data-testid="flight-location-and-times">
        <span>{time}</span>
        <span>{cityShortCode}</span>
        <span>{city}</span>
      </div>
    )),
);

jest.mock(
  "@/components/FlightList/ClassItemForListItem/ClassItemForListItem",
  () =>
    jest.fn(
      ({
        radioButtonName,
        radioButtonText,
        radioButtonValue,
        priceText,
        price,
        isOpen,
        checked,
        onClick,
        selectedIndex,
        index,
      }) => (
        <div data-testid={`class-item-${radioButtonText}`}>
          <span>{radioButtonName}</span>
          <span>{radioButtonText}</span>
          <span>{radioButtonValue}</span>
          <span>{priceText}</span>
          <span>{price}</span>
          <span>{isOpen ? "Open" : "Closed"}</span>
          <span>{checked ? "Checked" : "Unchecked"}</span>
          <button onClick={() => onClick(radioButtonValue)}>Select</button>
        </div>
      ),
    ),
);

jest.mock("@/components/FlightList/ListItemCard/ListItemCard", () =>
  jest.fn(
    ({ headerTitleText, price, currencyCode, cabinFeatures, buttonText }) => (
      <div data-testid="list-item-card">
        <span>{headerTitleText}</span>
        <span>{price}</span>
        <span>{currencyCode}</span>
        {cabinFeatures.map((feature, index) => (
          <span key={index}>{feature.value}</span>
        ))}
        <button>{buttonText}</button>
      </div>
    ),
  ),
);

describe("ListItem Component", () => {
  const mockDict = {
    list_flight_time: "Flight Time",
    list_per_passenger: "Per Passenger",
    list_select_flight: "Select Flight",
  };

  const mockFlightInfo = {
    start: { time: "10:00", cityShortCode: "IST", city: "Istanbul" },
    finish: { time: "12:00", cityShortCode: "AYT", city: "Antalya" },
    totalTime: "2h 0m",
    economyMinPrice: 100,
    businessMinPrice: 200,
    fareCategories: {
      ECONOMY: {
        subcategories: [
          {
            brandCode: "ecoFly",
            price: { amount: 100, currency: "TRY" },
            status: STATUS.AVAILABLE,
            rights: ["15 kg Bagaj"],
          },
          {
            brandCode: "extraFly",
            price: { amount: 150, currency: "TRY" },
            status: STATUS.UNAVAILABLE,
            rights: ["20 kg Bagaj"],
          },
        ],
      },
      BUSINESS: {
        subcategories: [
          {
            brandCode: "businessFly",
            price: { amount: 200, currency: "TRY" },
            status: STATUS.AVAILABLE,
            rights: ["30 kg Bagaj"],
          },
        ],
      },
    },
  };

  const setup = (props = {}) => {
    return render(
      <ListItem
        flightInfo={mockFlightInfo}
        dict={mockDict}
        index="0"
        selectedIndex=""
        selectedClass=""
        setSelectedClass={() => {}}
        setSelectedIndex={() => {}}
        {...props}
      />,
    );
  };

  it("renders flight information correctly", () => {
    setup();
    expect(screen.getByText("10:00")).toBeInTheDocument();
    expect(screen.getByText("IST")).toBeInTheDocument();
    expect(screen.getByText("Istanbul")).toBeInTheDocument();
    expect(screen.getByText("12:00")).toBeInTheDocument();
    expect(screen.getByText("AYT")).toBeInTheDocument();
    expect(screen.getByText("Antalya")).toBeInTheDocument();
    expect(screen.getByText("2h 0m")).toBeInTheDocument();
  });

  it("renders class items correctly", () => {
    setup();
    expect(screen.getByTestId("class-item-ECONOMY")).toBeInTheDocument();
    expect(screen.getByTestId("class-item-BUSINESS")).toBeInTheDocument();
  });
});
