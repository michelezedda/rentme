import { CarFront, Earth, HandHeart } from "lucide-react";

function Hero() {
  return (
    <>
      <div className="flex flex-col mt-15">
        <div className="place-items-center">
          <Earth size={35} />
          <h3 className="text-4xl font-semibold">GLOBAL REACH</h3>
          <p className="text-2xl">2,000+ SIXT stations in over 105 countries</p>
        </div>
        <div className="place-items-center mt-10">
          <CarFront size={35} />
          <h3 className="text-4xl font-semibold">DISTINCTIVE FLEET</h3>
          <p className="text-2xl">From high-end convertibles to premium SUVs</p>
        </div>
        <div className="place-items-center mt-10">
          <HandHeart size={35} />
          <h3 className="text-4xl font-semibold">EXCEPTIONAL SERVICE</h3>
          <p className="text-2xl">Stress-free, trustworthy, no hidden costs</p>
        </div>
      </div>
      <div className="mt-15 mx-4">
        <div className="relative h-150 rounded-4xl bg-[url('../public/media/hero1.png')] bg-center after:absolute after:inset-0 after:bg-black/50 after:rounded-4xl text-white cursor-pointer">
          <div className="absolute bottom-30 left-10 z-1 border-white border-2 text-center p-2 -skew-x-10">
            <span className="text-4xl font font-bold">
              15% <br /> DISCOUNT
            </span>
          </div>
          <h3 className="absolute bottom-18 left-8 font-semibold z-1 text-4xl">
            LUXURY AND LOOKS FOR LESS
          </h3>
          <p className="absolute bottom-12 left-8 z-1 text-xl">
            Book now and save up to 15% on luxury vehicles
          </p>
        </div>
        <div className="relative h-150 rounded-4xl bg-[url('../public/media/hero2.png')] bg-center after:absolute after:inset-0 after:bg-black/50 after:rounded-4xl text-white my-6 cursor-pointer">
          <div className="absolute bottom-30 left-10 z-1 border-white border-2 text-center p-2 -skew-x-10">
            <span className="text-4xl font font-bold">
              from $789 <br /> /MONTH
            </span>
          </div>
          <h3 className="absolute bottom-18 left-8 font-semibold z-1 text-4xl">
            STOP OWNING, START SUBSCRIBING
          </h3>
          <p className="absolute bottom-12 left-8 z-1 text-xl">
            No hassle, no long-term commitment. Subscribe and drive flexibly!
          </p>
        </div>
        <div className="relative h-150 rounded-4xl bg-[url('../public/media/hero3.png')] bg-center after:absolute after:inset-0 after:bg-black/50 after:rounded-4xl text-white my-6 cursor-pointer">
          <div className="absolute bottom-40 left-10 z-1 border-white border-2 text-center p-2 -skew-x-10">
            <span className="text-4xl font font-bold">
              20% <br /> DISCOUNT
            </span>
          </div>
          <h3 className="absolute bottom-18 left-8 font-semibold z-1 text-4xl">
            RENTAL CARS FOR BUSINESS CUSTOMERS
          </h3>
          <p className="absolute bottom-12 left-8 z-1 text-xl">
            Take advantage of benefits and preferential rates.
          </p>
        </div>
        <div className="relative h-150 rounded-4xl bg-[url('../public/media/hero4.png')] bg-center after:absolute after:inset-0 after:bg-black/50 after:rounded-4xl text-white cursor-pointer">
          <div className="absolute bottom-40 left-10 z-1 border-white border-2 text-center p-2 -skew-x-10">
            <span className="text-4xl font font-bold">
              15% <br /> DISCOUNT
            </span>
          </div>
          <h3 className="absolute bottom-18 left-8 font-semibold z-1 text-4xl">
            YOUR AIRPORT TRANSFERS WITH RENTME RIDE
          </h3>
          <p className="absolute bottom-12 left-8 z-1 text-xl">
            Choose RentMe for more comfort.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
