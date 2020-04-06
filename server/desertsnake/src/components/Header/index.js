import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import auth from "../../actions";

import './index.css';
import Button from "../Button";
import logo from '../../../public/logo.png';

class Header extends Component {
  render() {
    if (this.props.isLoading) {
      return <p>Загрузка</p>
    }
    return (
      <div className="div orange">
        <div className="div logo container">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        {/* <div className="div hello container">
          <p> Привет, {this.props.user || '<user_name>!'}</p>
        </div> */}
        <div className="div hello container">
        <Link to="/login">
          <Button>Войти</Button>
          </Link>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.loadUser
  }
}


function mapStateToProps(state) {
  const { userReducer } = state

  return {
    user: userReducer.user && userReducer.user.login,
    isLoading: userReducer.isLoading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

// class Header extends Component {
//   render() {
//     return (
//       <div><img src="../../../logo.png" alt="logo" width='5%'></img></div>
//     )
//   }
// }

// export default Header;