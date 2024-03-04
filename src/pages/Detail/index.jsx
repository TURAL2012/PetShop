import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useCart } from "react-use-cart";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";
import Recommended from "../../components/Recommended";
import "./style.scss";

const DetailPage = () => {
  const { data } = useContext(GlobalContext);
  const { id } = useParams();
  const detailedProducts = data.find((item) => item.id == id);
  const { addItem } = useCart();
 const {addWishlistItem} = useWishlist()
  return (
    <>
      <section className="detail-section">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6">
              <div className="left">
                <img
                  src={detailedProducts.image}
                  alt=""
                  width={450}
                  height={450}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <h1>{detailedProducts.title}</h1>
                <div className="d-flex">
                  <FaStar style={{ color: "gold" }} />
                  <FaStar style={{ color: "gold" }} />
                  <FaStar style={{ color: "gold" }} />
                  <FaStar style={{ color: "gold" }} />
                  <FaStar style={{ color: "gold" }} />
                </div>
                <h3>${detailedProducts.price}</h3>
                <p>{detailedProducts.shortcontent}</p>
               <div className="d-flex">
               <button
                  className="btn3"
                  onClick={() => {
                    addItem(detailedProducts);
                    toast.success('Product added to cart')
                  }}
                >
                  Add To cart
                </button>
                <button className="wish" onClick={()=>{
                  addWishlistItem(detailedProducts)
                  toast.success("Added To Wishlist");
                }}>Browse to wishlist</button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Recommended />
      
    </>
  );
};

export default DetailPage;
