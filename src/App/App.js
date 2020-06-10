import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import DatNavBar from '../components/shared/DatNavBar/DatNavBar';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <h2>HELLO THERE</h2>
        <button className="btn btn-info">Hello Yourself</button>
      </div>
    );
  }
}

export default App;
