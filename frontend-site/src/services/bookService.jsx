import axios from "axios";
import { API_BOOK } from "./constant";

export default class bookService {
  create = async (book) => {
    // console.log(": ", book);
    return await axios.post(API_BOOK, book);
  };
  getBooks = async () => {
    return await axios.get(API_BOOK);
  };
  deleteById = async (id) => {
    return await axios.delete(API_BOOK + "/" + id);
  };
  // getById = async (id) => {
  //   return await axios.get(API_BOOK + "/" + id);
  // };
  getBySlug = async (slug) => {
    return await axios.get(API_BOOK + "/" + `${slug}` + "/slug");
  };
  update = async (id, book) => {
    // let formData = new FormData();
    // formData.append("name", book.name);

    // if (book.imageFile[0].originFileObj) {
    //   formData.append("imageFile", book.imageFile[0].originFileObj);
    // }
    // formData.append("detail", book.detail);
    // formData.append("status", book.status);

    return await axios.patch(API_BOOK + "/" + id, book);
  };
  status = async (id, statusData) => {
    return await axios.patch(API_BOOK + `/${id}/status`, statusData);
  };
  static getPhotoUrl = (filename) => {
    return API_BOOK + "/images/" + filename;
  };
  static getImageUploadURL = (filename) => {
    return API_BOOK + "/images/one";
  };
  static deleteImage = async (fileName) => {
    await axios.delete(API_BOOK + "/images/" + fileName);
  };
}
