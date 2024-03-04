import React from "react";
import "./style.scss";
import logo from "../../assets/img/logo-footer.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid h-100 ">
          <div className="row h-100">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 h-100">
              <div className="f-box">
                <img src={logo} alt="" />
                <p>
                  PawFriends is a ready-to go basis for your site & a theme
                  thats sure to be your new best friend.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 h-100">
              <div className="f-box">
                <h3>Useful links</h3>
                <ul>
                  <li>How it works</li>
                  <li>About us</li>
                  <li>Babysitters</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 h-100">
              <div className="f-box">
                <h3>My account</h3>
                <ul>
                  <li>Track my order</li>
                  <li>Terms of use</li>
                  <li>Wishlist</li>
                  <li>Submit your feedback</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 h-100">
              <div className="f-box">
                <h3>Instagram</h3>
              </div>
            </div>
            <div className="col-12 px-0 ">
              <div className="f-bottom">
                <h4>
                  © 2024 <span>Tural Adilov's</span> website
                </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
