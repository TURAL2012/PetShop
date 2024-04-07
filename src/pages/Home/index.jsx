import React, { useContext, useEffect } from "react";
import "./style.scss";
import { GlobalContext } from "../../context/GlobalState";
import SingleCard from "../../components/SingleCard";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Select } from "antd";
const Home = () => {
  const { data } = useContext(GlobalContext);

  const [state, setState] = useState(data);

  // function shuffle(array) {
  //   array.sort(() => Math.random() - 0.5);
  // }

  // useEffect(() => {
  //   shuffle(data);
  // });

  useEffect(() => {
    setState(data);
  }, []);

  const myCategories = ["Cats", "Dogs", "Accesories", "Nutrition", "All"];

  const filterForCategory = (myCategory) => {
    if (myCategory == "All") {
      setState(data);
      return;
    }

    const filteredState = data.filter((item) => item.category === myCategory);
    setState(filteredState);
  };

  const sortProducts = (value) => {
    console.log(value);
    if (value === "all") {
      setState(data);
      return;
    } else if (value === "lowest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    } else if (value === "highest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    } else if (value === "a-z") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortedProducts);
    } else if (value === "z-a") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortedProducts);
    }
  };
  return (
    <>
      <main>
        <section className="slider">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-lg-8 p-0 h-100">
                <div className="bigimg"></div>
              </div>
              <div className="col-lg-4 p-0 h-100">
                <div className="red-text">
                  <h1>
                    <span>Discount</span>
                    <br />
                    Online shop
                  </h1>
                  <p>
                    Tellus mauris a diam maecenas <br /> sed enim sem viverra.
                    Aliquam vestibulum morbi blandit cursus.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-lg-12  m-0 d-flex justify-content-between align-items-center">
                <div className="ibb d-flex w-100">
                <div className="inbox1 " style={{ width: "40%" }}>
                  <Select
                
                    defaultValue="All"
                    style={{
                      width: 120,
                    }}
                    onChange={sortProducts}
                    options={[
                      {
                        value: "all",
                        label: "All",
                      },
                      {
                        value: "lowest-price",
                        label: "Lowest-price",
                      },
                      {
                        value: "highest-price",
                        label: "Highest-price",
                      },
                      {
                        value: "a-z",
                        label: "A-Z",
                      },
                      {
                        value: "z-a",
                        label: "Z-A",
                      },
                    ]}
                  />
                </div>
                <div
                  className="inbox1 d-flex justify-content-end "
                  style={{ width: "60%" }}
                >
                  </div>
                  {myCategories.map((item, index) => {
                    return (
                      <button
                        onClick={() => filterForCategory(item)}
                        className="btn btn-danger m-2"
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {state.map((item) => {
                return <SingleCard product={item} />;
              })}
            </div>
          </div>
        </section>

        <section className="sale_sect">
          <h1>50% Sale</h1>
          <h2>
            Discounts all year <br /> round
          </h2>
          <p>
            Quis ipsum suspendisse ultrices gravida dictum fusce ut. Diam <br />{" "}
            donec adipiscing tristique risus. Rhoncus est pellentesque elit{" "}
            <br /> ullamcorper dignissim cras tincidunt lobortis feugiat.
          </p>
        </section>
        <section className="new_collection">
          <div className="container h-100 p-4">
            <div className="row h-100">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="big-box">
                  <div className="img-box">
                    <h1>New</h1>
                    <h2>
                      Clothing line <span>2019/20</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="big-box-2">
                  <div className="img1">
                    <div className="box-text">
                      <h3>Toy ball shaped</h3>
                      <h4>$25</h4>
                    </div>
                  </div>
                  <div className="img2">
                    <div className="box-text">
                      <h3>Scarf collars</h3>
                      <h4>$28</h4>
                    </div>
                  </div>
                  <div className="img3">
                    <div className="box-text">
                      <h3>Dog jersey</h3>
                      <h4>$100</h4>
                    </div>
                  </div>
                  <div className="img4">
                    <div className="box-text">
                      <h3>Dog soft toy</h3>
                      <h4>$25</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sub_sect">
          <h2>
            Subscribe to <span>Newsletter</span>
          </h2>
          <input type="text" placeholder="Your email..." />
          <button>Subscribe</button>
        </section>
      </main>
      <ToastContainer />
    </>
  );
};

export default Home;
