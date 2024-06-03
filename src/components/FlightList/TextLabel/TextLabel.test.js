import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import TextLabel from "./TextLabel";

describe("TextLabel Component", () => {
  const setup = (props = {}) => {
    return render(<TextLabel {...props} />);
  };

  it("renders the TextLabel component with correct text", () => {
    const testText = "Test Label";
    setup({ text: testText });
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("applies the correct class to the TextLabel component", () => {
    const testText = "Test Label";
    setup({ text: testText });
    const textLabel = screen.getByText(testText);
    expect(textLabel).toHaveClass("textLabel");
  });
});
