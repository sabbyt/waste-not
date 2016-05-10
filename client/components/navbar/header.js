import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions';

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    authenticated: PropTypes.bool,
    signoutUser: PropTypes.func,
    role: PropTypes.string,
    username: PropTypes.string
  }

  handleSignout() {
    // Grab action createStore
    signoutUser();
  }

  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <div className="header-right header-menu">
          <p className="header-item">Hi, {this.props.username}!</p>
          <span className="header-item  button-tight">
            <Link
              className="button button-direct"
              to={this.props.role}>
                Dashboard
              </Link>
          </span>
          <span className="header-item  button-tight">
            <a
              className="button button-direct"
              onClick={this.props.signoutUser}>Log Out
            </a>
          </span>
        </div>
      );
    // Will need condition for user on signup pages – show nothing
    }
      // show a link to sign in or sign up
      return (
        <div className="header-right header-menu">
          <p>
            <Link className="header-item" to="/login" className="header-item">
              Already Registered?
            </Link>
          </p>
          <p>
            <span className="header-item">
              <Link className="button button-direct" to="/login">Log In</Link>
            </span>
          </p>
        </div>
      );
  }

  render() {
    return (
      <header className="header landing-nav">
        <div className="container">
          <div className="header-left">
            <Link to="/" className="header-item">
              <img
                src="img/logo_single_light.png"
                alt="Waste Not"
                className="brand-logo" />
            </Link>
          </div>
            {this.renderLinks()}
        </div>

      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    role: state.auth.role,
    username: state.auth.username
   };
}

export default connect(mapStateToProps, { signoutUser })(Header);
