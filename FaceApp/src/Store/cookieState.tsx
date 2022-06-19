import React, { useState, createContext, useContext } from "react";

const cookieContext = createContext<any | undefined>(undefined);

export const useCookie = () => useContext(cookieContext);

export function CookieProvider({ children }: any) {
  const [cookie, setCookie] = useState<string>("");
  return (
    <cookieContext.Provider value={{ cookie, setCookie }}>
      {children}
    </cookieContext.Provider>
  );
}
