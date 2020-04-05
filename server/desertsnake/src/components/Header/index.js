import React, {Component} from 'react';
import { connect } from 'react-redux'

import fetchUserAction from '../../actions/user'

import './index.css'
import logo from '../../../public/logo.png'

class Header extends Component {
  render() {
    if (this.props.isFetching) {
      return <p>Загрузка</p>
    }
    return (
      <div className="div orange">
        <div className="div logo container">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="div hello container">
          <p> Привет, {this.props.user || '<user_name>!'}</p>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchUser()
  }
}


function mapStateToProps(state) {
  const { userReducer } = state

  return {
    user: userReducer.data && userReducer.data.login,
    isFetching: userReducer.isFetching,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUserAction())
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