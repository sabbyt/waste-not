import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import HeaderItem from './header_login';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export default class Header extends Component {

  static propTypes = {
    authenticate: PropTypes.func,
    authenticated: PropTypes.bool
  }

  authButton() {
    if (this.props.authenticated) {
      return <HeaderItem onClick={() => this.props.authenticate(false)} />;
    }

    return <HeaderItem onClick={() => this.props.authenticate(true)} />;
  }

  render() {
    return (
      <header className="header landing-nav">
        <div className="container">
          <div className="header-left">
            <Link className="header-item" to="/">
              <img
                src="img/logo_single_light.png"
                alt="Waste Not"
                className="brand-logo" />
            </Link>
          </div>
          {this.authButton()}
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
