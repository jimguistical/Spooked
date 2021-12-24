import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getWatchListMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/watchlist`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const getWatchListMovieById = (id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/watchlist/${id}`)
    .then((resp) => resolve(resp))
    .catch((error) => reject(error));
});

const addMovieToWatchList = (watchListmovie) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/watchlist`, watchListmovie)
    .then(() => getWatchListMovies(resolve))
    .catch((error) => reject(error));
});

const removeMovieFromWatchList = (id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/watchlist/${id}`)
    .then(() => getWatchListMovies(resolve))
    .catch((error) => reject(error));
});

export {
  getWatchListMovies, getWatchListMovieById, addMovieToWatchList, removeMovieFromWatchList
};
