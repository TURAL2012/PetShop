import React, { useEffect , useState} from "react";

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
          display: visible ? "block" : "none",
        }}
      >
        yuxari
      </button>
    </>
  );
};

export default TopToBtn;
