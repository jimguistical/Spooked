import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getUserByUserId = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/id/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserByFirebaseId = (firebaseId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/fbid/${firebaseId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createNewUser = (userInfo) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users`, userInfo)
  // .then(() => getUserByFirebaseId(userInfo.firebaseId)).then((resp) => resolve(resp))
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  createNewUser, getUserByFirebaseId, getUserByUserId
};
