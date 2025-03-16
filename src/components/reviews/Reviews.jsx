import reviews from "../../data/reviews";
import ReviewCard from "./ReviewCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Reviews() {
  return (
    <>
      <div className="bg-[url('/media/reviewsbg.png')] bg-[70%_1%] bg-cover bg-no-repeat mt-20">
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
