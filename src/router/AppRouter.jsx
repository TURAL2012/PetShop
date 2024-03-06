import React, {useEffect}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import "react-toastify/dist/ReactToastify.css";
import Faq from "../pages/Faq";
import Blog from "../pages/Blog";
import Shop from "../pages/Shop";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import DetailPage from "../pages/Detail";
import TopToBtn from "../components/TopToBtn";
import ScrollToTop from "../components/ScrollToTop";

const AppRouter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop/>
        <TopToBtn/>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/product/:id" element={<DetailPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
