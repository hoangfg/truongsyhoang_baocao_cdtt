import axios from "axios";
import { API_SLIDER } from "./constant";

export default class sliderService {
  create = async (slider) => {
    console.log("dataSer", slider);
    let formData = new FormData();
    formData.append("name", slider.name);
    formData.append("link", slider.link);
    formData.append("position", slider.position);

    formData.append("status", slider.status);
    if (slider.idToUseForSortOrder !== undefined) {
      formData.append("idToUseForSortOrder", slider.idToUseForSortOrder);
    } else {
      formData.append("idToUseForSortOrder", 0); // Set to 0 if no parent is selected
    }
    if (slider.imageFile[0].originFileObj) {
      formData.append("imageFile", slider.imageFile[0].originFileObj);
    }

    return await axios.post(API_SLIDER, formData);
  };
  getSliders = async () => {
    return await axios.get(API_SLIDER);
  };
  deleteById = async (id) => {
    return await axios.delete(API_SLIDER + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_SLIDER + "/" + id);
  };
  update = async (id, slider) => {
    let formData = new FormData();
    formData.append("name", slider.name);
    formData.append("link", slider.link);
    formData.append("position", slider.position);

    formData.append("status", slider.status);
    if (slider.idToUseForSortOrder !== undefined) {
      formData.append("idToUseForSortOrder", slider.idToUseForSortOrder);
    } else {
      formData.append("idToUseForSortOrder", 0); // Set to 0 if no parent is selected
    }
    if (slider.imageFile[0].originFileObj) {
      formData.append("imageFile", slider.imageFile[0].originFileObj);
    }

    return await axios.patch(API_SLIDER + "/" + id, formData);
  };
  status = async (id, slider) => {
    return await axios.patch(API_SLIDER + "/" + id + "/status", slider);
  };
  static getPhotoUrl = (filename) => {
    return API_SLIDER + "/image/" + filename;
  };
}
