import axios from "axios";
import queryString from 'query-string';
import * as Urls from '../../src/utils/constants/Urls'

//CASE 1

const axiosClient = axios.create({
  baseURL: Urls.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: params => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  // Handle token here ...
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(undefined, function (error) {
  console.log(error);
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export const get = (path, params) => {
  const config = {
    params: params
  }
  return axiosClient.get(path, config);
}

export const post = (path, data, params) => {
  const config = {
    params: params
  }
  return axiosClient.post(path, data, config);
}

export const put = (path, data, params) => {
  const config = {
    params: params
  }
  return axiosClient.put(path, data, config);
}

export const del = (path, params) => {
  const config = {
    params: params
  }
  return axiosClient.delete(path, config);
}

//CASE 2

// function requestProcess(request: any) {
//   if (request.url && request.url.indexOf("http") === -1) {
//     request.url = 'localhost:8000' + request.url;
//   }
//   request.headers = {
//     "Content-Type": "application/json",
//   }
//   return request;
// }

// // Add a response interceptor
// axios.interceptors.response.use(undefined, function (error) {
//   console.log(error);
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });

// export const get = (request: object) => {
//   return axios(requestProcess({ ...request, method: "GET" }));
// }

// export const post = (request: object) => {
//   return axios(requestProcess({ ...request, method: "POST" }));
// }

// export const put = (request: object) => {
//   return axios(requestProcess({ ...request, method: "PUT" }));
// }

// export const del = (request: object) => {
//   return axios(requestProcess({ ...request, method: "DELETE" }));
// }