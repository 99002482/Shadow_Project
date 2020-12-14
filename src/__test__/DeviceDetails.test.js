import React from "react";
import ReactDom from "react-dom";
import DeviceDetails from "../component/DeviceDetails";

describe("DeviceDetails Page", () => {
  it("renders Device details without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<DeviceDetails></DeviceDetails>, div);
  });
});
