import { BsFillLuggageFill } from "react-icons/bs";
import { FaWeightHanging, FaUser, FaIdCard } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

function VehicleCard({
  brand,
  name,
  img,
  kg,
  bags,
  suitcases,
  seats,
  isElectric,
  price,
}) {
  return (
    <>
      <div
        className={`flex flex-col relative mb-8 bg-linear-to-b border-3 border-white text-black rounded-2xl p-4 gap-4 w-100 h-100 justify-evenly cursor-pointer ${
          isElectric
            ? "from-white via-blue-300 to-blue-700"
            : "from-white via-orange-300 to-orange-700"
        }`}
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
                {suitcases + bags}
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
          <span className="text-5xl font-semibold">$ {price.toFixed(2)}</span>{" "}
          /day
        </p>
      </div>
    </>
  );
}

export default VehicleCard;
