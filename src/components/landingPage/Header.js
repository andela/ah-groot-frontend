import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="head-wrapper">
        <a href="/home" className="app-logo">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554739109/groot/logo.png" />
          <span>Authors Haven</span>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down_">
          <li className="action-buttons">
            <a className="waves-effect waves-light btn-small join"
              onClick={this.props.openSignUp}>Join</a>
            <a className="waves-effect waves-light btn-small login"
            onClick = {this.props.openLogIn}>login</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
