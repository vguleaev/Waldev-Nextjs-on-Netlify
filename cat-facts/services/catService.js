import axios from 'axios';

const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL
};

function getRandomFact() {
  return axios.get('/random-cat-fact', axiosConfig);
}

export default {
  getRandomFact
};
