import axios from "axios";
import { API_AUTHOR } from "./constant";

export default class authorService {
  create = async (author) => {
    console.log(author);
    let formData = new FormData();
    formData.append("name", author.name);
    if (author.imageFile[0].originFileObj) {
      formData.append("imageFile", author.imageFile[0].originFileObj);
    }
    return await axios.post(API_AUTHOR, formData);
  };
  getAuthors = async () => {
    return await axios.get(API_AUTHOR);
  };
  deleteById = async (id) => {
    return await axios.delete(API_AUTHOR + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_AUTHOR + "/" + id);
  };
  update = async (id, author) => {
    return await axios.patch(API_AUTHOR + "/" + id, author);
  };
  status = async (id, author) => {
    return await axios.patch(API_AUTHOR + "/" + id + "/status", author);
  };
}
