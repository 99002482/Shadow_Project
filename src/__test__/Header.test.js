import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import Header from "../component/Header";

describe("Header", () => {
  it("renders Header without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Header></Header>, div);
  });

  it("Text fields working", () => {
    const { getAllByText } = render(<Header />);
    getAllByText("DEVICE HEALTH MONITORING SYSTEM");
  });
  it("Image button working", () => {
    render(<Header />);
    screen.getAllByRole("img", { hidden: true });
  });
});
