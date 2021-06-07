import axios from "axios";

const key = "4183e90c92792fea48e429813886322aa0541003";

export const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
});
