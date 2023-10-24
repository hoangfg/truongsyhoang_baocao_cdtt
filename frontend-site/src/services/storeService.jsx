import axios from "axios";
import { API_STORE } from "./constant";
export default class storeService {
  create = async (Store) => {
    console.log("s", Store);
    // let formData = new FormData();
    // formData.append("typeName", Store.typeName);
    // formData.append("metakey", Store.metakey);
    // formData.append("metadesc", Store.metadesc);
    // formData.append("status", Store.status);
    // if (Store.parentId) {
    //   formData.append("parentId", Store.parentId);
    // } else {
    //   formData.append("parentId", 0); // Set to 0 if no parent is selected
    // }

    return await axios.post(API_STORE, Store);
  };
  getStore = async () => {
    return await axios.get(API_STORE);
  };
  deleteById = async (id) => {
    return await axios.delete(API_STORE + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_STORE + "/" + id);
  };
  update = async (id, Store) => {
    // let formData = new FormData();
    // formData.append("typeName", Store.typeName);
    // formData.append("bookId", Store.bookId);
    // formData.append("quanlity", Store.quanlity);
    // formData.append("entryPrice", Store.entryPrice);
    // formData.append("priceSale", Store.priceSale);
    // if (Store.beginSale) {
    //   formData.append("beginSale", Store.beginSale);
    // }
    // if (Store.endSale) {
    //   formData.append("endSale", Store.endSale);
    // }

    // for (let key of formData.keys()) {
    //   // Lấy tên trường
    //   console.log(key + ": " + formData.get(key));
    //   console.log(key + ": " + formData.get(key));

    //   // Lấy giá trị của trường
    // }
    // // if (Store.parentId) {
    // //   formData.append("parentId", Store.parentId);
    // // } else {
    // //   formData.append("parentId", 0); // Set to 0 if no parent is selected
    // // }
    console.log("s", Store);
    console.log("s_id", id);
    return await axios.patch(API_STORE + "/" + id, Store);
  };
  status = async (id, Store) => {
    return await axios.patch(API_STORE + "/" + id + "/status", Store);
  };
}
