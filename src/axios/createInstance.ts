import axios, { AxiosInstance } from "axios";
export const CreateInstance = () => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEV_API_URL
      : process.env.REACT_APP_PRODUCTION_API_URL;
  const client: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: { "Content-Type": "application/json" },
  });

  client.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV === "development") {
        console.log(response);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return client;
};
