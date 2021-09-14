import { slide as Menu } from "react-burger-menu";
import "./Burger.css";

const BurgerMenu = (props) => {
  return (
    <>
      {props.isAuth ? (
        <Menu {...props}>
          <a className="menu-item" href="/about">
            О проекте
          </a>
          <a className="menu-item" href="/my/results">
            Результаты
          </a>
          <a className="menu-item" href="/departments">
            Кафедры
          </a>
          <a className="menu-item" href="#">
            Аккаунт
          </a>
          <a className="menu-item" href="/my/test">
            Пройти тестирование
          </a>
        </Menu>
      ) : (
        <Menu {...props}>
          <a className="menu-item" href="/about">
            О проекте
          </a>
          <a className="menu-item" href="/departments">
            Кафедры
          </a>
          <a className="menu-item" href="/login">
            Вход
          </a>
          <a className="menu-item" href="/sign/up">
            Регистрация
          </a>
        </Menu>
      )}
    </>
  );
};

export default BurgerMenu;
