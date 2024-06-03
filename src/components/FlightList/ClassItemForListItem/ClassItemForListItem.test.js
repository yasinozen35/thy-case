import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ClassItemForListItem from "./ClassItemForListItem";

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

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn((props) => (
    <div data-testid={props.icon.iconName} {...props}></div>
  )),
}));

describe("ClassItemForListItem Component", () => {
  const mockOnClick = jest.fn();

  const setup = (props = {}) => {
    return render(
      <ClassItemForListItem
        radioButtonValue="economy"
        radioButtonText="Economy"
        radioButtonName="class"
        onClick={mockOnClick}
        checked={false}
        priceText="Price"
        price="100"
        currencyCode="USD"
        isOpen={false}
        index="1"
        selectedIndex="1"
        {...props}
      />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with correct text and price", () => {
    setup();
    expect(screen.getByText("Economy")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("USD 100")).toBeInTheDocument();
  });

  it("calls onClick with the correct value when clicked", () => {
    setup();
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledWith("economy");
  });

  it("shows the correct icon based on isOpen and selectedIndex", () => {
    setup({ isOpen: false });
    expect(screen.getByTestId("chevron-down")).toBeInTheDocument();

    setup({ isOpen: true });
    expect(screen.getByTestId("chevron-up")).toBeInTheDocument();
  });

  it("calls onClick when Enter key is pressed", () => {
    setup();
    fireEvent.keyPress(screen.getByRole("button"), {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    expect(mockOnClick).toHaveBeenCalledWith("economy");
  });

  it("calls onClick when Space key is pressed", () => {
    setup();
    fireEvent.keyPress(screen.getByRole("button"), {
      key: " ",
      code: "Space",
      charCode: 32,
    });
    expect(mockOnClick).toHaveBeenCalledWith("economy");
  });

  it("does not call onClick for other keys", () => {
    setup();
    fireEvent.keyPress(screen.getByRole("button"), {
      key: "A",
      code: "KeyA",
      charCode: 65,
    });
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
