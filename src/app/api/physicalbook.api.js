import axios from "axios";

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

export const PHYSICALBOOKAPI = {
  fetchAllPhysicalBooks: () =>
    axios.get(`${BASE_URL}/api/book/physicalbook/all`),
  donatePhysicalBook: (newBook) =>
    axios.post(`${BASE_URL}/api/book/donatebook`, newBook),
  requestPhysicalBook: (bookId) =>
    axios.put(`${BASE_URL}/api/book/physicalbook/borrowrequest/${bookId}`),
  approvePhysicalBookRequest: (bookId) =>
    axios.put(`${BASE_URL}/api/book/physicalbook/approve/${bookId}`),
  //   deletePost: (postId) =>
  //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`),
};
