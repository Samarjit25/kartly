import React from "react";
import "./footer.css";
import Logo from "../imgs/logo2.png";

function Footer() {
  return (
    <>
      
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>Kartly Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About Kartly</p>
            <p>Sell products on Kartly</p>
            <p>Kartly Business Card</p>
            <p>Kartly and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on Kartly</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">Kartly Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>Kartly Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About Kartly</p>
              <p>Sell products on Kartly</p>
              <p>Kartly Business Card</p>
              <p>Kartly and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on Kartly</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">Kartly Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          {/* <img src={Logo} className="Amazon-img" /> */}
          <div className="dev-data">
            <p>Copyright &copy; 2025 Kartly | All rights reserved | Developed by</p>
            <a
              className="dev-link"
              href="https://github.com/Samarjit25"
              target="_blank"
            >
              Samarjit Roy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
