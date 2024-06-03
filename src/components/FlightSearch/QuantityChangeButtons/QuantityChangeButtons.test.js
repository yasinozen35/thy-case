import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuantityChangeButtons from "./QuantityChangeButtons";

describe("QuantityChangeButtons Component", () => {
  const mockMinusOnClick = jest.fn();
  const mockPlusOnClick = jest.fn();

  const setup = (props = {}) => {
    return render(
      <QuantityChangeButtons
        minusOnClick={mockMinusOnClick}
        plusOnClick={mockPlusOnClick}
        counter={0}
        {...props}
      />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the correct counter value", () => {
    setup({ counter: 5 });
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls minusOnClick when minus button is clicked", () => {
    setup();
    fireEvent.click(screen.getByTestId("minus-icon"));
    expect(mockMinusOnClick).toHaveBeenCalledTimes(1);
  });

  it("calls plusOnClick when plus button is clicked", () => {
    setup();
    fireEvent.click(screen.getByTestId("plus-icon"));
    expect(mockPlusOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders the minus icon", () => {
    setup();
    expect(screen.getByTestId("minus-icon")).toBeInTheDocument();
  });

  it("renders the plus icon", () => {
    setup();
    expect(screen.getByTestId("plus-icon")).toBeInTheDocument();
  });
});
