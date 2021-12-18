import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Invoices
          <i class="fi-rr-credit-card" />.
        </div>
        <div
          style={{ height: "2px", width: "100%", backgroundColor: "gray" }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
