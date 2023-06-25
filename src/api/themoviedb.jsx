import axios from 'axios';

// export const getUsers = async () => {
//   const { data } = await axios.get(url);
//   return data;
// };

const fetchData = async query => {
  const KEY = '34a3f3c9cce4f4b9cc46f3708ad7a6e9';
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    window.alert(error);
  }
};

export default fetchData;
