import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  handleLoginModal = () => {
    alert("CIS Demo");
  };

  render() {
    return (
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <div class="logo mr-auto">
            <h1 class="text-light"><a href="/"><span>React Test</span></a></h1>

          </div>
          <Fragment>
            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li class="active"><a href="#header">Home</a></li>
                <li><a href="/movies-list">Movies List</a></li>
                <li class="get-started"><a href="#about" onClick={() => this.handleLoginModal()}>Get Started</a></li>
              </ul>
            </nav>
          </Fragment>

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

const connectedHeader = connect(mapStateToProps)(Header);
export default connectedHeader;