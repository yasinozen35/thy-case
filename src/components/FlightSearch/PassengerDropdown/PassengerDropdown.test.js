import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PassengerDropdown from "./PassengerDropdown";
import { flightClass } from "@/utils/constants/consts";

jest.mock("@/components/FlightSearch/RadioButton/RadioButton", () =>
  jest.fn(({ radioText, onClick, checked }) => (
    <div
      data-testid={`radio-button-${radioText}`}
      onClick={() => onClick(radioText)}
    >
      {radioText} {checked && "(checked)"}
    </div>
  )),
);

jest.mock(
  "@/components/FlightSearch/QuantityChangeButtons/QuantityChangeButtons",
  () =>
    jest.fn(({ plusOnClick, minusOnClick, counter }) => (
      <div data-testid="quantity-change-buttons">
        <button onClick={plusOnClick}>+</button>
        <span>{counter}</span>
        <button onClick={minusOnClick}>-</button>
      </div>
    )),
);

describe("PassengerDropdown Component", () => {
  const mockDict = {
    query_selection_title: "Select your options",
    query_economy_class: "Economy",
    query_business_class: "Business",
    query_passenger: "Passengers",
  };

  const mockCloseDropDownTrigger = jest.fn();
  const mockSetSelectedPassengerCount = jest.fn();
  const mockSetSelectedPassengerClass = jest.fn();

  const setup = (props = {}) => {
    return render(
      <PassengerDropdown
        dict={mockDict}
        closeDropDownTrigger={mockCloseDropDownTrigger}
        setSelectedPassengerCount={mockSetSelectedPassengerCount}
        setSelectedPassengerClass={mockSetSelectedPassengerClass}
        selectedClass={flightClass.ECONOMY}
        selectedPassengerCount={1}
        {...props}
      />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the dropdown with correct text", () => {
    setup();
    expect(
      screen.getByText(mockDict.query_selection_title),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(mockDict.query_economy_class, "i")),
    ).toBeInTheDocument();
    expect(screen.getByText(mockDict.query_business_class)).toBeInTheDocument();
    expect(screen.getByText(mockDict.query_passenger)).toBeInTheDocument();
  });

  it("calls closeDropDownTrigger when clicking outside", () => {
    setup();
    fireEvent.click(document);
    expect(mockCloseDropDownTrigger).toHaveBeenCalled();
  });

  it("calls setSelectedPassengerClass when clicking a radio button", () => {
    setup();
    fireEvent.click(screen.getByTestId("radio-button-Economy"));
    expect(mockSetSelectedPassengerClass).toHaveBeenCalledWith("Economy");
  });

  it("increments passenger count when plus button is clicked", () => {
    setup();
    fireEvent.click(screen.getByText("+"));
    expect(mockSetSelectedPassengerCount).toHaveBeenCalledWith(2);
  });

  it("decrements passenger count when minus button is clicked", () => {
    setup({ selectedPassengerCount: 2 });
    fireEvent.click(screen.getByText("-"));
    expect(mockSetSelectedPassengerCount).toHaveBeenCalledWith(1);
  });

  it("does not decrement passenger count below 1", () => {
    setup({ selectedPassengerCount: 1 });
    fireEvent.click(screen.getByText("-"));
    expect(mockSetSelectedPassengerCount).toHaveBeenCalledWith(1);
  });
});
