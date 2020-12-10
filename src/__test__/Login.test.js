import React from "react";
import ReactDom from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../component/Login";

describe("Login", () => {
  it("renders loginform without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Login></Login>, div);
  });

  it("Text fields working", () => {
    const { getAllByText, getByPlaceholderText } = render(<Login />);
    getAllByText("Login");
    getByPlaceholderText("Password");
    getByPlaceholderText("Email ID");
  });

  it("Login button working", () => {
    render(<Login />);
    screen.getByRole("button", { hidden: true }, { name: Login });
  });
});
