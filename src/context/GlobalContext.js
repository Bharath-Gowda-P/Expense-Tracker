import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [trans, setTrans] = useState([]);

  // const [trans, setTrans] = useState("hello")

  const values = {
    trans,
    setTrans,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
