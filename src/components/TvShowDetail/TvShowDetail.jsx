import { Rating } from "../Rating/Rating";
import s from "./style.module.css";
export function TvShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <Rating rating={rating}></Rating>
        <div className={s.rating}>{rating.toFixed(2)}/5</div>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
