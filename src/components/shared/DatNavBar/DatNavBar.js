import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './DatNavBar.scss';

class DatNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavBar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/new'>New Item</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.logOut}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return (
        <Nav className="ml-auto" navbar>
          <button className="btn btn-warning ml-auto" onClick={this.loginClickEvent}>Google Login</button>
        </Nav>
      );
    };

    return (
        <div className="DatNavbar">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Hoarder!</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              {buildNavBar()}
            </Collapse>
          </Navbar>
        </div>
    );
  }
}


export default DatNavBar;
