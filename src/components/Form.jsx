import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    isCarsSelected,
    handleSelectedVehicle,
    cars,
    trucks,
    choice,
    setChoice,
  } = useAppContext();
  const navigate = useNavigate();

  const handleChoice = (e) => {
    const selected = e.target.value;
    const vehicle = isCarsSelected
      ? cars.find((car) => car.brand + car.name === selected)
      : trucks.find((truck) => truck.brand + truck.name === selected);

    setChoice(vehicle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    choice && navigate("/checkout");
  };

  return (
    <>
      <form
        action="#"
        className="flex flex-col gap-2 text-xl place-items-center"
        onSubmit={handleSubmit}
      >
        {isCarsSelected ? (
          <>
            <label htmlFor="cars"></label>
            <select
              name="cars"
              id="cars"
              className="text-center cursor-pointer"
              defaultValue=""
              onChange={(e) => {
                handleSelectedVehicle(e);
                handleChoice(e);
              }}
              required
            >
              <option value="" disabled>
                -- Select a car --
              </option>
              {cars.map((car) => (
                <option key={car.id} value={car.brand + car.name}>
                  {car.brand + car.name}
                </option>
              ))}
            </select>
          </>
        ) : (
          <>
            <label htmlFor="trucks"></label>
            <select
              name="trucks"
              id="trucks"
              className="text-center cursor-pointer"
              defaultValue=""
              onChange={(e) => {
                handleSelectedVehicle(e);
                handleChoice(e);
              }}
              required
            >
              <option value="" disabled>
                -- Select a truck --
              </option>
              {trucks.map((truck) => (
                <option key={truck.id} value={truck.brand + truck.name}>
                  {truck.brand} {truck.name}
                </option>
              ))}
            </select>
          </>
        )}
        <div className="flex justify-around">
          <div className="flex flex-col">
            <label htmlFor="pickup" className="font-semibold">
              Pick-up
            </label>
            <input
              type="datetime-local"
              id="pickup"
              name="Pick-up"
              className="cursor-pointer"
              required
            />
          </div>
          <hr className="h-14 text-black border mx-4" />
          <div className="flex flex-col">
            <label htmlFor="return" className="font-semibold">
              Return
            </label>
            <input
              type="datetime-local"
              id="return"
              name="Return"
              className="cursor-pointer"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="SELECT PICKUP"
          className="bg-orange-600 w-full text-white rounded-lg p-1 text-xl font-semibold mt-4 cursor-pointer active:scale-98"
        />
      </form>
    </>
  );
}

export default Form;
