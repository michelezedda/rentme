import { useAppContext } from "../context/AppContext";
import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaAdn, FaWeightHanging, FaUser, FaIdCard } from "react-icons/fa";
import { MdLuggage, MdElectricBolt } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Checkout() {
  const { choice } = useAppContext();
  const [additionalCharges, setAdditionalCharges] = useState({
    additionalDriver: 0,
    crossBorder: 0,
    gps: 0,
    skiRack: 0,
  });

  // Function to handle each additional charge
  const handleChange = (e, key, value) => {
    setAdditionalCharges((prevState) => ({
      ...prevState,
      [key]: e.target.checked ? value : 0,
    }));
  };

  // Function to sum additional charges
  const totalAdditionalCharges =
    additionalCharges.additionalDriver +
    additionalCharges.crossBorder +
    additionalCharges.gps +
    additionalCharges.skiRack;

  // Function to calculate the final total
  const finalTotal = (
    choice.selectedVehicle.price + totalAdditionalCharges
  ).toFixed(2);

  return (
    <>
      <div className="flex flex-col sticky left-0 right-0 gap-4 bg-neutral-200">
        <div className="absolute top-5 left-5">
          <a href="/">
            <IoChevronBackCircleOutline className="size-14 text-white cursor-pointer scale-98 hover:text-orange-600 ease-in-out duration-500" />
          </a>
        </div>
        <div
          className={`bg-linear-to-bl h-91 flex justify-center items-center ${
            choice.selectedVehicle.isElectric
              ? "from-white via-blue-300 to-blue-700"
              : "from-white via-orange-300 to-orange-700"
          } `}
        >
          <img
            src={choice.selectedVehicle.img}
            alt={choice.selectedVehicle.brand + choice.selectedVehicle.name}
          />
        </div>
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex justify-between mx-4 md:mx-10">
            <div className="flex items-end gap-2">
              <h3 className="text-4xl md:text-5xl font-semibold">
                {choice.selectedVehicle.brand.toUpperCase()}{" "}
                {choice.selectedVehicle.name}
              </h3>
              <p className="text-2xl md:text-3xl pb-[1px]">or similar</p>
            </div>
            <div>
              {choice.selectedVehicle.isElectric ? (
                <span className="flex bg-neutral-400 rounded-full items-center p-1 gap-2">
                  <MdElectricBolt className="text-blue-700 size-6 md:size-8 animate-pulse" />
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between lg:justify-start gap-4 lg:gap-30 m-4 md:m-10 md:text-xl">
            <div className="flex flex-col gap-2">
              <span className="flex gap-2">
                <FaUser className="size-4 md:mt-1.5" />
                {choice.selectedVehicle.seats} seats
              </span>
              {choice.selectedVehicle.bags ? (
                <span className="flex gap-2">
                  <FaBagShopping className="size-4 md:mt-1" />
                  {choice.selectedVehicle.bags}{" "}
                  {choice.selectedVehicle.bags > 1 ? "bags" : "bag"}
                </span>
              ) : null}
              <span className="flex gap-1">
                {choice.selectedVehicle.suitcases ? (
                  <>
                    <MdLuggage className="size-5 md:mt-1" />
                    {choice.selectedVehicle.suitcases}{" "}
                    {choice.selectedVehicle.suitcases > 1
                      ? "suitcases"
                      : "suitcase"}
                  </>
                ) : (
                  <>
                    <FaWeightHanging className="size-3.5 md:mt-1" />
                    {choice.selectedVehicle.kg} kg
                  </>
                )}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex gap-1.5">
                <GiCarDoor className="size-4.5 md:mt-1" />
                {choice.selectedVehicle.doors} doors
              </span>
              <span className="flex gap-2">
                <FaIdCard className="size-4.5 md:mt-1" />
                Minimum age of the youngest driver:{" "}
                {choice.selectedVehicle.minAge}
              </span>
              <span className="flex gap-1.5">
                {choice.selectedVehicle.isManual ? (
                  <>
                    <TbManualGearboxFilled className="size-4.5 md:mt-1" />{" "}
                    Manual
                  </>
                ) : (
                  <>
                    <FaAdn className="size-4 md:mt-1" /> Automatic
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="flex justify-between place-items-center mx-4 md:mx-10 text-2xl md:text-3xl">
            Price{" "}
            <p>
              <span className="text-3xl md:text-4xl font-semibold">
                $ {choice.selectedVehicle.price}
              </span>{" "}
              /day
            </p>
          </div>
          <div className="bg-neutral-50 p-4 my-4 md:p-10 xl:mx-10 xl:border-4 xl:rounded-md">
            <h2 className="mb-2 font-semibold text-2xl md:text-3xl">
              Booking options
            </h2>
            <label htmlFor="">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xl md:text-2xl">
                  <p>Additional driver</p>
                  <div className="flex gap-4">
                    <p className="font-semibold">$ 7.94</p>
                    <input
                      type="checkbox"
                      className="size-6 rounded-full cursor-pointer"
                      onChange={(e) =>
                        handleChange(e, "additionalDriver", 7.94)
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xl md:text-2xl">
                  <p>Cross-border driving</p>
                  <div className="flex gap-4">
                    <p className="font-semibold">$ 53.93</p>
                    <input
                      type="checkbox"
                      className="size-6 rounded-full cursor-pointer"
                      onChange={(e) => handleChange(e, "crossBorder", 53.93)}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xl md:text-2xl">
                  <p>GPS and Apple Car Play / Android Auto</p>
                  <div className="flex gap-4">
                    <p className="font-semibold">$ 8.84</p>
                    <input
                      type="checkbox"
                      className="size-6 rounded-full cursor-pointer"
                      onChange={(e) => handleChange(e, "gps", 8.84)}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xl md:text-2xl">
                  <p>Ski rack</p>
                  <div className="flex gap-4">
                    <p className="font-semibold">$ 2.33</p>
                    <input
                      type="checkbox"
                      className="size-6 rounded-full cursor-pointer"
                      onChange={(e) => handleChange(e, "skiRack", 2.33)}
                    />
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-4 mt-6 mb-10">
            <div className="flex justify-between text-4xl mx-4 md:mx-10">
              Total
              <p>
                <span className="text-4xl font-semibold">$ {finalTotal}</span>{" "}
                /day
              </p>
            </div>
            <div className="flex justify-between text-4xl mx-4 md:mx-10">
              Pick-up location
              <p className="flex font-semibold gap-2 place-items-center">
                {choice.selectedLocation}
                <FaLocationDot className="size-6" />
              </p>
            </div>
            <div className="flex flex-col text-3xl mx-4 md:mx-10 gap-4 mt-4">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
