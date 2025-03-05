import React from "react";

function Header() {
  return (
    <>
      <div className="bg-[url('../public/media/header-mobile.png')] md:bg-[url('../public/media/header-desktop.png')] bg-cover bg-center bg-no-repeat h-185 md:h-120"></div>
      <div className="flex flex-col items-center bg-orange-600 text-black py-8">
        <h1 className="text-center text-7xl mb-4 font-bold">
          DON'T RENT A CAR. <br /> RENT THE CAR.
        </h1>
        <p className="font-semibold text-2xl">
          Premium car rental at affordable rates. Worldwide.
        </p>
      </div>
    </>
  );
}

export default Header;
