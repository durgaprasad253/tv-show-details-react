import { MINI_IMAGE_BASE_URL } from "../../config";
import s from "./style.module.css";

const TITLE_CHAR_LENGTH = 20;

export function RecommendationListItem({ tvShow, onclick }) {
  function onClick() {
    onclick(tvShow);
  }
  return (
    <div onClick={onClick} className={s.container}>
      <img
        className={s.image}
        src={MINI_IMAGE_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
      />
      <div className={s.title}>
        {tvShow.name.length > TITLE_CHAR_LENGTH
          ? tvShow.name.slice(0, TITLE_CHAR_LENGTH) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
