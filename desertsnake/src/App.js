import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/login" component={LoginForm}/>
        <Route path="/" component={MainPage}/>
        {/* <Route path="*" component={ErrorPage}/> */}
      </Switch>
      <Footer></Footer>
      <footer>© Погребная Александра, 2020</footer>
    </div>
  );
}

export default App;
