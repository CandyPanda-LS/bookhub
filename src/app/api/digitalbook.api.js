import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

const requestConfigJson = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
    'Content-type': 'application/json',
  },
};

export const DIGITALBOOKAPI = {
  fetchAllBooks: () => axios.get(`${BASE_URL}/api/book/digitalbook/all`),
  saveDigitalBooks: (newBook) =>
    axios.post(`${BASE_URL}/api/book/digitalbook`, newBook, requestConfigJson),
  deleteDigitalBook: (bookId) =>
    axios.post(`${BASE_URL}/api/book/digitalbook/delete/${bookId}`, null, requestConfigJson),
};
