import axios from "axios";


export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e6099e85e54e4ef0bcd40c3f7de2d7bd",
  },
});
