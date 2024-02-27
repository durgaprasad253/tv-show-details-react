import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowApi {
  static async fetchPopular() {
    const responce = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return responce.data.results;
    // return FAKE_POPULARS;
  }

  static async fetchRecommendation(id) {
    const responce = await axios.get(
      `${BASE_URL}tv/${id}/recommendations${API_KEY_PARAM}`
    );
    return responce.data.results;
    // return FAKE_RECOMMENDATIONS;
  }

  static async search(text) {
    const responce = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${text}`
    );
    return responce.data.results;
  }
}
