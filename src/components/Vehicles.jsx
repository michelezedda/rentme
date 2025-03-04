import VehicleCard from "./VehicleCard";
import vehicles from "../data/vehicles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Vehicles() {
  const { cars, trucks } = vehicles;

  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-15 bg-neutral-700 text-white px-4">
        {/* Cars */}
        <h2 className="text-6xl my-6 text-center font-semibold">
          THE PERFECT CAR FOR YOUR NEXT TRIP
        </h2>
        <Splide
          options={{
            perMove: 1,
            gap: "1rem",
            pagination: false,
            arrows: false,
            type: "loop",
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
        {/* Trucks */}
        <h2 className="text-6xl my-6 text-center font-semibold">
          OR TRUCK FOR ANY JOB, ANYWHERE
        </h2>
        <Splide
          options={{
            perMove: 1,
            gap: "1rem",
            pagination: false,
            arrows: false,
            type: "loop",
          }}
        >
          {trucks.map((truck) => (
            <SplideSlide key={truck.id}>
              <div className="flex justify-center">
                <VehicleCard {...truck} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default Vehicles;
