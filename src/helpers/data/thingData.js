import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const responseItems = response.data;
      const items = [];
      if (responseItems) {
        Object.keys(responseItems).forEach((respItemId) => {
          responseItems[respItemId].id = respItemId;
          items.push(responseItems[respItemId]);
        });
      }
      resolve(items);
    })
    .catch((err) => reject(err));
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

export default {
  getItemsByUid,
  getSingleItem,
  deleteItem,
};
