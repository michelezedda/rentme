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

  // Function to select a vehicle
  const handleSelectedVehicle = (e) => {
    setVehicle(e.target.value);
  };

  // Function to select a location
  const handleSelectedLocation = (e) => {
    setSelectedLocation(e.target.value);
    handleChoice(e);
  };

  // Function to select "cars" instead of "trucks"
  const carsBtn = () => {
    setIsCarsSelected(true);
    setIsTrucksSelected(false);
  };

  // Function to select "trucks" instead of "cars"
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
