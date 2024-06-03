import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  const mockOnClick = jest.fn();

  const setup = (props = {}) => {
    return render(
      <RadioButton
        name="testRadio"
        id="radio1"
        value="value1"
        radioText="Radio 1"
        onClick={mockOnClick}
        checked={false}
        {...props}
      />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the radio button with correct label", () => {
    setup();
    expect(screen.getByLabelText("Radio 1")).toBeInTheDocument();
  });

  it("calls onClick with the correct value when clicked", () => {
    setup();
    fireEvent.click(screen.getByLabelText("Radio 1"));
    expect(mockOnClick).toHaveBeenCalledWith("value1");
  });

  it("shows as checked when the checked prop is true", () => {
    setup({ checked: true });
    expect(screen.getByLabelText("Radio 1")).toBeChecked();
  });

  it("shows as unchecked when the checked prop is false", () => {
    setup({ checked: false });
    expect(screen.getByLabelText("Radio 1")).not.toBeChecked();
  });
});
