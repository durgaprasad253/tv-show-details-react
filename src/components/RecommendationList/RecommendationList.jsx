import { RecommendationListItem } from "../RecommednationListItem/RecommendationListItem";
import s from "./style.module.css";
export function RecommendationList({ recommendationList, onclick }) {
  return (
    <>
      <div className={s.title}>You will Probably like : </div>
      <div className={s.list}>
        {recommendationList.map((tvShow) => {
          return (
            <RecommendationListItem
              key={tvShow.name}
              tvShow={tvShow}
              onclick={onclick}
            ></RecommendationListItem>
          );
        })}
      </div>
    </>
  );
}
