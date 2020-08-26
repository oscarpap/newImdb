import axios from "axios";

export class httpService {
  public async getMovieData() {
    const request = await axios.get("https://api.example.com/items");
    return request;
  }
}

export default httpService;
