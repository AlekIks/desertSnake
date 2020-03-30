import React from 'react';

import Input from '../Input'
import Button from '../Button'
import http from '../../utils/http'

import './index.css'

class LoginForm extends React.Component {
  state = {
    emailValue: '',
    passwordValue: ''
  }

  render() {

    return (
      <form className="login_form" >
        <header>
          <h2>Зарегистрироваться</h2>
        </header>
        <main>
          <Input
            type="email"
            placeholder="email"
            onChange={(event) => {
              this.setState({ emailValue: event.target.value })
            }}
            value={this.state.emailValue}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(event) => {
              this.setState({ passwordValue: event.target.value })
            }}
            value={this.state.passwordValue}
          />
        </main>
        <footer>
          <Button onClick={() => {
            http('signup', 'POST', {
              login: this.state.emailValue,
              password: this.state.passwordValue
            })
          }}>
          Войти
          </Button>

          <Button onClick={() => {
          }}>
          Зарегистрироваться</ Button>
        </footer>
      </form>
    );
  }
}

export default LoginForm;
