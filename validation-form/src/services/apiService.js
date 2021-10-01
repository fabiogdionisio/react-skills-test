import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
})

export const postForm = (values) => {
  return instance.post('/validate', values, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
}