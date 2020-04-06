import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Input from '../Input'
import Button from '../Button'

import './index.css'
import '../../axiosApi'

import {auth} from "../../actions"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      passwordValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginUser(this.state.emailValue, this.state.passwordValue);
  }

  render() {
    return (
      <form className="login_form" onSubmit={this.handleSubmit}>
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
          <Button type="submit">
          Войти
          </Button>

          <Link to="/signup">
            <Button> Зарегистрироваться</ Button>
          </Link>
        </footer>
      </form>
    );
  }
}

export default LoginForm;
