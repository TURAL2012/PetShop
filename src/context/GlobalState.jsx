import { createContext, useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  async function getData() {
    const { data } = await supabase.from("petshopdata").select("*");
    setData(data);
    console.log(data);
  }
  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
};
