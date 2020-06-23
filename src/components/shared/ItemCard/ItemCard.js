import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';
import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `/items/${item.id}`;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <div className="card-body">
            <img src={item.itemImage} alt="" className="card-img-top" />
            <h5 className="card-title">{item.itemName}</h5>
            <Link className="btn btn-info" to={singleLink}>Single View</Link>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete!</button>
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
