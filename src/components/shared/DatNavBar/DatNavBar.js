import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './DatNavBar.scss';

class DatNavBar extends React.Component {
  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="DatNavBar">
        <h1>DATNAVBAR</h1>
        <button className="btn btn-danger" onClick={this.logOut}>Logout</button>
      </div>
    );
  }
}

export default DatNavBar;
