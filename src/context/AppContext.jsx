import { createContext, useContext, useState } from "react";
import vehicles from "../data/vehicles";
import locations from "../data/locations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isCarsSelected, setIsCarsSelected] = useState(true);
  const [isTrucksSelected, setIsTrucksSelected] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [choice, setChoice] = useState(null);
  const [vehicle, setVehicle] = useState("");
  const { cars, trucks } = vehicles;

  const handleSelectedVehicle = (e) => {
    setVehicle(e.target.value);
  };

  const handleSelectedLocation = (e) => {
    setSelectedLocation(e.target.value);
    handleChoice(e);
  };

  const carsBtn = () => {
    setIsCarsSelected(true);
    setIsTrucksSelected(false);
  };

  const trucksBtn = () => {
    setIsTrucksSelected(true);
    setIsCarsSelected(false);
  };

  return (
    <AppContext.Provider
      value={{
        isCarsSelected,
        isTrucksSelected,
        vehicle,
        handleSelectedVehicle,
        handleSelectedLocation,
        cars,
        trucks,
        selectedLocation,
        choice,
        setChoice,
        locations,
        carsBtn,
        trucksBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
