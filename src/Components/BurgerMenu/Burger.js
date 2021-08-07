import react, { useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';

const BurgerMenu = (props) => {

    return (
        <>
            <Menu {...props}>
                <a className="menu-item" href="/about">О проекте</a>
                <a className="menu-item" href="/departments">Кафедры</a>
                <a className="menu-item" href="/login">Вход</a>
                <a className="menu-item" href="/sign/up">Регистрация</a>
            </Menu>
        </>
    );
}


export default BurgerMenu;
