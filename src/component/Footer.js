import React from "react";
import "../asset/css/App.css";

function Footer() {
  return (
    <div className="main-footer">
      <center>
        <p className="col-sm">
          <b>
            {" "}
            &copy;{new Date().getFullYear()} DEVICE HEALTH MONITORING SYSTEM  | All
            rights reserved | Terms Of Service | Privacy
          </b>
        </p>
      </center>
    </div>
  );
}

export default Footer;
