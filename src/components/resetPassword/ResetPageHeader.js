import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResetPageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div className="head-wrapper">
        <a href="#" className="app-logo">
          <img src="https://res.cloudinary.com/dx0hz2ziy/image/upload/v1554739109/groot/logo.png" />
          <span>Authors Haven</span>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down_">
          <li className="action-buttons">
          <a href='/' className="waves-effect waves-light btn-small join">Go back to homepage</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ResetPageHeader;
