
import React from 'react';

import './index.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
          <div className="footer column">
            <h3> О компании</h3>
            <ul className="ul">
              <li>Самые крутые</li>
              <li margin="1em 0">Самые быстрые</li>
              <li>Самые чёткие</li>
            </ul>
          </div>
          <div className="footer column">
            <h3> Что можно делать на сайте?</h3>
            <ul className="ul">
              <li><a href="\print">Печатать</a></li>
              <li><a href="\makeorder">Сделать заказ</a></li>
              <li><a href="\catalog">Посмотреть каталог</a></li>
            </ul>
          </div>
          <div className="footer column">
            <h3> Какие-то контакты</h3>
            <ul className="ul">
              <li>телефон</li>
              <li><a href="mailto:desertsnake@gmail.com">desertsnake@gmail.com</a></li>
              <li>телега</li>
              <li>вк</li>
            </ul>
          </div>
          <div className="footer column">
            <h3> Адрес</h3>
            <ul className="ul">
              <li>Россия, Москва</li>
              <li>3-я улица Строителей</li>
              <li>дом 25, кв. 12</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Footer;