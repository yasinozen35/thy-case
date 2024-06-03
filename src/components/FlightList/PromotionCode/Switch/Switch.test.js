import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch Component", () => {
  const mockProps = {
    text: "Test Switch",
    checked: false,
    onClick: jest.fn(),
  };

  const setup = (props = {}) => {
    return render(<Switch {...mockProps} {...props} />);
  };

  it("renders switch component with correct text", () => {
    setup();
    expect(screen.getByText("Test Switch")).toBeInTheDocument();
  });

  it("renders switch component with correct checked state", () => {
    setup({ checked: true });
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onClick with correct value when clicked", () => {
    setup();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockProps.onClick).toHaveBeenCalledWith(true);
  });

  it("toggles checked state correctly", () => {
    const { rerender } = setup({ checked: false });
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockProps.onClick).toHaveBeenCalledWith(true);

    rerender(<Switch {...mockProps} checked={true} />);
    expect(checkbox).toBeChecked();
  });
});
