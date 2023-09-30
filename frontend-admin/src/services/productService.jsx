import axios from "axios";
import { API_BOOK } from "./constant";

export default class bookService {
  create = async (book) => {
    let formData = new FormData();
    formData.append("name", book.name);

    if (book.imageFile[0].originFileObj) {
      formData.append("imageFile", book.imageFile[0].originFileObj);
      formData.append("detail", book.detail);
      formData.append("status", book.status);
    }

    return await axios.post(API_BOOK, formData);
  };
  getBooks = async () => {
    return await axios.get(API_BOOK);
  };
  deleteById = async (id) => {
    return await axios.delete(API_BOOK + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_BOOK + "/" + id);
  };
  update = async (id, book) => {
    let formData = new FormData();
    formData.append("name", book.name);

    if (book.imageFile[0].originFileObj) {
      formData.append("imageFile", book.imageFile[0].originFileObj);
    }
    formData.append("detail", book.detail);
    formData.append("status", book.status);

    return await axios.patch(API_BOOK + "/" + id, formData);
  };
  status = async (id, book) => {
    return await axios.patch(API_BOOK + "/" + id + "/status", book);
  };
  static getPhotoUrl = (filename) => {
    return API_BOOK + "/image/" + filename;
  };
}
