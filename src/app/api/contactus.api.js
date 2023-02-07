import axios from "axios";

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

export const CONTACTUSAPI = {
    saveMessage: (newMessage) =>
      axios.post(`${BASE_URL}/api/message/`, newMessage),
 
};
