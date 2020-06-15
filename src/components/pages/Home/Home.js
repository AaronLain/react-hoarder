import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/thingData';
import ItemCard from '../../shared/ItemCard/ItemCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error(err));
  }

  removeItem = (itemId) => {
    itemData.deleteItem(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    const user = firebase.auth().currentUser.displayName;
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
      <ItemCard key={item.id} item={item} removeItem={this.removeItem}/>
    ));
    return (
      <div className="container">
        <h1>Hello {user}</h1>
        <h2>Welcome to your stuff!</h2>
        <div className="d-flex flex-wrap">
          {buildItemCards}
        </div>
      </div>
    );
  }
}

export default Home;
