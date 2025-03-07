import { IoIosArrowDown } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function Form() {
  const [pickupDate, setPickupDate] = useState("");

  const handlePickupChange = (e) => {
    setPickupDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error(
      "This app rents dreams, not cars. If only this wasn’t just a demo!"
    );
  };

  return (
    <>
      <form action="#" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <p className="text-3xl ml-1">Select dates</p>
        <div className="flex justify-around border-2 border-stone-600 bg-stone-300 rounded-xl text-xl">
          <div className="flex flex-col p-2 w-full">
            <label htmlFor="pickup" className="font-semibold">
              <p className="flex place-items-center gap-2">
                Pick-up <IoIosArrowDown />
              </p>
            </label>
            <input
              type="datetime-local"
              id="pickup"
              name="Pick-up"
              className="cursor-pointer border-2 border-stone-400 rounded-lg p-2"
              min={new Date().toISOString().slice(0, 16)}
              onChange={handlePickupChange}
              value={pickupDate}
              required
            />
          </div>
          <div className="flex flex-col p-2 md:w-full">
            <label htmlFor="return" className="font-semibold">
              <p className="flex place-items-center gap-2">
                Return <IoIosArrowDown />
              </p>
            </label>
            <input
              type="datetime-local"
              id="return"
              name="Return"
              className="cursor-pointer border-2 border-stone-400 rounded-lg p-2"
              min={pickupDate || new Date().toISOString().slice(0, 16)}
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="CONTINUE"
          className="bg-orange-600 w-full text-white rounded-lg p-2 text-3xl font-semibold mt-4 cursor-pointer active:scale-98"
        />
      </form>
      <Toaster />
    </>
  );
}

export default Form;
