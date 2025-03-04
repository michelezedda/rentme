import { Weight, UsersRound, Luggage } from "lucide-react";

function VehicleCard({ brand, name, img, kg, suitcases, seats, price }) {
  return (
    <>
      <div className="flex flex-col relative bg-linear-to-b from-white to-orange-700 border-3 border-black text-black rounded-2xl p-4 gap-4 w-100 h-100 justify-evenly cursor-pointer">
        <div className="flex absolute top-10 items-end gap-2">
          <h3 className="text-4xl font-semibold">
            {brand.toUpperCase()} {name}
          </h3>
          <p className="text-2xl pb-[1px]">or similar</p>
        </div>
        <div className="absolute top-22 flex gap-2">
          <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
            <UsersRound size={18} />
            {seats} seats
          </span>
          <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-3 gap-1">
            {suitcases ? (
              <>
                <Luggage size={18} />
                {suitcases} {suitcases > 1 ? "suitcases" : "suitcase"}
              </>
            ) : (
              <>
                <Weight size={18} />
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
        <p className="absolute bottom-10 text-white text-3xl">
          <span className="text-5xl font-semibold">$ {price}</span> /day
        </p>
      </div>
    </>
  );
}

export default VehicleCard;
