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

  render() {
    const { item } = this.state;
    return (
      <div className="SingleThing">
        <div className="container col-8">
          <h1>{item.itemName}</h1>
          <p>{item.itemDescription}</p>
        </div>
      </div>
    );
  }
}

export default SingleThing;
