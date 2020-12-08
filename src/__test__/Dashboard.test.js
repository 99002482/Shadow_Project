import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import Dashboard from "../component/Dashboard";
import Sidebar from "../component/Sidebar";
import Cardview from "../component/Cardview";

describe("Dashboard", () => {
  it("renders Dashboard page without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Dashboard></Dashboard>, div);
  });
  it("renders cardview  without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Cardview></Cardview>, div);
  });
  it("Text fields working", () => {
    const { getAllByText } = render(<Sidebar />);
    getAllByText("Loading....");
  });
});
