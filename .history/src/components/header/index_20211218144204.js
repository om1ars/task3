import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header" style={{ display: "flex", alignItems: "center" }}>
        <div className="header-logo">
          Invoices
        </div>
        <div
          style={{ height: "1px", width: "100%", backgroundColor: "gray" }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
