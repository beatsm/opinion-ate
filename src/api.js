import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/EBCI0WPBUQnrQUaONARut1TlikPodls7',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
