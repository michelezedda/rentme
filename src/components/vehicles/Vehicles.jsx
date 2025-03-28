import VehicleCard from "./VehicleCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useAppContext } from "../../context/AppContext";

function Vehicles() {
  const { cars, trucks } = useAppContext();

  return (
    <>
      <div
        id="vehicles"
        className="flex flex-col items-center gap-2 text-white px-4 pt-10 pb-20 xl:border-4 rounded-md"
      >
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
              fixedWidth: "358px",
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
              fixedWidth: "358px",
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
      </div>
    </>
  );
}

export default Vehicles;
