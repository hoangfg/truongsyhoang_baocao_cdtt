import axios from "axios";
import { API_GENRES } from "./constant";

export default class bookGenresService {
  create = async (bookGenres) => {
    let formData = new FormData();
    formData.append("name", bookGenres.name);
    formData.append("detail", bookGenres.detail);
    formData.append("status", bookGenres.status);

    return await axios.post(API_GENRES, formData);
  };
  getGenres = async () => {
    return await axios.get(API_GENRES);
  };
  deleteById = async (id) => {
    return await axios.delete(API_GENRES + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_GENRES + "/" + id);
  };
  update = async (id, bookGenres) => {
    let formData = new FormData();
    formData.append("name", bookGenres.name);
    formData.append("detail", bookGenres.detail);
    formData.append("status", bookGenres.status);

    return await axios.patch(API_GENRES + "/" + id, formData);
  };
  status = async (id, bookGenres) => {
    return await axios.patch(API_GENRES + "/" + id + "/status", bookGenres);
  };
}
