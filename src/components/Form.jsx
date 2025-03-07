import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
        <div className="flex justify-around border-2 border-stone-600 p-4 rounded-xl text-xl">
          <div className="flex flex-col">
            <label htmlFor="pickup" className="font-semibold">
              Pick-up
            </label>
            <input
              type="datetime-local"
              id="pickup"
              name="Pick-up"
              className="cursor-pointer"
              min={new Date().toISOString().slice(0, 16)}
              onChange={handlePickupChange}
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
