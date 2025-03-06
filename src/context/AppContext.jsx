import { createContext, useContext, useState } from "react";
import vehicles from "../data/vehicles";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isCarsSelected, setIsCarsSelected] = useState(true);
  const [isTrucksSelected, setIsTrucksSelected] = useState(false);
  const [choice, setChoice] = useState(null);
  const [vehicle, setVehicle] = useState("");
  const { cars, trucks } = vehicles;

  const handleSelectedVehicle = (e) => {
    setVehicle(vehicle);
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
        cars,
        trucks,
        choice,
        setChoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
