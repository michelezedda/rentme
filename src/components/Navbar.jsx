import { useEffect, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { FaCarRear } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";
import { BsTruckFrontFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const {
    locations,
    cars,
    trucks,
    choice,
    setChoice,
    isCarsSelected,
    isTrucksSelected,
    selectedLocation,
    handleType,
    handleSelectedVehicle,
    handleSelectedLocation,
  } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 500) {
        setIsNavbarVisible(false);
      } else if (window.scrollY < lastScrollY && window.scrollY < 500) {
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleChoice = (e) => {
    const selected = e.target.value;

    const selectedVehicle = isCarsSelected
      ? cars.find((car) => car.brand + car.name === selected)
      : trucks.find((truck) => truck.brand + truck.name === selected);

    setChoice({
      selectedVehicle: { ...selectedVehicle },
      selectedLocation: selectedLocation,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    choice && navigate("/checkout");
  };

  return (
    <>
      <div
        className={`fixed left-0 right-0 max-w-screen-lg lg:px-4 mx-6 lg:mx-auto transition-opacity duration-200 ${
          isNavbarVisible
            ? "motion-translate-y-in-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between py-1 md:py-2 p-2 placeitem">
          <span className="text-4xl font-bold text-orange-600">RentMe</span>
          <ul className="flex gap-4 py-1 items-center text-white">
            <li className="hover:text-orange-600 cursor-pointer ease-in-out duration-500">
              <a href="#vehicles">
                <FaCarRear className="size-5.5" />
              </a>
            </li>
            <li className="hover:text-orange-600 cursor-pointer ease-in-out duration-500">
              <IoEarth className="size-6" />
            </li>
            <li className="hover:text-orange-600 cursor-pointer ease-in-out duration-500">
              <LuCircleUserRound className="size-6" />
            </li>
          </ul>
        </div>
        <div className="mt-2 bg-white rounded-2xl text-black p-4 gap-4">
          <div className="flex gap-2">
            <button
              className={`flex text-lg gap-2 place-items-center ${
                isCarsSelected
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-200 text-neutral-800"
              }`}
              onClick={handleType}
            >
              <FaCarRear />
              Cars
            </button>
            <button
              className={`flex text-lg gap-2 place-items-center ${
                isTrucksSelected
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-200 text-neutral-800"
              }`}
              onClick={handleType}
            >
              <BsTruckFrontFill />
              Trucks
            </button>
          </div>
          <form
            action="#"
            className="flex flex-col gap-2 text-xl mx-4 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between mx-2">
              {isCarsSelected ? (
                <>
                  <label htmlFor="cars">Car:</label>
                  <select
                    name="cars"
                    id="cars"
                    className="text-center cursor-pointer"
                    defaultValue=""
                    onChange={(e) => {
                      handleSelectedVehicle(e);
                      handleChoice(e);
                    }}
                    required
                  >
                    <option value="" disabled>
                      -- Select a car --
                    </option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.brand + car.name}>
                        {car.brand} {car.name}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <>
                  <label htmlFor="trucks">Truck:</label>
                  <select
                    name="trucks"
                    id="trucks"
                    className="text-center cursor-pointer"
                    defaultValue=""
                    onChange={(e) => {
                      handleSelectedVehicle(e);
                      handleChoice(e);
                    }}
                    required
                  >
                    <option value="" disabled>
                      -- Select a truck --
                    </option>
                    {trucks.map((truck) => (
                      <option key={truck.id} value={truck.brand + truck.name}>
                        {truck.brand} {truck.name}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
            <div className="flex justify-between mx-2">
              <label htmlFor="location">Pick-up location:</label>
              <select
                name="location"
                id="location"
                className="text-center cursor-pointer"
                defaultValue=""
                onChange={(e) => {
                  handleSelectedLocation(e);
                }}
                required
              >
                <option value="" disabled>
                  -- Select location --
                </option>
                {locations.map((location) => (
                  <option key={location.id} value={location.city}>
                    {location.city}
                  </option>
                ))}
              </select>{" "}
            </div>
            <input
              type="submit"
              value="SELECT PICKUP"
              className="bg-orange-600 w-full text-white rounded-lg p-1 text-xl font-semibold mt-4 cursor-pointer active:scale-98"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;
