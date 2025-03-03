import { Weight, UsersRound, Luggage } from "lucide-react";

function VehicleCard({ brand, name, img, kg, suitcases, seats, price }) {
  return (
    <>
      <div className="flex flex-col relative bg-linear-to-b from-white to-amber-700 border-2 border-black text-black rounded-2xl p-4 gap-4 w-100 h-100 justify-evenly">
        <div>
          <h2 className="absolute top-10 text-3xl font-semibold">
            {brand.toUpperCase()} {name}{" "}
            <p className="text-xl font-normal">or similar</p>
          </h2>
        </div>
        <div className="absolute top-28 flex gap-2">
          <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-2 gap-2">
            <UsersRound size={18} />
            {seats} seats
          </span>
          <span className="flex text-lg bg-neutral-400 rounded-[99px] items-center px-2 gap-2">
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
        <img src={img} alt={name} className="absolute bottom-12 left-0" />
        <p className="absolute bottom-10 text-white text-3xl">$ {price}</p>
      </div>
    </>
  );
}

export default VehicleCard;
