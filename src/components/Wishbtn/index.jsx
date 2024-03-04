import React from "react";
import { useWishlist } from "react-use-wishlist";
import { PiHeartStraight } from "react-icons/pi";
import { PiHeartStraightFill } from "react-icons/pi";
import { toast } from "react-toastify";
import './style.scss'
const WishBtn = ({ clickedp }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const checkWishlishProduct = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      toast.error("Removed From WishList");
    } else {
      addWishlistItem(myProduct);
      toast.success("Added To WishList");
    }
  };
  return (
    <>
      <button
        className="btn0"
        onClick={() => checkWishlishProduct(clickedp)}
        
      >
        {inWishlist(clickedp.id) ? (
          <PiHeartStraightFill  />
        ) : (
          <PiHeartStraight />
        )}
      </button>
    </>
  );
};

export default WishBtn;
