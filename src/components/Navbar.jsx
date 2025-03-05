import { useEffect, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { FaCarRear } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";
import { BsTruckFrontFill } from "react-icons/bs";

function Navbar() {
  const [isCarsSelected, setIsCarsSelected] = useState(true);
  const [isTrucksSelected, setIsTrucksSelected] = useState(false);
  const [isSelectionVisible, setIsSelectionVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSelected = () => {
    if (isCarsSelected === true) {
      setIsCarsSelected((prevState) => !prevState);
      setIsTrucksSelected((prevState) => !prevState);
    } else if (isTrucksSelected === true) {
      setIsCarsSelected((prevState) => !prevState);
      setIsTrucksSelected((prevState) => !prevState);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 500) {
        setIsSelectionVisible(false);
      } else if (window.scrollY < lastScrollY && window.scrollY < 500) {
        setIsSelectionVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 mx-6 w-full transition-opacity duration-200 ${
          isSelectionVisible
            ? "motion-translate-y-in-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between py-1 pl-2 pr-16">
          <span className="text-4xl font-bold text-orange-600">RentMe</span>
          <ul className="flex gap-4 py-1 items-center text-white">
            <li className="hover:text-orange-600 cursor-pointer ease-in-out duration-500">
              <FaCarRear className="size-5.5" />
            </li>
            <li className="hover:text-orange-600 cursor-pointer ease-in-out duration-500">
              <IoEarth className="size-6" />
            </li>
            <li className="hover:text-orange-600 cursor-pointer ease-in-out duration-500">
              <LuCircleUserRound className="size-6" />
            </li>
          </ul>
        </div>
        <div className="mt-2 w-[90%] bg-white rounded-2xl text-black p-4 gap-4">
          <div className="flex gap-2">
            <button
              className={`flex text-lg gap-2 place-items-center ${
                isCarsSelected
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-200 text-neutral-800"
              }`}
              onClick={handleSelected}
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
              onClick={handleSelected}
            >
              <BsTruckFrontFill />
              Trucks
            </button>
          </div>
          <div>
            <form action="#" className="flex flex-col gap-2 text-xl">
              {isCarsSelected ? (
                <>
                  <label htmlFor="cars" id="cars"></label>
                  <select
                    name="cars"
                    id="cars"
                    className="text-center"
                    defaultValue=""
                    required
                  >
                    <option value={""} disabled>
                      -- Select a car --
                    </option>
                    <option value="Opel Mokka">Opel Mokka</option>
                    <option value="Fiat 600">Fiat 600</option>
                    <option value="Peugeot 2008">Peugeot 2008</option>
                    <option value="BMW X7">BMW X7</option>
                    <option value="Volkswagen T-Cross">
                      Volkswagen T-Cross
                    </option>
                  </select>
                </>
              ) : (
                <>
                  <label htmlFor="trucks" id="trucks"></label>
                  <select
                    name="trucks"
                    id="trucks"
                    className="text-center"
                    defaultValue=""
                    required
                  >
                    <option value={""} disabled>
                      -- Select a truck --
                    </option>
                    <option value="Fiat Ducato">Fiat Ducato</option>
                    <option value="Fiat Scudo">Fiat Scudo</option>
                    <option value="IVECO Daily">IVECO Daily</option>
                  </select>
                </>
              )}
              <div className="flex justify-around">
                <div className="flex flex-col">
                  <label htmlFor="pickup" className="font-semibold">
                    Pick-up
                  </label>
                  <input
                    type="datetime-local"
                    id="pickup"
                    name="Pick-up"
                    required
                  />
                </div>
                <hr className="h-14 text-black border" />
                <div className="flex flex-col">
                  <label htmlFor="return" className="font-semibold">
                    Return
                  </label>
                  <input
                    type="datetime-local"
                    id="return"
                    name="Return"
                    required
                  />
                </div>
              </div>
              <input
                type="submit"
                value="SELECT PICKUP"
                className="bg-orange-600 w-full text-white rounded-lg p-1 text-xl font-semibold mt-4 cursor-pointer active:scale-98"
              />
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
