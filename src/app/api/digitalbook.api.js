import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

export const DIGITALBOOKAPI = {
  fetchAllBooks: () => axios.get(`${BASE_URL}/api/book/digitalbook/all`),
  saveDigitalBooks: (newBook) => axios.post(`${BASE_URL}/api/book/digitalbook`, newBook),
  //   deletePost: (postId) =>
  //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`),
  //   updatePost: (postId, updatedPost) =>
  //     axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost),
};
