import axios from "axios";

const base_url = "http://localhost:5005/api";

export const $api = axios.create({ baseURL: base_url });

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ???
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

$api.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config;

    if (
      err.response &&
      err.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        localStorage.removeItem("token");
        // window.location.href = "/";
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return Promise.reject(err);
  }
);

export const socketURL = "http://ichgram:5005";

// Докераная вариация

// import axios from "axios";

// const base_url = "http://ichgram:5005/api";

// export const $api = axios.create({ baseURL: base_url });

// $api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // ???
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

// export const socketURL = "http://ichgram:5005";
