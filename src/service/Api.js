import axios from "axios";
import Cookie from "js-cookie";
import { Constants, Urls } from "../utils/constants";
function requestProcess(request) {
  if (request.url && request.url.indexOf("http") === -1) {
    request.url = Urls.BASE_URL + request.url;
  }
  if (!request.noAuth)
    request.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookie.get(Constants.JWT)}`,
      ...request.headers
    }
  for (const key in request.params) {
    if (request.params[key] === "" || request.params[key] === undefined) {
      // remove key of array
      delete request.params[key];
    }
  }
  return request;
}

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export const get = (request) => {
  return axios(requestProcess({ ...request, method: "GET" }));
}

export const post = (request) => {
  return axios(requestProcess({ ...request, method: "POST" }));
}

export const put = (request) => {
  return axios(requestProcess({ ...request, method: "PUT" }));
}

export const del = (request) => {
  return axios(requestProcess({ ...request, method: "DELETE" }));
}