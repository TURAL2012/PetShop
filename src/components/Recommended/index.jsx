import React, { useContext, useEffect } from "react";
import SingleCard from "../../components/SingleCard";
import "./style.scss";
import { GlobalContext } from "../../context/GlobalState";
const Recommended = () => {
  const { data } = useContext(GlobalContext);
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    shuffle(data);
  });

  return (
    <>
      <section className="recommended-products">
        <div className="container">
          <div className="row">
            {data.slice(0, 3).map((item) => {
              return <SingleCard product={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommended;
