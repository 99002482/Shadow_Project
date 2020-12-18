import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import Sidebar from "../component/Sidebar";

describe("Dashboard", () => {
  it("Organisation text field working", () => {
    const { getAllByText, getByPlaceholderText } = render(<Sidebar />);
    getAllByText("Overview Dashboard");
    getByPlaceholderText("Organisation name");
  });

  it("renders sidebar  without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Sidebar></Sidebar>, div);
  });

  it("location dropdown working", () => {
    const { getAllByText } = render(<Sidebar />);
    getAllByText("Select...");
    
  });

  it("location label rendering",()=>{
    const { getAllByText } = render(<Sidebar />);   
    getAllByText("Locations");
    
  });

  it("location label rendering",()=>{
    const { getAllByText } = render(<Sidebar />);   
   
    getAllByText("Organisation");
  });
});
