import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

export const PAPERAPI = {
  fetchAllPapers: () => axios.get(`${BASE_URL}/api/paper/all`),
  savePastPaper: (newPastPaper) => axios.post(`${BASE_URL}/api/paper/`, newPastPaper),
  //   deletePost: (postId) =>
  //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`),
  //   updatePost: (postId, updatedPost) =>
  //     axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost),
};
