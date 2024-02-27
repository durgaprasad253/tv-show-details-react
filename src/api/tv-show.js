import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";
import { BASE_URL } from "../config";

export class TVShowApi {
  static async fetchPopular() {
    const responce = await axios.get(
      `${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return responce.data.results;
    // return FAKE_POPULARS;
  }

  static async fetchRecommendation(id) {
    const responce = await axios.get(
      `${BASE_URL}tv/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return responce.data.results;
    // return FAKE_RECOMMENDATIONS;
  }

  static async search(text) {
    const responce = await axios.get(
      `${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`
    );
    return responce.data.results;
  }
}
