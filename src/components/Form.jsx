function Form() {
  return (
    <>
      <form
        action="#"
        className="flex flex-col gap-2 text-xl place-items-center"
      >
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
          value="CONTINUE"
          className="bg-orange-600 w-full text-white rounded-lg p-2 text-3xl font-semibold mt-4 cursor-pointer active:scale-98"
        />
      </form>
    </>
  );
}

export default Form;
