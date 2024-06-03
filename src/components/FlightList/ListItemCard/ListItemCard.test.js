import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListItemCard from "./ListItemCard";
import { useRouter, usePathname } from "next/navigation";
import { LOCAL_STORAGE_KEYS } from "../../../utils/constants/consts";
import { editedPathName } from "../../../utils/hooks/usePathWithLanguage";
import { ROUTE } from "../../../utils/constants/routes";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("@/utils/hooks/usePathWithLanguage", () => ({
  editedPathName: jest.fn(),
}));

describe("ListItemCard Component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const mockEditedPathName = "/new-path";

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
    usePathname.mockReturnValue("/current-path");
    editedPathName.mockReturnValue(mockEditedPathName);
    localStorage.clear();
  });

  const mockProps = {
    headerTitleText: "Economy Class",
    currencyCode: "USD",
    price: "100",
    cabinFeatures: [{ value: "20 kg Baggage" }, { value: "Free Meal" }],
    buttonText: "Select",
  };

  const setup = (props = {}) => {
    return render(<ListItemCard {...mockProps} {...props} />);
  };

  it("renders header title and price correctly", () => {
    setup();
    expect(screen.getByText("Economy Class")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("renders cabin features correctly", () => {
    setup();
    expect(screen.getByText("20 kg Baggage")).toBeInTheDocument();
    expect(screen.getByText("Free Meal")).toBeInTheDocument();
  });

  it("calls cabinSelectionCompleted on button click and sets localStorage", () => {
    setup();
    fireEvent.click(screen.getByText("Select"));
    expect(localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_CABIN)).toBe("100");
    expect(mockRouter.push).toHaveBeenCalledWith(mockEditedPathName);
  });
});
