import { useEffect, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { FaCarRear } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";
import { BsTruckFrontFill } from "react-icons/bs";
import Form from "./Form";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isCarsSelected, isTrucksSelected, handleSelected } = useAppContext();

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
          <Form />
        </div>
      </div>
    </>
  );
}

export default Navbar;
