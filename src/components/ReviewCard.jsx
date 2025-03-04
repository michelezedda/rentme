import React from "react";

function ReviewCard({ name, location, comment }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 text-white px-4 h-140 bg-black/50">
        <p className="text-4xl">{comment}</p>
        <div className="flex mt-6 items-end">
          <h4 className="text-4xl">
            {name.firstName} {name.lastName},
          </h4>
          <h3 className="ml-2 text-2xl">{location}</h3>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
