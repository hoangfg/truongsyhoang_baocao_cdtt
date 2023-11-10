import axios from "axios";
import { API_POST } from "./constant";

export default class postService {
  getPosts = async () => {
    return await axios.get(API_POST);
  };
  
  getBySlug = async (slug) => {
    console.log("API call made with slug:", slug);
    return await axios.get(API_POST + "/slug/" + `${slug}`);
  };

  getById = async (id) => {
    return await axios.get(API_POST + "/" + id);
  };

  static getPhotoUrl = (filename) => {
    return API_POST + "/image/" + filename;
  };
}
