import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Titles from "./Titles";

describe("Titles Component", () => {
  const mockDict = {
    query_title: "Test Title",
    query_content: "Test Content",
  };

  const setup = (props = {}) => {
    return render(<Titles dict={mockDict} {...props} />);
  };

  it("renders the Titles component with correct title and content", () => {
    setup();
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
  });
});
