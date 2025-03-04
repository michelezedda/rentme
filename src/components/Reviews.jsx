import reviews from "../data/reviews";
import ReviewCard from "./ReviewCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Reviews() {
  return (
    <>
      <div className="mt-15 bg-[url('../public/media/reviewsbg.png')] bg-[70%_1%] h-150">
        <Splide
          options={{
            perMove: 1,
            gap: "1rem",
            pagination: true,
            arrows: false,
            type: "loop",
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <ReviewCard {...review} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default Reviews;
