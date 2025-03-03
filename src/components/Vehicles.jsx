import VehicleCard from "./VehicleCard";
import vehicles from "../data/vehicles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Vehicles() {
  const { cars, trucks } = vehicles;

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        {/* Cars */}
        <h2 className="text-4xl my-6 text-center">OUR CARS</h2>
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
        <h2 className="text-4xl my-6 text-center">OUR TRUCKS</h2>
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
