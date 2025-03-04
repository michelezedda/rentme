import { useState } from "react";
import { BsFillLuggageFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaAdn, FaWeightHanging, FaUser, FaIdCard } from "react-icons/fa";
import { MdLuggage, MdElectricBolt } from "react-icons/md";

function VehicleCard({
  brand,
  name,
  img,
  kg,
  bags,
  suitcases,
  seats,
  doors,
  isManual,
  isElectric,
  minAge,
  price,
}) {
  const [isInfoCardOpen, setIsInfoCardOpen] = useState(false);

  const handleClick = () => {
    setIsInfoCardOpen((prevState) => !prevState);
  };

  return (
    <>
      {isInfoCardOpen ? (
        <div
          className="flex flex-col relative mb-8 bg-linear-to-b from-white to-orange-700 border-3 border-white text-black rounded-2xl p-4 gap-4 w-100 h-100 justify-evenly cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex absolute top-5 left-25 items-end gap-2 duration-500">
            <h3 className="text-4xl font-semibold">
              {brand.toUpperCase()} {name}
            </h3>
            <p className="text-2xl pb-[1px]">or similar</p>
          </div>
          <div className="absolute top-18 left-5 flex gap-2 duration-500">
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              <FaUser className="size-4" />
              {seats} seats
            </span>
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              <FaBagShopping className="size-4" /> {bags}{" "}
              {bags > 1 ? "bags" : "bag"}
            </span>
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              {suitcases ? (
                <>
                  <MdLuggage className="size-5.5" />
                  {suitcases} {suitcases > 1 ? "suitcases" : "suitcase"}
                </>
              ) : (
                <>
                  <FaWeightHanging className="size-3.5" />
                  {kg} kg
                </>
              )}
            </span>
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              {doors} doors
            </span>
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              <FaIdCard className="size-6" />
              Minum age: {minAge}
            </span>
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              {isManual ? (
                <>
                  <TbManualGearboxFilled /> Manual
                </>
              ) : (
                <>
                  <FaAdn /> Automatic
                </>
              )}
            </span>
          </div>
          <img
            src={img}
            alt={name}
            className="absolute -bottom-8 left-0 duration-500"
          />
          <p className="absolute bottom-35 left-29 text-white text-3xl duration-500">
            <span className="text-5xl font-semibold">$ {price}</span> /day
          </p>
        </div>
      ) : (
        <div
          className="flex flex-col relative mb-8 bg-linear-to-b from-white to-orange-700 border-3 border-white text-black rounded-2xl p-4 gap-4 w-100 h-100 justify-evenly cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex absolute top-10 items-end gap-2 duration-500">
            <h3 className="text-4xl font-semibold">
              {brand.toUpperCase()} {name}
            </h3>
            <p className="text-2xl pb-[1px]">or similar</p>
          </div>
          <div className="absolute top-22 flex gap-2 duration-500">
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              <FaUser className="size-4" />
              {seats} seats
            </span>
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
              {suitcases ? (
                <>
                  <MdLuggage className="size-5.5" />
                  {suitcases} {suitcases > 1 ? "suitcases" : "suitcase"}
                </>
              ) : (
                <>
                  <FaWeightHanging className="size-3.5" />
                  {kg} kg
                </>
              )}
            </span>
          </div>
          <img
            src={img}
            alt={name}
            className="absolute bottom-18 left-0 hover:scale-110 duration-500"
          />
          <p className="absolute bottom-10 text-white text-3xl duration-500">
            <span className="text-5xl font-semibold">$ {price}</span> /day
          </p>
        </div>
      )}
    </>
  );
}

export default VehicleCard;
