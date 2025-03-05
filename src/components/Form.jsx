import { useAppContext } from "../context/AppContext";
import { useState } from "react";

function Form() {
  const { isCarsSelected, vehicle, handleSelectedVehicle } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected ${vehicle}`);
  };

  return (
    <>
      <form
        action="#"
        className="flex flex-col gap-2 text-xl place-items-center"
      >
        {isCarsSelected ? (
          <>
            <label htmlFor="cars" id="cars"></label>
            <select
              name="cars"
              id="cars"
              className="text-center cursor-pointer"
              defaultValue=""
              onChange={handleSelectedVehicle}
              required
            >
              <option value={vehicle} disabled>
                -- Select a car --
              </option>
              <option value="Opel Mokka">Opel Mokka</option>
              <option value="Fiat 600">Fiat 600</option>
              <option value="Peugeot 2008">Peugeot 2008</option>
              <option value="BMW X7">BMW X7</option>
              <option value="Volkswagen T-Cross">Volkswagen T-Cross</option>
            </select>
          </>
        ) : (
          <>
            <label htmlFor="trucks" id="trucks"></label>
            <select
              name="trucks"
              id="trucks"
              className="text-center cursor-pointer"
              defaultValue=""
              onChange={handleSelectedVehicle}
              required
            >
              <option value={vehicle} disabled>
                -- Select a truck --
              </option>
              <option value="Fiat Ducato">Fiat Ducato</option>
              <option value="Fiat Scudo">Fiat Scudo</option>
              <option value="IVECO Daily">IVECO Daily</option>
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
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}

export default Form;
