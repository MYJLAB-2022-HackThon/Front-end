import React, { useState, createContext, useContext } from "react";

const AnimalListContext = createContext<any | undefined>(undefined);

export const useAnimalList = () => useContext(AnimalListContext);

export function AnimalListProvider({ children }: any) {
  const [animalList, setAnimalList] = useState([]);
  return (
    <AnimalListContext.Provider value={{ animalList, setAnimalList }}>
      {children}
    </AnimalListContext.Provider>
  );
}
