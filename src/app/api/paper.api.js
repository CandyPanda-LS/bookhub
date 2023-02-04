import axios from "axios";

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

export const PAPERAPI = {
  fetchAllPapers: () => axios.get(`${BASE_URL}/api/paper/all`),
  //   savePost: (newPost) =>
  //     axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost),
  //   deletePost: (postId) =>
  //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`),
  //   updatePost: (postId, updatedPost) =>
  //     axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost),
};
