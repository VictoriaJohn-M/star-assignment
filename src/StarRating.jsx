import { range } from "./util";

function StarRating({ rating }) {
  return (
    <div className="star-wrapper">
      {range(rating).map((_, index) => (
        <img
          key={index}
          alt=""
          className="gold-star"
          src="/star.svg"
        />
      ))}
    </div>
  );
}

export default StarRating;
