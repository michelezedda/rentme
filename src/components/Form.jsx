import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useAppContext } from "../context/AppContext";

function Form() {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [rentPeriod, setRentPeriod] = useState({ pickUp: Date, dropOf: Date });
  const [nextStep, setNextStep] = useState(false);
  const [completed, setCompleted] = useState(false);

  const { choice } = useAppContext();

  // Function to continue and show the next step
  const handleNextStep = (e) => {
    e.preventDefault();
    setNextStep(true);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setCompleted(true);
  };

  return (
    <>
      <form onSubmit={handleNextStep}>
        <h2 className="mb-2 font-semibold text-2xl md:text-3xl">
          Personal Information
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="First name"
            value={personalData.firstName}
            onChange={(e) =>
              setPersonalData({ ...personalData, firstName: e.target.value })
            }
            minLength={3}
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
          <input
            type="text"
            placeholder="First name"
            value={personalData.lastName}
            onChange={(e) =>
              setPersonalData({ ...personalData, lastName: e.target.value })
            }
            minLength={3}
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={personalData.phone}
            onChange={(e) =>
              setPersonalData({ ...personalData, phone: e.target.value })
            }
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={personalData.age}
            onChange={(e) =>
              setPersonalData({ ...personalData, age: e.target.value })
            }
            min={choice.selectedVehicle.minAge}
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={personalData.email}
            onChange={(e) =>
              setPersonalData({ ...personalData, email: e.target.value })
            }
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
          <input
            type="address"
            placeholder="Address"
            value={personalData.address}
            onChange={(e) =>
              setPersonalData({ ...personalData, address: e.target.value })
            }
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
          <input
            type="text"
            placeholder="City"
            value={personalData.city}
            onChange={(e) =>
              setPersonalData({ ...personalData, city: e.target.value })
            }
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
          <input
            type="number"
            placeholder="Zip Code"
            value={personalData.zipCode}
            onChange={(e) =>
              setPersonalData({ ...personalData, zipCode: e.target.value })
            }
            className="border rounded px-2 py-1"
            autoComplete
            required
          />
        </div>
        <input
          type="submit"
          value="CONTINUE"
          className={`bg-orange-600 w-full text-white rounded-lg p-2 text-3xl font-semibold mt-4 cursor-pointer active:scale-98 ${
            nextStep && "hidden"
          }`}
        />
      </form>

      <form
        className={`${nextStep ? "flex flex-col gap-2" : "hidden"}`}
        onSubmit={handleSubmit}
      >
        <h2 className="mb-2 font-semibold text-2xl md:text-3xl mt-6">
          Select dates
        </h2>
        <div className="flex justify-around border-2 border-stone-600 bg-stone-300 rounded-xl text-xl">
          <div className="flex flex-col p-2 flex-1/2">
            <label htmlFor="pickup" className="font-semibold">
              <p className="flex place-items-center gap-2">
                Pick-up
                <IoIosArrowDown />
              </p>
            </label>
            <input
              type="datetime-local"
              name="Pick-up"
              className="cursor-pointer border-2 border-stone-400 rounded-lg p-2"
              min={new Date().toISOString().slice(0, 16)}
              onChange={(e) =>
                setRentPeriod({ ...rentPeriod, pickUp: e.target.value })
              }
              value={rentPeriod.pickUp}
              required
            />
          </div>
          <div className="flex flex-col p-2 flex-1/2">
            <label htmlFor="return" className="font-semibold">
              <p className="flex place-items-center gap-2">
                Drop-of <IoIosArrowDown />
              </p>
            </label>
            <input
              type="datetime-local"
              name="Return"
              className="cursor-pointer border-2 border-stone-400 rounded-lg p-2"
              min={rentPeriod.pickUp || new Date().toISOString().slice(0, 16)}
              onChange={(e) =>
                setRentPeriod({ ...rentPeriod, dropOf: e.target.value })
              }
              required
            />
          </div>
        </div>
        {completed ? (
          <div className="bg-green-400/60 rounded-lg p-2 text-center text-2xl mt-4">
            Check your email to confirm the order!
          </div>
        ) : (
          <input
            type="submit"
            value="RESERVE NOW"
            className="bg-orange-600 w-full text-white rounded-lg p-2 text-3xl font-semibold mt-4 cursor-pointer active:scale-98"
          />
        )}
      </form>
    </>
  );
}

export default Form;
