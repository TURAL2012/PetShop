import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import SingleCard from "../../components/SingleCard";
import "./style.scss";
import { ToastContainer } from "react-toastify";

import Banner from "../../components/Banner";

const Shop = () => {
  const { data } = useContext(GlobalContext);
  return (
    <>
      <Banner
        title="Shop"
        bg="https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/shop-title-img.jpg"
      />

      <section className="shop-page">
        <div className="container">
          <div className="row">
            {data.map((item, index) => {
              return <SingleCard product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
      <ToastContainer />

    </>
  );
};

export default Shop;
