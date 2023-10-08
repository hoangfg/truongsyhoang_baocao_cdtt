import axios from "axios";
import { API_PAGE } from "./constant";

export default class pageService {
  create = async (page) => {
    console.log("ps", page);
    let formData = new FormData();
    formData.append("title", page.title);

    if (page.imageFile[0].originFileObj) {
      formData.append("imageFile", page.imageFile[0].originFileObj);
    }
    formData.append("detail", page.detail);
    formData.append("metakey", page.metakey);
    formData.append("metadesc", page.metadesc);
    formData.append("status", page.status);
   
    
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return await axios.post(API_PAGE, formData);
  };
  getPages = async () => {
    return await axios.get(API_PAGE);
  };
  deleteById = async (id) => {
    return await axios.delete(API_PAGE + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_PAGE + "/" + id);
  };
  update = async (id, page) => {
    let formData = new FormData();
    formData.append("title", page.title);

    if (page.imageFile[0].originFileObj) {
      formData.append("imageFile", page.imageFile[0].originFileObj);
    }
    formData.append("detail", page.detail);
    formData.append("metakey", page.metakey);
    formData.append("metadesc", page.metadesc);
    formData.append("status", page.status);
   
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return await axios.patch(API_PAGE + "/" + id, formData);
  };
  status = async (id, page) => {
    return await axios.patch(API_PAGE + "/" + id + "/status", page);
  };
  static getPhotoUrl = (filename) => {
    return API_PAGE + "/image/" + filename;
  };
}
