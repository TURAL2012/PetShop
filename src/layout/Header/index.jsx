import React from "react";
import logo from "../../assets/img/h4-logo-default.png";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";

const Header = () => {
  const { items } = useCart();
  const { items: data } = useWishlist();
  return (
    <>
      <header>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-3">
              <div className="logo">
                <img src={logo} alt="" width={94} height={58} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-menu">
                <ul>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/shop">Shop</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/faq">FAQ </NavLink>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icons">
                <div className="iconsinn">
                  <NavLink to="/wishlist">
                    Wishlist
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 30"
                      width={33}
                      height={30}
                      className="mkdf-wishlist"
                    >
                      <path d="M16.6 28.8c-0.1 0-0.2 0-0.2-0.1 -0.3-0.4-0.5-0.8-0.4-1.3 0-0.3 0.1-0.6 0.2-0.9 -0.8-1.4-2.9-2.9-5.2-4.6 -4.3-3.3-9.8-7.3-9.7-12.4 0-2.6 0.9-5 2.5-6.5C5.1 1.6 7 1 9.2 1.1c2.8 0.1 6.2 1.8 7.3 5.3 0.1 0.2 0 0.3-0.2 0.4 -0.2 0.1-0.3 0-0.4-0.2 -1.1-3.2-4.2-4.8-6.8-4.9 -2.1-0.1-3.8 0.5-5 1.7C2.7 4.8 1.9 7.1 1.9 9.5c0 4.8 5.3 8.8 9.5 11.9 2.2 1.7 4.2 3.1 5.2 4.5 1.2-1.9 4.1-4.1 7.2-6.5 3.2-2.5 6.4-5 7.2-6.8C32 10.1 32 7.1 31 4.9c-0.7-1.6-2-2.7-3.6-3.1 -4.2-1.3-7.3 0.5-8.8 5C18.6 6.9 18.4 7 18.3 7c-0.2-0.1-0.2-0.2-0.2-0.4 1.6-4.7 5-6.7 9.5-5.4 1.8 0.5 3.1 1.7 3.9 3.5 1.1 2.3 1 5.5-0.1 8.2 -0.8 1.9-4 4.4-7.4 7 -3 2.4-6.2 4.8-7.2 6.6 0.4 0.7 0.4 1.5 0 2.2C16.8 28.7 16.8 28.8 16.6 28.8 16.7 28.8 16.6 28.8 16.6 28.8z" />
                    </svg>
                    {
                      data.length !=0 ?  <span>{data.length / 2}</span> : ''
                    }
                  </NavLink>

                  <NavLink to="/cart">
                    Cart 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 31"
                      className="mkdf-dropdown-cart"
                    >
                      <path d="M15.7 30.2c-3.5 0-7-0.3-7.9-0.9 -1.8-1.2-7-12.9-7-14.5 0-0.7 1.5-1.9 4.3-4 1.9-3 4.9-6.8 6.4-7.1 0.5-0.1 0.7 0.1 0.9 0.2 0.2 0.2 0.2 0.4 0.2 0.6 -0.1 1.4-3.4 3.8-6.6 6.2 -0.2 0.1-0.3 0.3-0.5 0.4 -1 1.6-1.7 3-1.6 3.3 0.8 0.4 13.2 0.2 20.9-0.1 0.1 0 0.2 0.1 0.3 0.2 0 0.1-0.1 0.2-0.2 0.2 -3.4 0.1-20.4 0.7-21.3-0.1 -0.2-0.2-0.2-0.5-0.1-0.7 0.1-0.5 0.5-1.2 1-2.2 -1.6 1.2-3.1 2.4-3.1 2.9 0 1.4 5.1 13.1 6.8 14.1 1.6 1 13.4 1.2 15.4 0 2-1.2 6.8-12.5 6.8-14.1 0-0.4-1.6-1.8-3.4-3.3 1.2 1.6 2 2.8 2.2 2.9 0.1 0.1 0 0.3-0.1 0.3 -0.1 0.1-0.3 0-0.3-0.1 -0.8-1.1-2-2.7-3.3-4.5 -0.4-0.3-0.8-0.6-1.1-0.9 -4.8-3.8-7.9-6.3-7.9-7.5 0-0.2 0.1-0.4 0.3-0.5 0.2-0.1 0.4-0.2 0.6-0.1 1.7 0.3 5.6 5 8.5 8.7 3.3 2.6 5.1 4.1 5.1 4.9 0 1.7-4.8 13.2-7 14.5C22.7 29.9 19.2 30.2 15.7 30.2zM11.7 4.1c-0.1 0-0.3 0.1-0.6 0.2C9.8 5 7.7 7.6 6.1 10c2.7-2 5.8-4.4 5.9-5.5 0-0.1 0-0.2-0.1-0.3C11.9 4.2 11.8 4.1 11.7 4.1zM16.9 1.7c-0.1 0-0.2 0-0.2 0 0 0-0.1 0.1-0.1 0.1 0 1 3.9 4.2 7.3 6.8C21.3 5.2 18.3 1.9 16.9 1.7 17 1.7 16.9 1.7 16.9 1.7z">
                      </path>
                    </svg>
                    {
                      items.length !=0 ?  <span>{items.length}</span> : ''
                    }
                  </NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
