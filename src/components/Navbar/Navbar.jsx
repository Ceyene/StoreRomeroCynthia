//dependencies
import React from "react";
//logo image
import Logo from "./images/aerolab-logo.svg";

const Navbar = () => {
  return (
    <header className="Header">
      <img src={Logo} alt="Store Logo" />
      <div className="UserInfo">
        <h4 className="SecondaryTitle">John Kite</h4>
        <div className="UserPoints">
          <div className="Points">
            <p className="SecondaryTitle">6000</p>
            <p className="Coin">○</p>
          </div>
          <div className="GiftPoints">
            <p className="TertiaryTitle">Get Free Points!</p>
            <div className="GiftHover">
              <button className="GiftButton"> 1000 </button>
              <button className="GiftButton"> 5000 </button>
              <button className="GiftButton"> 7500 </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
