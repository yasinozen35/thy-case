import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { ROUTE } from "@/utils/constants/routes";

// Mock next/navigation usePathname
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockDict = {
  header_search: "Search",
  header_flight_challenge: "Flight Challenge",
};

// Helper function to set the pathname
const setPathname = (pathname) => {
  usePathname.mockImplementation(() => pathname);
};

describe("Header", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the header with correct links", () => {
    setPathname("/");
    render(<Header dict={mockDict} />);

    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Flight Challenge")).toBeInTheDocument();
  });

  it("applies dark class when on flightList or flightCabinSelected routes", () => {
    setPathname(ROUTE.flightList);
    const { container } = render(<Header dict={mockDict} />);

    expect(container.firstChild).toHaveClass("dark");
  });

  it("does not apply dark class when not on specific routes", () => {
    setPathname("/");
    const { container } = render(<Header dict={mockDict} />);

    expect(container.firstChild).not.toHaveClass("dark");
  });

  it("has a link to the home page", () => {
    setPathname("/");
    render(<Header dict={mockDict} />);

    const homeLink = screen.getByRole("link", { name: /turkishairlines.com/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("has a link to the test page", () => {
    setPathname("/");
    render(<Header dict={mockDict} />);

    const testLink = screen.getByRole("link", { name: /flight challenge/i });
    expect(testLink).toBeInTheDocument();
    expect(testLink).toHaveAttribute("href", "/test");
  });
});
