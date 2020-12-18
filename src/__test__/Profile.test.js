import React from "react";
import ReactDom from "react-dom";
import { render} from "@testing-library/react";
import Profile from "../component/Profile";

describe("Profile", () => {
  it("renders Profile without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Profile></Profile>, div);
  });

  it("Page heading working", () => {
    const { getAllByText } = render(<Profile />);
    getAllByText("Profile Details");
  });

  
});
