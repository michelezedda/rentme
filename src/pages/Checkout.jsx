import { useAppContext } from "../context/AppContext";
import { FaBagShopping } from "react-icons/fa6";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaAdn, FaWeightHanging, FaUser, FaIdCard } from "react-icons/fa";
import { MdLuggage, MdElectricBolt } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useState } from "react";

function Checkout() {
  const { choice } = useAppContext();
  const [additionalCharges, setAdditionalCharges] = useState({
    additionalDriver: 0,
    crossBorder: 0,
    gps: 0,
    skiRack: 0,
  });

  const handleChange = (e, key, value) => {
    setAdditionalCharges((prevState) => ({
      ...prevState,
      [key]: e.target.checked ? value : 0,
    }));
  };

  const totalAdditionalCharges =
    additionalCharges.additionalDriver +
    additionalCharges.crossBorder +
    additionalCharges.gps +
    additionalCharges.skiRack;

  const finalTotal = (choice.price + totalAdditionalCharges).toFixed(2);

  return (
    <>
      <div className="flex flex-col gap-4 bg-neutral-200 h-[100dvh]">
        <div className="absolute top-5 left-5">
          <a href="/">
            <IoChevronBackCircleOutline className="size-14 text-white cursor-pointer scale-98 hover:text-orange-600 ease-in-out duration-500" />
          </a>
        </div>
        <div
          className={`bg-linear-to-bl h-91 ${
            choice.isElectric
              ? "from-white via-blue-300 to-blue-700"
              : "from-white via-orange-300 to-orange-700"
          } `}
        >
          <img src={choice.img} alt={choice.brand + choice.name} />
        </div>
        <div className="flex justify-between mx-4">
          <div className="flex items-end gap-2 ">
            <h3 className="text-4xl font-semibold">
              {choice.brand.toUpperCase()} {choice.name}
            </h3>
            <p className="text-2xl pb-[1px]">or similar</p>
          </div>
          <div>
            {choice.isElectric ? (
              <span className="flex text-sm bg-neutral-400 rounded-full items-center p-1 gap-2">
                <MdElectricBolt className="text-blue-700 size-6 animate-pulse" />
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex justify-between gap-4 p-4">
          <div className="flex flex-col gap-2">
            <span className="flex text-sm gap-2">
              <FaUser className="size-4" />
              {choice.seats} seats
            </span>
            {choice.bags ? (
              <span className="flex text-sm gap-2">
                <FaBagShopping className="size-4" />
                {choice.bags} {choice.bags > 1 ? "bags" : "bag"}
              </span>
            ) : null}
            <span className="flex text-sm gap-1">
              {choice.suitcases ? (
                <>
                  <MdLuggage className="size-5" />
                  {choice.suitcases}{" "}
                  {choice.suitcases > 1 ? "suitcases" : "suitcase"}
                </>
              ) : (
                <>
                  <FaWeightHanging className="size-3.5" />
                  {choice.kg} kg
                </>
              )}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex text-sm gap-1.5">
              <GiCarDoor className="size-4.5" />
              {choice.doors} doors
            </span>
            <span className="flex text-sm gap-2">
              <FaIdCard className="size-4.5" />
              Minimum age of the youngest driver: {choice.minAge}
            </span>
            <span className="flex text-sm gap-1.5">
              {choice.isManual ? (
                <>
                  <TbManualGearboxFilled /> Manual
                </>
              ) : (
                <>
                  <FaAdn className="size-4" /> Automatic
                </>
              )}
            </span>
          </div>
        </div>
        <div className="flex justify-between place-items-center px-8 text-2xl">
          Price{" "}
          <p>
            <span className="text-3xl font-semibold">$ {choice.price}</span>{" "}
            /day
          </p>
        </div>
        <div className="bg-neutral-50 p-4">
          <h2 className="mb-2 font-semibold text-2xl">Booking option</h2>
          <label htmlFor="">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xl">
                <p>Additional driver</p>
                <div className="flex gap-4">
                  <p className="font-semibold">$ 7.94</p>
                  <input
                    type="checkbox"
                    className="size-6 rounded-full"
                    value={7.94}
                    onChange={(e) => handleChange(e, "additionalDriver", 7.94)}
                  />
                </div>
              </div>
              <div className="flex justify-between text-xl">
                <p>Cross-border driving</p>
                <div className="flex gap-4">
                  <p className="font-semibold">$ 53.93</p>
                  <input
                    type="checkbox"
                    className="size-6 rounded-full"
                    value={53.93}
                    onChange={(e) => handleChange(e, "crossBorder", 53.93)}
                  />
                </div>
              </div>
              <div className="flex text-xl justify-between">
                <p>GPS and Apple Car Play / Android Auto</p>
                <div className="flex gap-4">
                  <p className="font-semibold">$ 8.84</p>
                  <input
                    type="checkbox"
                    className="size-6 rounded-full"
                    value={8.84}
                    onChange={(e) => handleChange(e, "gps", 8.84)}
                  />
                </div>
              </div>
              <div className="flex justify-between text-xl">
                <p>Ski rack</p>
                <div className="flex gap-4">
                  <p className="font-semibold">$ 2.33</p>
                  <input
                    type="checkbox"
                    value={2.33}
                    onChange={(e) => handleChange(e, "skiRack", 2.33)}
                    className="size-6 rounded-full"
                  />
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className="flex justify-between place-items-center px-8 text-4xl">
          Total{" "}
          <p>
            <span className="font-semibold">$ {finalTotal}</span> /day
          </p>
        </div>
        <button className="bg-orange-600 text-white text-3xl mb-2 mx-4">
          PAY
        </button>
      </div>
    </>
  );
}

export default Checkout;
