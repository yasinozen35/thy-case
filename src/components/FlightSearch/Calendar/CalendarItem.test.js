import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import CalendarItem from "./CalendarItem";

library.add(faCalendar);

describe("CalendarItem", () => {
  const mockDict = {
    query_date: "Tarih",
  };

  it("See Calendar Component", () => {
    render(<CalendarItem dict={mockDict} />);
    let text = screen.getByText(/Tarih/i);
    expect(text).toBeInTheDocument();
  });

  it("Calendar Have Correct Icon", () => {
    render(<CalendarItem dict={mockDict} />);
    const calendarIcon = screen.getByTestId("calendar-icon");
    expect(calendarIcon).toBeInTheDocument();
    expect(calendarIcon).toHaveClass("fa-calendar");
  });
});
