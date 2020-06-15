import React from 'react';

import './Edit.scss';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/thingData';
import { auth } from 'firebase';

class Edit extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    itemData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('cannot retrieve item for editing', err));
  }

  updateItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const updatedItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    itemData.putItem(updatedItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('cannot update scat:', err));
  }


  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="EditItem col-12">
        <h1>Edit Item</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.updateItem}>Update Item</button>
        </form>
      </div>
    );
  }
}