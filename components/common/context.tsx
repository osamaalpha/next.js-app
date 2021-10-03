import React, { createContext, useState } from "react";

export const GlobalContext: any = createContext(0);

export const GlobalProvider = ({ children }: any) => {
  const [cartProduct, setCartProduct]: any = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        cartProduct,
        setCartProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
