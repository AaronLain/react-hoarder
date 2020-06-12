import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

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
    const { authed } = this.state;
    return (
      <div className="App">
        <DatNavBar authed={authed}/>
      </div>
    );
  }
}

export default App;
