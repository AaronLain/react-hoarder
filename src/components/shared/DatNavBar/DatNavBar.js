import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './DatNavBar.scss';

class DatNavBar extends React.Component {
  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="DatNavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <i className="navbar-brand">Hoarder</i>
          {
            authed
              ? <button className="btn btn-danger ml-auto" onClick={this.logOut}>Logout</button>
              : <button className="btn btn-warning ml-auto" onClick={this.loginClickEvent}>Google Login</button>
          }
        </nav>
      </div>
    );
  }
}

export default DatNavBar;
