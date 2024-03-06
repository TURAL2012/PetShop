import React, { useEffect, useState } from "react";
import "./style.scss"
const TopToBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        onClick={scrollTop}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "40px",
          zIndex: 834729,
          width: "50px",
          height: "50px",
          border: "none",
          borderRadius: "50%",
          display: visible ? "block" : "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 57 53"
          className="mkdf-back-to-top"

        >
          <path
            className="mkdf-back-to-top-arrow"
            style={{fill:'white'}}
            d="M24.3 27.3c0.2 0.5-0.4 0.7-2.3 0.2 -1.3-0.2-2.5-0.3-2.5-0.3 -1.6 0.5-0.7 1.4 2.2 2.9l2.7 0.9 0.6 3.4c0.4 4.6 1.7 8.4 3.3 9.6 1.4 0.7 4.1-0.2 4.6-2.2 1.6-2.3 0.1-6.6-2.7-9.8 -1.4-0.7-2.3-1.6-3.1-2 -0.5 0.2 0.8-8.1 2.4-14l0.3-2.5 1.5 4.3c0.9 4.5 1.6 4.8 2.5 3.9 0.5-0.2 0.4-0.7 0.2-1.3s0.2-1.3 0.5-2l-0.5-1.6c-0.9-0.9-2.4-5.2-2-5.9 0.5-0.2-1.4-2.5-2.5-2.1 0 0-2.3 2-4.6 4 -4.4 4.5-5.2 5.9-1.1 3.9l2.5-1.4 -0.3 2.5C24.9 20.5 24.4 26.1 24.3 27.3zM28.6 34.8c1.1 1.4 2.3 3.4 2.5 3.9 0.2 0.5-0.2 1.3-0.5 2 -0.5 2-0.5 2-2 1.3 -0.9-0.9-2.4-5.2-2-7.7l0-1.8L28.6 34.8z"
          />
        </svg>
      </button>
    </>
  );
};

export default TopToBtn;
