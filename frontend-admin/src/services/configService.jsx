import axios from "axios";
import { API_CONFIG } from "./constant";

export default class configService {
  create = async (config) => {
    console.log("cf", config);
    let formData = new FormData();
    formData.append("siteName", config.siteName);
    formData.append("metakey", config.metakey);
    formData.append("metadesc", config.metadesc);
    formData.append("author", config.author);
    formData.append("phone", config.phone);
    formData.append("email", config.email);
    formData.append("facebook", config.facebook);
    formData.append("twitter", config.twitter);
    formData.append("youtube", config.youtube);
    formData.append("googleplus", config.googleplus);
    formData.append("status", config.status);
    if (config.imageFile[0].originFileObj) {
      formData.append("imageFile", config.imageFile[0].originFileObj);
    }

    return await axios.post(API_CONFIG, formData);
  };
  getConfigs = async () => {
    return await axios.get(API_CONFIG);
  };
  deleteById = async (id) => {
    return await axios.delete(API_CONFIG + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_CONFIG + "/" + id);
  };
  update = async (id, config) => {
    let formData = new FormData();
    formData.append("siteName", config.siteName);
    formData.append("metakey", config.metakey);
    formData.append("metadesc", config.metadesc);
    formData.append("author", config.author);
    formData.append("phone", config.phone);
    formData.append("email", config.email);
    formData.append("facebook", config.facebook);
    formData.append("twitter", config.twitter);
    formData.append("youtube", config.youtube);
    formData.append("googleplus", config.googleplus);
    formData.append("status", config.status);
    if (config.imageFile[0].originFileObj) {
      formData.append("imageFile", config.imageFile[0].originFileObj);
    }

    return await axios.patch(API_CONFIG + "/" + id, formData);
  };
  status = async (id, config) => {
    return await axios.patch(API_CONFIG + "/" + id + "/status", config);
  };
  static getPhotoUrl = (filename) => {
    return API_CONFIG + "/image/" + filename;
  };
}
