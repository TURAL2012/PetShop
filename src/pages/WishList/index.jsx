import React, { useContext } from "react";
import { useWishlist } from "react-use-wishlist";
import "./style.scss";
import SingleCard from "../../components/SingleCard";
import Banner from "../../components/Banner";

const wishList = () => {
  const { items, removeWishlistItem } = useWishlist();
  const myArray = [...new Map(items.map((item) => [item.id, item])).values()];

  return (
    <>
    <Banner bg='https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/shop-title-img-2.jpg' title='Wishlist'/>

      <section className="wishlist-page">
        <div className="container">
          <div className="row">
          {items.length == 0 ? (
          <>
          <div className="col-12 d-flex justify-content-center align-items-center"> <h1 style={{ fontSize: "15px" }}>
              No products added to the wishlist
            </h1></div>
           
          </>
        ) : (
          <>
            <div className="container">
              <div className="row">
                {myArray.map((item) => {
                  return <SingleCard product={item} />;
                })}
              </div>
            </div>
          </>
        )}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default wishList;
