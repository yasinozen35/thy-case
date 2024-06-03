import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PassengerItem from "./PassengerItem";
import { faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn((props) => (
    <div data-testid={props.icon.iconName} {...props}></div>
  )),
}));

describe("PassengerItem Component", () => {
  const mockOnClick = jest.fn();

  const setup = (props = {}) => {
    return render(<PassengerItem passengerOnClick={mockOnClick} {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the passenger count", () => {
    setup({ passengerCount: 2 });
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("renders the correct number of passenger icons", () => {
    setup({ passengerCount: 3 });
    expect(screen.getAllByTestId("person")).toHaveLength(3);
  });

  it("renders the plus icon when passenger count is more than 3", () => {
    setup({ passengerCount: 4 });
    expect(screen.getAllByTestId("person")).toHaveLength(3);
    expect(screen.getByTestId("plus")).toBeInTheDocument();
  });

  it("calls passengerOnClick when clicked", () => {
    setup();
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('calls passengerOnClick when "Enter" key is pressed', () => {
    setup();
    fireEvent.keyPress(screen.getByRole("button"), {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('calls passengerOnClick when "Space" key is pressed', () => {
    setup();
    fireEvent.keyPress(screen.getByRole("button"), {
      key: " ",
      code: "Space",
      charCode: 32,
    });
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not call passengerOnClick for other keys", () => {
    setup();
    fireEvent.keyPress(screen.getByRole("button"), {
      key: "A",
      code: "KeyA",
      charCode: 65,
    });
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
