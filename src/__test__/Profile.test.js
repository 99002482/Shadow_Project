import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import Profile from "../component/Profile";

describe("Profile", () => {
  it("renders Profile without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Profile></Profile>, div);
  });

  it("Page heading working", () => {
    const { getAllByText ,getAllByTestId} = render(<Profile />);
    getAllByText("Profile Details");
    
 });

 it("update button working", () => {
  render(<Profile />);
    screen.getByRole("button", { hidden: true });
});

});
