import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL || "https://toughland.com:9095/api",
})

export const postForm = (values) => {
  return instance.post('/validate', values, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
}