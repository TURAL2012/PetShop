import React, { useState, useEffect } from "react";
import AppRouter from "./router/AppRouter";
import Preloader from "./components/Preloader";

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 6000);
  }, []);
  return <>{screenLoading ? <Preloader/> : <AppRouter />}</>;
}

export default App;
