function ReviewCard({ name, location, comment }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white px-4 md:px-25 2xl:px-80 3xl:px-165 h-150 bg-black/50">
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
