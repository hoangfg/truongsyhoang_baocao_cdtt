import axios from "axios";
import { API_POST } from "./constant";

export default class postService {
  create = async (post) => {
    console.log("ps", post);
    let formData = new FormData();
    formData.append("title", post.title);

    if (post.imageFile[0].originFileObj) {
      formData.append("imageFile", post.imageFile[0].originFileObj);
    }
    formData.append("detail", post.detail);
    formData.append("metakey", post.metakey);
    formData.append("metadesc", post.metadesc);
    formData.append("status", post.status);
    console.log("topic", post.topicId);
    if (post.topicId) {
      formData.append("topicId", post.topicId);
    } else {
      formData.append("topicId", 0); // Set to 0 if no parent is selected
    }
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return await axios.post(API_POST, formData);
  };
  getPosts = async () => {
    return await axios.get(API_POST);
  };
  deleteById = async (id) => {
    return await axios.delete(API_POST + "/" + id);
  };
  getById = async (id) => {
    return await axios.get(API_POST + "/" + id);
  };
  update = async (id, post) => {
    let formData = new FormData();
    formData.append("title", post.title);

    if (post.imageFile[0].originFileObj) {
      formData.append("imageFile", post.imageFile[0].originFileObj);
    }
    formData.append("detail", post.detail);
    formData.append("metakey", post.metakey);
    formData.append("metadesc", post.metadesc);
    formData.append("status", post.status);
    console.log("topic", post.topicId);
    if (post.topicId) {
      formData.append("topicId", post.topicId);
    } else {
      formData.append("topicId", 0); // Set to 0 if no parent is selected
    }
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return await axios.patch(API_POST + "/" + id, formData);
  };
  status = async (id, post) => {
    return await axios.patch(API_POST + "/" + id + "/status", post);
  };
  static getPhotoUrl = (filename) => {
    return API_POST + "/image/" + filename;
  };
}
