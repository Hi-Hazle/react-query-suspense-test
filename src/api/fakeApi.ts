import axios from 'axios';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const fakeApi = async (delay?: number = 0) => {
  const randomId = getRandomNumber(1, 100);
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response.data);
    }, delay);
  });
};
