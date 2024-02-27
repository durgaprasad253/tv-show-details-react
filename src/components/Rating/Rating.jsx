import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
import s from "./style.module.css";
export function Rating({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 < 0.5 ? 0 : 1;
  const emptyStars = 5 - fullStars - halfStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarFill key={"star-fill" + i}></StarFill>);
  }

  if (halfStars === 1) stars.push(<StarHalf key="star-half" />);

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarEmpty key={"star-empty" + i}></StarEmpty>);
  }
  return <div className={s.container}>{stars}</div>;
}
