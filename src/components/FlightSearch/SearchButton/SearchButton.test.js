import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchButton from "./SearchButton";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn((props) => (
    <div data-testid={props.icon.iconName} {...props}></div>
  )),
}));

describe("SearchButton Component", () => {
  const mockOnClick = jest.fn();

  const setup = (props = {}) => {
    return render(<SearchButton onClick={mockOnClick} {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the search button with correct icon", () => {
    setup();
    expect(screen.getByTestId("chevron-right")).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    setup();
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
