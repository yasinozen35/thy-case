import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import FlightLocationAndTimes from "@/components/FlightList/ListItem/FlightLocationAndTimes/FlightLocationAndTimes";
import styles from "@/components/FlightList/ListItem/ListItem.module.scss";

describe("FlightLocationAndTimes Component", () => {
  const setup = (props = {}) => {
    return render(<FlightLocationAndTimes {...props} />);
  };

  it("renders flight time, city short code, and city name correctly", () => {
    setup({ time: "10:00", cityShortCode: "IST", city: "Istanbul" });
    expect(screen.getByText("10:00")).toBeInTheDocument();
    expect(screen.getByText("IST")).toBeInTheDocument();
    expect(screen.getByText("Istanbul")).toBeInTheDocument();
  });

  it("applies right alignment class when isAlignRight is true", () => {
    setup({
      isAlignRight: true,
      time: "10:00",
      cityShortCode: "IST",
      city: "Istanbul",
    });
    const container = screen.getByText("10:00").parentElement;
    expect(container).toHaveClass(styles.flightLocationAndTimes);
    expect(container).toHaveClass(styles.rightAlign);
  });

  it("does not apply right alignment class when isAlignRight is false", () => {
    setup({
      isAlignRight: false,
      time: "10:00",
      cityShortCode: "IST",
      city: "Istanbul",
    });
    const container = screen.getByText("10:00").parentElement;
    expect(container).toHaveClass(styles.flightLocationAndTimes);
    expect(container).not.toHaveClass(styles.rightAlign);
  });
});
