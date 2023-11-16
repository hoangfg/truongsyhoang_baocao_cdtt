import axios from "axios";
import { API_ORDER } from "./constant";

export default class orderService {
  create = async (order) => {
    return await axios.post(API_ORDER, order);
  };
  getOrders = async () => {
    return await axios.get(API_ORDER);
  };
  deleteById = async (id) => {
    return await axios.delete(API_ORDER + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_ORDER + "/" + id);
  };
  update = async (id, order) => {
    // let formData = new FormData();
    // formData.append("name", order.name);

    // if (order.imageFile[0].originFileObj) {
    //   formData.append("imageFile", order.imageFile[0].originFileObj);
    // }
    // formData.append("detail", order.detail);
    // formData.append("status", order.status);
    console.log("up", order);
    return await axios.patch(API_ORDER + "/" + id, order);
  };
  status = async (id, statusData) => {
    return await axios.patch(API_ORDER + `/${id}/status`, statusData);
  };
}
