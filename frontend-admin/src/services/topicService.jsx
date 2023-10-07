import axios from "axios";
import { API_TOPIC } from "./constant";
export default class topicService {
  create = async (Topics) => {
    console.log("s", Topics);
    let formData = new FormData();
    formData.append("name", Topics.name);
    formData.append("metakey", Topics.metakey);
    formData.append("metadesc", Topics.metadesc);
    formData.append("status", Topics.status);
    if (Topics.parentId) {
      formData.append("parentId", Topics.parentId);
    } else {
      formData.append("parentId", 0); // Set to 0 if no parent is selected
    }
  

    return await axios.post(API_TOPIC, formData);
  };
  getTopics = async () => {
    return await axios.get(API_TOPIC);
  };
  deleteById = async (id) => {
    return await axios.delete(API_TOPIC + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_TOPIC + "/" + id);
  };
  update = async (id, bookTopics) => {
    let formData = new FormData();
    formData.append("name", bookTopics.name);
    formData.append("detail", bookTopics.detail);
    formData.append("status", bookTopics.status);
    if (bookTopics.parentId !== undefined) {
      formData.append("parentId", bookTopics.parentId);
    }
    return await axios.patch(API_TOPIC + "/" + id, formData);
  };
  status = async (id, bookTopics) => {
    return await axios.patch(API_TOPIC + "/" + id + "/status", bookTopics);
  };
}
