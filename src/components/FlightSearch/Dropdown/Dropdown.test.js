import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const options = [
    { key: "option1", value: "Option 1" },
    { key: "option2", value: "Option 2" },
    { key: "option3", value: "Option 3" },
  ];

  const mockOnChange = jest.fn();
  const mockSetShowOptions = jest.fn();

  const setup = () => {
    render(
      <Dropdown
        options={options}
        onChange={mockOnChange}
        name="dropdown"
        setShowOptions={mockSetShowOptions}
      />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all options", () => {
    setup();
    options.forEach((option) => {
      expect(screen.getByText(option.value)).toBeInTheDocument();
    });
  });

  it("calls onChange with correct arguments when an option is clicked", () => {
    setup();
    const optionToClick = screen.getByText("Option 2");
    fireEvent.click(optionToClick);
    expect(mockOnChange).toHaveBeenCalledWith({
      name: "option2",
      value: "Option 2",
    });
    expect(mockSetShowOptions).toHaveBeenCalledWith(false);
  });

  it("calls setShowOptions with false when clicking outside", () => {
    setup();
    fireEvent.click(document);
    expect(mockSetShowOptions).toHaveBeenCalledWith(false);
  });

  it("does not call setShowOptions when clicking inside the dropdown", () => {
    setup();
    const optionToClick = screen.getByText("Option 2");
    fireEvent.click(optionToClick);
    expect(mockSetShowOptions).toHaveBeenCalledTimes(1); // Called once from the option click
  });
});
