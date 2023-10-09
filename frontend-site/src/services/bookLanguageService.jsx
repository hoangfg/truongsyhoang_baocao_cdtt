import axios from "axios";
import { API_LANGUAGES } from "./constant";

export default class bookLanguageService {
  create = async (bookLanguage) => {
    let formData = new FormData();
    formData.append("code", bookLanguage.code);
    formData.append("name", bookLanguage.name);
    return await axios.post(API_LANGUAGES, formData);
  };
  getLanguage = async () => {
    return await axios.get(API_LANGUAGES);
  };
  deleteById = async (id) => {
    return await axios.delete(API_LANGUAGES + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_LANGUAGES + "/" + id);
  };
  update = async (id, bookLanguage) => {
    let formData = new FormData();
    formData.append("code", bookLanguage.code);
    formData.append("name", bookLanguage.name);

    return await axios.patch(API_LANGUAGES + "/" + id, formData);
  };
  status = async (id, bookLanguage) => {
    return await axios.patch(
      API_LANGUAGES + "/" + id + "/status",
      bookLanguage
    );
  };
}
