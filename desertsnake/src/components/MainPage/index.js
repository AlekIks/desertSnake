import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';

import "./index.css"

export default function MainPage() {
    return <div className="main">
        <Button style="blue big" height="100px">Печатать</Button>
        <Button style="blue big" height="100px" disabled>Сделать заказ</Button>
        <Button style="blue big" height="100px">Посмотреть каталог</Button>
    </div>
}