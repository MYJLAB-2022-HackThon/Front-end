import React, { useState, createContext, useContext } from "react";

const SelectedAnimalContext = createContext<any | undefined>(undefined);

export const useSelectedAnimal = () => useContext(SelectedAnimalContext);

export function SelectedAnimalProvider({ children }: any) {
  const [selectedAnimal, setSelectedAnimal] = useState([]);
  return (
    <SelectedAnimalContext.Provider
      value={{ selectedAnimal, setSelectedAnimal }}
    >
      {children}
    </SelectedAnimalContext.Provider>
  );
}
