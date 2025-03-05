import { useState } from "react";
import { BsFillLuggageFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaAdn, FaWeightHanging, FaUser, FaIdCard } from "react-icons/fa";
import { MdLuggage, MdElectricBolt } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";

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
          className={`flex flex-col relative mb-8 bg-linear-to-b border-3 border-white text-black rounded-2xl p-4 gap-4 w-100 h-100 justify-evenly cursor-pointe ${
            isElectric ? "from-white to-blue-700" : "from-white to-orange-700"
          }`}
          onClick={handleClick}
        >
          <div className="flex absolute top-5 left-25 items-end gap-2 duration-500">
            <h3 className="text-4xl font-semibold">
              {brand.toUpperCase()} {name}
            </h3>
            <p className="text-2xl pb-[1px]">or similar</p>
          </div>

          <div className="absolute top-18 left-5 flex gap-2 duration-500">
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2">
              <FaUser className="size-4" />
              {seats} seats
            </span>
            {bags ? (
              <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2">
                <FaBagShopping className="size-4" />
                {bags} {bags > 1 ? "bags" : "bag"}
              </span>
            ) : null}
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2">
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
            {isElectric ? (
              <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2">
                <MdElectricBolt className="text-blue-700 size-6 animate-pulse" />
              </span>
            ) : null}
            <div className="absolute top-10 flex gap-2 duration-500">
              <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2 h-7 w-23">
                <GiCarDoor className="size-5" />
                {doors} doors
              </span>
              <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2 h-7 w-33">
                <FaIdCard className="size-5" />
                Minum age: {minAge}
              </span>
              <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2 h-7 w-26">
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
          </div>
          <img
            src={img}
            alt={name}
            className="absolute -bottom-4 left-0 duration-500"
          />
          <p className="absolute bottom-42 left-29 text-white text-3xl duration-500">
            <span className="text-6xl font-semibold">$ {price}</span> /day
          </p>
        </div>
      ) : (
        <div
          className={`flex flex-col relative mb-8 bg-linear-to-b border-3 border-white text-black rounded-2xl p-4 gap-4 w-100 h-100 justify-evenly cursor-pointer ${
            isElectric ? "from-white to-blue-700" : "from-white to-orange-700"
          }`}
          onClick={handleClick}
        >
          <div className="flex absolute top-10 items-end gap-2 duration-500">
            <h3 className="text-4xl font-semibold">
              {brand.toUpperCase()} {name}
            </h3>
            <p className="text-2xl pb-[1px]">or similar</p>
          </div>
          <div className="absolute top-22 flex gap-2 duration-500">
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2">
              <FaUser className="size-4" />
              {seats}
            </span>
            <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2">
              {suitcases ? (
                <>
                  <BsFillLuggageFill className="size-5.5" />
                  {suitcases}
                </>
              ) : (
                <>
                  <FaWeightHanging className="size-3.5" />
                  {kg}
                </>
              )}
            </span>
            {isElectric ? (
              <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-2">
                <MdElectricBolt className="text-blue-700 size-6 animate-pulse" />
              </span>
            ) : null}
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
