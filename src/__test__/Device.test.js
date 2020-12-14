import React from "react";
import ReactDom from "react-dom";
import Device from "../component/Device";

describe("Device", () => {
  it("renders Device page without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Device></Device>, div);
  });
});
