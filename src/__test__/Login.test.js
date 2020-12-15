import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import Login from "../component/Login";

describe("Login", () => {
  it("renders loginform without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Login></Login>, div);
  });

  it("Text fields working", async() => {
    const { getAllByText, getByPlaceholderText } = render(<Login />);
    getAllByText("DEVICE HEALTH MONITORING SYSTEM");
    getAllByText("Login");
    getByPlaceholderText("Password");
    const email=getByPlaceholderText("Email ID");
    email.value='nisarga@gmail.com'
  });

  it("Login button working", () => {
    render(<Login />);
    screen.getByRole("button", { hidden: true }, { name: Login });
  });
});
