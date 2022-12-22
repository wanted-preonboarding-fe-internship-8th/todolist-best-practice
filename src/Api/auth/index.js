import axios from '../axios';

export const signUp = (email, password) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    return await axios
      .post('/auth/signup', { email, password })
      .then((res) => {
        if (res.status !== 201) {
          reject(res.data);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const signIn = async (email, password) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    return await axios
      .post('/auth/signin', { email, password })
      .then((res) => {
        if (res.status !== 200) {
          reject(res.data);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
