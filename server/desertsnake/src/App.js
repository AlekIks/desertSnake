import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

class App extends Component{
  componentDidMount() {
    this.props.loadUser;
    this.props.loginUser;
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignUpForm}/>
          {/* <Route path="/print" component={PrintPage}/> */}
          <Route path="/" component={MainPage}/>
          {/* <Route path="*" component={ErrorPage}/> */}
        </Switch>
        <Footer></Footer>
        <footer>© Погребная Александра, 2020</footer>
      </div>
    );
  }
}

export default App;
