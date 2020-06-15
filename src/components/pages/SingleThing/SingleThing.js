import React from 'react';
import itemData from '../../../helpers/data/thingData';

import './SingleThing.scss';


class SingleThing extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error("can't get singleItem", err));
  }

  removeItem = () => {
    const { itemId } = this.props.match.params;
    itemData.deleteItem(itemId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('cannot remove item: ', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleThing">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <button className="btn btn-danger" onClick={this.removeItem}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleThing;
