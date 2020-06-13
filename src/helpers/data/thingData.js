import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="#{uid"`)
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
    .catch((err) => console.error(err));
});

export default { getItemsByUid };
