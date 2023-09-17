import axios from "axios";
import { API_PUBLISHER } from "./constant";

export default class publisherService {
  create = async (publisher) => {
    // console.log(publisher);
    return await axios.post(API_PUBLISHER, publisher);
  };
  getPublishes = async () => {
    return await axios.get(API_PUBLISHER);
  };
  deleteById = async (id) => {
    return await axios.delete(API_PUBLISHER+"/"+id);
  };
  getById = async (id) => {
    return await axios.get(API_PUBLISHER+"/"+id);
  };
  update = async (id, publisher) => {
    return await axios.patch(API_PUBLISHER+"/"+id, publisher);
  };
  status = async (id, publisher) => {
    return await axios.patch(API_PUBLISHER+"/"+id+"/status", publisher);
  };
}
