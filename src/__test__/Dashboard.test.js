import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import Dashboard from "../component/Dashboard";
import Sidebar from "../component/Sidebar";
import Cardview from "../component/Cardview";

describe("Dashboard", () => {

  it("Organisation text field working", () => {
    const { getAllByText, getByPlaceholderText } = render(<Sidebar />);
    getAllByText("Overview Dashboard");
    getByPlaceholderText("Organisation name");
    
  });
  
  it("renders cardview  without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Sidebar></Sidebar>, div);
  });

  it("location dropdown working", () => {
    const { getAllByText} = render(<Sidebar />);
    getAllByText("Select...");
  });
  
});
