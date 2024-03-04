import React, { useContext } from "react";
import "./style.scss";
import { CartProvider, useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner";
import { IoIosCloseCircleOutline, IoIosCloseCircle } from "react-icons/io";
import { Value } from "sass";

const cart = () => {
  const { items, removeItem, cartTotal, updateItemQuantity } = useCart();

  return (
    <>
      <Banner
        bg="https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/07/shop-title-img-2.jpg"
        title="Cart"
      />
      <section className="main">
        {items.length != 0 ? (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => {
                return (
                  <tr>
                    <th scope="col">
                      <button
                        className="x-btn"
                        style={{
                          marginLeft: "10px",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                        onClick={() => removeItem(item.id)}
                      >
                        <IoIosCloseCircleOutline />
                      </button>

                      <img
                        src={item.image}
                        alt=""
                        style={{
                          width: "100px",
                          height: "100px",
                          marginLeft: "10px",
                        }}
                      />
                      <h4 style={{ marginLeft: "10px", fontSize: "15px" }}>
                        {item.title}
                      </h4>
                    </th>
                    <th
                      scope="col"
                      style={{
                        width: "auto",
                        height: "auto",
                        paddingTop: "45px",
                      }}
                    >
                      <h1 style={{ fontSize: "15px" }}>{item.price}</h1>
                    </th>

                    <th
                      style={{
                        width: "auto",
                        height: "auto",
                        paddingTop: "45px",
                      }}
                    >
                      <td>
                        {" "}
                        <button 
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <h1 style={{ fontSize: "15px" }}>{item.quantity}</h1>
                      </td>
                      <td>
                        {" "}
                        <button
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                          }}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </td>
                    </th>

                    <th
                      scope="col"
                      style={{
                        width: "auto",
                        height: "auto",
                        paddingTop: "45px",
                      }}
                    >
                      <h1 style={{ fontSize: "15px" }}>{item.itemTotal}</h1>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <>
            <iframe src="https://lottie.host/embed/9fe813c0-2673-41cf-a330-a66cf8270d6b/o8qdqGfjlp.json"></iframe>{" "}
            <h1 style={{ fontSize: "15px" }}>
              Your Cart Is Emty back to the <NavLink to="/shop"> shop</NavLink>
            </h1>
          </>
        )}
      </section>
      <section className="totals">
        <h1>Cart totals </h1>
        <h3>Subtotal ${cartTotal}</h3>
        <h3>Total ${cartTotal}</h3>
        <button>Proceed to checkout</button>
      </section>
    </>
  );
};

export default cart;
