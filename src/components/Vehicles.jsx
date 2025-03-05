import VehicleCard from "./VehicleCard";
import vehicles from "../data/vehicles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Vehicles() {
  const { cars, trucks } = vehicles;

  return (
    <>
      <div className="flex flex-col items-center gap-2 bg-linear-to-b from-neutral-300 to-neutral-950 text-white px-4 py-20">
        {/* Cars */}
        <h2 className="text-6xl my-6 text-center font-semibold">
          THE PERFECT CAR FOR YOUR NEXT TRIP
        </h2>
        <div className="w-full mt-4">
          <Splide
            options={{
              perMove: 1,
              gap: "1rem",
              pagination: false,
              arrows: false,
              type: "loop",
              fixedWidth: "472px",
            }}
          >
            {cars.map((car) => (
              <SplideSlide key={car.id}>
                <div className="flex justify-center">
                  <VehicleCard {...car} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        {/* Trucks */}
        <h2 className="text-6xl my-6 text-center font-semibold">
          OR TRUCK FOR ANY JOB, ANYWHERE
        </h2>
        <div className="w-full mt-4">
          <Splide
            options={{
              perMove: 1,
              gap: "1rem",
              pagination: false,
              arrows: false,
              type: "loop",
              fixedWidth: "472px",
            }}
          >
            {cars.map((car) => (
              <SplideSlide key={car.id}>
                <div className="flex justify-center">
                  <VehicleCard {...car} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
