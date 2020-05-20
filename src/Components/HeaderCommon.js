import React from 'react';
import logo from '../public/img/logo.png'
import './HeaderCommon.css'
import { withRouter } from 'react-router-dom'
class HeaderCommon extends React.Component {
  logout = () => {
    localStorage.removeItem('myAuth')
    this.props.history.push("/")
  }
  render() {
    return (
      <div className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand ml-5" href="/userwelcome"><img id="logo" src={logo} alt="logo"></img></a>


          <div class="btn-group mr-5">
            <button type="button" class="btn btn-outline-warning dropdown-toggle float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hey User
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Set Profile</a>
              <a class="dropdown-item" href="#">Suggestion Box</a>
              <div class="dropdown-divider"></div>
              <button type="button" className="dropdown-item" onClick={()=>{this.logout()}}>Logout</button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(HeaderCommon)