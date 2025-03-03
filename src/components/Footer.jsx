import React from "react";

function Footer() {
  return (
    <>
      <div className="text-white bg-black p-8 text-center mt-20">
        {new Date().getFullYear()} &#169; RentMe
      </div>
    </>
  );
}

export default Footer;
