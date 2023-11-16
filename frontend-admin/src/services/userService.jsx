import axios from "axios";
import { API_USER } from "./constant";

export default class userService {
  create = async (user) => {
    let formData = new FormData();
    formData.append("name", user.name);

    formData.append("username", user.username);
    formData.append("password", user.password);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("address", user.address);
    formData.append("gender", user.gender);
    formData.append("status", user.status);
    // formData.append("roleId", user.roleId);
    if (user.roleId) {
      formData.append("roleId", user.roleId);
    } else {
      formData.append("roleId", 0);
    }
    if (user.imageFile[0].originFileObj) {
      formData.append("imageFile", user.imageFile[0].originFileObj);
    }
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });

    // // Log the object
    // console.log("FormData Object:", formDataObject);
    return await axios.post(API_USER, formData);
  };
  getUsers = async () => {
    return await axios.get(API_USER);
  };
  deleteById = async (id) => {
    return await axios.delete(API_USER + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_USER + "/" + id);
  };
  update = async (id, user) => {
    let formData = new FormData();
    formData.append("name", user.name);

    // formData.append("username", user.username);
    formData.append("password", user.password);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("address", user.address);
    formData.append("gender", user.gender);
    formData.append("status", user.status);
    // formData.append("roleId", user.roleId);
    if (user.roleId) {
      formData.append("roleId", user.roleId);
    } else {
      formData.append("roleId", 0); // Set to 0 if no parent is selected
    }
    if (user.imageFile[0].originFileObj) {
      formData.append("imageFile", user.imageFile[0].originFileObj);
    }

    return await axios.patch(API_USER + "/" + id, formData);
  };
  status = async (id, user) => {
    return await axios.patch(API_USER + "/" + id + "/status", user);
  };
  static getPhotoUrl = (filename) => {
    return API_USER + "/image/" + filename;
  };
}
