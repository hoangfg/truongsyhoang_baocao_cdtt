import axios from "axios";
import { API_MENU } from "./constant";

export default class menuService {
  create = async (menu) => {
    // console.log(menu);
    return await axios.post(API_MENU, menu);
  };
  getMenus = async () => {
    return await axios.get(API_MENU);
  };
  deleteById = async (id) => {
    return await axios.delete(API_MENU + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_MENU + "/" + id);
  };
  update = async (id, menu) => {
    let formData = new FormData();
    formData.append("name", menu.name);
    formData.append("link", menu.link);
    formData.append("position", menu.position);
    formData.append("status", menu.status);
    if (menu.idToUseForSortOrder !== undefined) {
      formData.append("idToUseForSortOrder", menu.idToUseForSortOrder);
    } else {
      formData.append("idToUseForSortOrder", 0); // Set to 0 if no parent is selected
    }
    if (menu.parent_id !== undefined) {
      formData.append("parent_id", menu.parent_id);
    } else {
      formData.append("idToUseForSortOrder", 0); // Set to 0 if no parent is selected
    }

    // console.log("se", menu);
    return await axios.patch(API_MENU + "/" + id, formData);
  };
  status = async (id, menu) => {
    return await axios.patch(API_MENU + "/" + id + "/status", menu);
  };
}
