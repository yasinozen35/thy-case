import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FlightSearchInput from "./FlightSearchInput";

jest.mock("@/components/FlightSearch/Dropdown/Dropdown", () =>
  jest.fn(() => <div data-testid="dropdown"></div>),
);

describe("FlightSearchInput Component", () => {
  const options = [
    { key: "option1", value: "Option 1" },
    { key: "option2", value: "Option 2" },
  ];

  it("renders the input and icon", () => {
    render(
      <FlightSearchInput
        icon={<span data-testid="icon">Icon</span>}
        placeHolder="Placeholder"
        options={options}
        name="test"
      />,
    );
    expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("shows dropdown on focus and mouseover", () => {
    render(
      <FlightSearchInput
        icon={<span data-testid="icon">Icon</span>}
        placeHolder="Placeholder"
        options={options}
        name="test"
      />,
    );
    const inputContainer =
      screen.getByPlaceholderText("Placeholder").parentElement;

    fireEvent.focus(inputContainer);
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();

    fireEvent.mouseOver(inputContainer);
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
  });
});
