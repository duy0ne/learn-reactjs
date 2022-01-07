import { post } from '../../api/AxiosClient';

const URL_REGISTER = 'auth/local/register';
const URL_LOGIN = 'auth/local';

export const registerUser = (data) => {
  const dataConvert = {};
  dataConvert['username'] = data.emaill;
  dataConvert['email'] = data.emaill;
  dataConvert['password'] = data.password;
  dataConvert['fullName'] = data.fullName;

  return post(URL_REGISTER, dataConvert)
    .then((res) => { return Promise.resolve(res) })
    .catch((error) => { return Promise.reject(error) })
}

export const loginUser = (data) => {
  const dataConvert = {};
  dataConvert['identifier'] = data.username;
  dataConvert['password'] = data.password;

  return post(URL_LOGIN, dataConvert)
    .then((res) => { return Promise.resolve(res) })
    .catch((error) => { return Promise.reject(error) })
}
