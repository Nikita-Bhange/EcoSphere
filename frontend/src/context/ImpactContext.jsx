import React,{ createContext, useContext, useState } from "react";

const ImpactContext = createContext();

export function ImpactProvider({ children }) {
  const [ecoScore, setEcoScore] = useState(0);
  const [itemsThisMonth, setItemsThisMonth] = useState(0);

  return (
    <ImpactContext.Provider
      value={{ ecoScore, setEcoScore, itemsThisMonth, setItemsThisMonth }}
    >
      {children}
    </ImpactContext.Provider>
  );
}

export function useImpact() {
  return useContext(ImpactContext);
}
