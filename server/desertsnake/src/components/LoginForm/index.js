import React from 'react';

import Input from '../Input'
import Button from '../Button'

import './index.css'
import '../../axiosApi'
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    emailValue: '',
    passwordValue: ''
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
        const response = axiosInstance.post('/token/obtain/', {
            username: this.state.username,
            password: this.state.password
        });
        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return data;
    } catch (error) {
        throw error;
      }
  }

  handleRegistration = () => {
    return  <Link to="/signup"></Link>;
  }

  render() {

    return (
      <form className="login_form" >
        <header>
          <h2>С возвращением!</h2>
        </header>
        <main>
          <Input
            type="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.emailValue}
          />
          <Input
            type="password"
            placeholder="Пароль"
            onChange={this.handleChange}
            value={this.state.passwordValue}
          />
        </main>
        <footer>
          <Button onClick={this.handleSubmit}>
          Войти
          </Button>

          <Button onClick={this.handleRegistration}>
          Зарегистрироваться</ Button>
        </footer>
      </form>
    );
  }
}

export default LoginForm;
