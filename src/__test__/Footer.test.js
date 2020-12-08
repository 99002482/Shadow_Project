import React from "react";
import ReactDom from "react-dom";
import Footer from "../component/Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("renders Footer without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Footer></Footer>, div);
  });
  it("Text fields working", () => {
    const { getAllByText } = render(<Footer />);
    getAllByText(
      "©2020 EATON SHADOW PROJECT POC | All rights reserved | Terms Of Service | Privacy"
    );
  });
});
