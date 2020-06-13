import React from 'react';
import { Link } from 'react-router-dom';

import './ItemCard.scss';

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    const singleLink = `/items/${item.id}`;
    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <img src={item.itemImage} alt="" className="card-img-top" />
            <h5 className="card-title">{item.itemName}</h5>
            <Link className="btn btn-info" onClick={() => console.error(singleLink)} to={singleLink}>Single</Link>
            {/* <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link> */}
            {/* <button className="btn btn-danger" onClick={() => removeScat(scat.id)}><i className="fas fa-trash-alt"></i></button> */}
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
