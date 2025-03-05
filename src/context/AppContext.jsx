import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isCarsSelected, setIsCarsSelected] = useState(true);
  const [isTrucksSelected, setIsTrucksSelected] = useState(false);
  const [vehicle, setVehicle] = useState("");

  const handleSelectedVehicle = (e) => {
    setVehicle(e.target.value);
  };

  const handleSelected = () => {
    if (isCarsSelected === true) {
      setIsCarsSelected((prevState) => !prevState);
      setIsTrucksSelected((prevState) => !prevState);
    } else if (isTrucksSelected === true) {
      setIsCarsSelected((prevState) => !prevState);
      setIsTrucksSelected((prevState) => !prevState);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isCarsSelected,
        isTrucksSelected,
        handleSelected,
        vehicle,
        handleSelectedVehicle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
