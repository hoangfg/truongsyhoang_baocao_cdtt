import axios from "axios";
import { API_ROLE } from "./constant";

export default class roleService {
  create = async (role) => {
    return await axios.post(API_ROLE, role);
  };
  getRoles = async () => {
    return await axios.get(API_ROLE);
  };
  deleteById = async (id) => {
    return await axios.delete(API_ROLE + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_ROLE + "/" + id);
  };
  update = async (id, role) => {
    return await axios.patch(API_ROLE + "/" + id, role);
  };
}
