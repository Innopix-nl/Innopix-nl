import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserHeader extends Component {
  
  render() {
    const { siteConstants } = this.props.language;
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <div class="logo mr-auto">
            <h1 class="text-light"><a href="/"><span>innoroo.</span></a></h1>

          </div>

          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active"><a href="/dashboard">Dashboard</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/attendees">Attendees</a></li>
              <li className="nav-item dropdown no-arrow">

              </li>
            </ul>
          </nav>

          <div class="nav-menu" style={{ width: "60px", marginRight: "60px" }}>
            {/* <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="img-profile rounded-circle" src={JSON.parse(sessionStorage.getItem('user')).profile_image ? config.imgPath + "/" + JSON.parse(sessionStorage.getItem('user')).profile_image : "./assets/img/svg/user.svg"} />
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">{JSON.parse(sessionStorage.getItem('user')).first_name}</span>
            </a> */}
            {/* <!-- Dropdown - User Information --> */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown" style={{ width: "20%" }}>
              <a className="dropdown-item" href="/profile">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                {siteConstants.MENU_USER_PROFILE}
              </a>
              <a className="dropdown-item" href="/company-profile">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Company Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                {siteConstants.LABEL_CHANGE_PASSWORD}
              </a>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/" onClick={this.logout}></Link>
              <a className="dropdown-item" href="/" onClick={this.logout} data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                {siteConstants.MENU_LOGOUT}
              </a>
            </div>
          </div>

        </div>
      </header>
    );
  }
}

//-- Here we are adding Reducer names, so it can be get data from reducers using store
function mapStateToProps(state) {
  const { language } = state;
  return {
    language
  };
}

const connectedUserHeader = connect(mapStateToProps)(UserHeader);
export default connectedUserHeader;