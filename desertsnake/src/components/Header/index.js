import React, {Component} from 'react';
import { connect } from 'react-redux'

import fetchUserAction from '../../actions/user'

class Header extends Component {
  render() {
    if (this.props.isFetching) {
      return
        <h1>Загрузка</h1>
    }

    return <h1>Привет, {this.props.user || '%user_name'}</h1>
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