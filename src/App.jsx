import { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowApi } from "./api/tv-show";
import { IMAGE_BASE_URL } from "./config";
import { TvShowDetail } from "./components/TvShowDetail/TvShowDetail";
import { Logo } from "./components/Logo/Logo";
import img from "./assets/icons8-tv-60.png";
import { RecommendationList } from "./components/RecommendationList/RecommendationList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([]);

  async function fetchPopular() {
    try {
      const popularTvShowList = await TVShowApi.fetchPopular();
      if (popularTvShowList.length > 0) {
        setCurrentTvShow(popularTvShowList[0]);
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  }

  async function search(text) {
    try {
      const searchResult = await TVShowApi.search(text);
      if (searchResult.length > 0) setCurrentTvShow(searchResult[0]);
    } catch (error) {
      alert("Something Went Wrong");
    }
  }

  async function fetchRecommendations() {
    try {
      const recommendations = await TVShowApi.fetchRecommendation(
        currentTvShow.id
      );
      setRecommendationsList(recommendations);
    } catch (error) {
      alert("Something Went Wrong");
    }
  }
  useEffect(() => {
    fetchPopular();
  }, []);
  useEffect(() => {
    if (currentTvShow) {
      // eslint-disable-next-line
      fetchRecommendations();
    }
  }, [currentTvShow]);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${IMAGE_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title={"WhatToWatch"}
              subtitle={"Find a show you may like"}
              img={img}
            ></Logo>
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={search}></SearchBar>
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        <RecommendationList
          recommendationList={recommendationsList}
          onclick={setCurrentTvShow}
        ></RecommendationList>
      </div>
    </div>
  );
}
