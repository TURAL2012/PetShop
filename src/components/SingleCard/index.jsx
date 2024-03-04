import React from "react";
import { useCart } from "react-use-cart";
import WishBtn from "../Wishbtn";
import { toast } from "react-toastify";
import { FaRegEye, FaStar } from "react-icons/fa";
import "./style.scss";
import { NavLink } from "react-router-dom";

const SingleCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="col-lg-4 p-3">
        <div className="main-box">
          <div className="overlay">
            <img src={product.image} alt="prdouct image" />
            <button
              className="btn1"
              onClick={() => {
                addItem(product);
                toast.success("Added To Cart");
              }}
            >
              Add To cart
            </button>

            <NavLink to={`/product/${product.id}`} className="btn2">
              <FaRegEye />
            </NavLink>
            <WishBtn clickedp={product} />
          </div>

          <div className="bottom">
            <h5>{product.title}</h5>
            <div className="d-flex">
              <FaStar style={{color: 'gold'}} />
              <FaStar style={{color: 'gold'}} />
              <FaStar style={{color: 'gold'}} />
              <FaStar style={{color: 'gold'}} />
              <FaStar style={{color: 'gold'}} />
            </div>

            <p>${product.price}</p>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default SingleCard;
