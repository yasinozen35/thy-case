import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PromotionCodeApply from "./PromotionCodeApply";

jest.mock("@/components/FlightList/PromotionCode/Switch/Switch", () =>
  jest.fn(({ text, checked, onClick }) => (
    <div data-testid="switch">
      <span>{text}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onClick(!checked)}
        data-testid="switch-checkbox"
      />
    </div>
  )),
);

describe("PromotionCodeApply Component", () => {
  const mockDict = {
    list_promotion_code: "Apply Promotion Code",
    list_promotion_first_content: "First content",
    list_promotion_second_content: "Second content",
  };

  const setup = (props = {}) => {
    return render(<PromotionCodeApply dict={mockDict} {...props} />);
  };

  it("renders the PromotionCodeApply component with Switch", () => {
    setup();
    expect(screen.getByText("Apply Promotion Code")).toBeInTheDocument();
    expect(screen.getByTestId("switch")).toBeInTheDocument();
  });

  it("shows promotion content when switch is checked", () => {
    setup();
    const checkbox = screen.getByTestId("switch-checkbox");
    fireEvent.click(checkbox);
    expect(screen.getByText("First content")).toBeInTheDocument();
    expect(screen.getByText("Second content")).toBeInTheDocument();
  });

  it("hides promotion content when switch is unchecked", () => {
    setup();
    const checkbox = screen.getByTestId("switch-checkbox");
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(screen.queryByText("First content")).not.toBeInTheDocument();
    expect(screen.queryByText("Second content")).not.toBeInTheDocument();
  });
});
