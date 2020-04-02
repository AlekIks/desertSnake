import React from 'react';
// import PropTypes from 'prop-types';

import Input from '../Input'
import Button from '../Button'
import http from '../../utils/http'

import './index.css'

class SignUpForm extends React.Component {
  state = {
    nameValue: '',
    surnameValue: '',
    phoneValue: '',
    emailValue: '',
    passwordValue: ''
  }

  render() {
    return (
      <form className="signup_form">
        <header>
          <h2>Добро пожаловать!</h2>
        </header>
        <main>
            <ul className="ul">
                <li>
                    <label className="label">Имя</label>
                    <Input
                        type="name"
                        placeholder="Имя"
                        onChange={(event) => {
                            this.setState({ nameValue: event.target.value })
                        }}
                        value={this.state.nameValue}
                    />
                </li>
                <li>
                    <label className="label">Фамилия</label>
                    <Input
                        type="surname"
                        placeholder="Фамилия"
                        onChange={(event) => {
                            this.setState({ surnameValue: event.target.value })
                        }}
                    value={this.state.surnameValue}
                    />
                </li>
                <li>
                    <label className="label">Телефон</label>
                    <Input
                        type="phone"
                        placeholder="Телефон"
                        onChange={(event) => {
                            this.setState({ phoneValue: event.target.value })
                        }}
                    value={this.state.phoneValue}
                    />
                </li>
                <li>
                    <label className="label">email</label>
                    <Input
                        type="email"
                        placeholder="email"
                        onChange={(event) => {
                            this.setState({ emailValue: event.target.value })
                        }}
                    value={this.state.emailValue}
                    />
                </li>
                <li>
                    <label className="label">Пароль</label>
                    <Input
                        type="password"
                        placeholder="Пароль"
                        onChange={(event) => {
                            this.setState({ passwordValue: event.target.value })
                        }}
                    value={this.state.passwordValue}
                    />
                </li>
            </ul>

        </main>
        <footer>
          <Button onClick={() => {
            http('signup', 'POST', {
              login: this.state.emailValue,
              password: this.state.passwordValue
            })
          }}>
          Зарегистрироваться
          </Button>
        </footer>
      </form>
    );
  }
}

export default SignUpForm;
