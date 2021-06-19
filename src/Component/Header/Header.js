import ourLogo from '../../Source/images/NewLogo.jpg';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

    return (
        <div className="main-header">
            <NavLink to='/main' >
                <img
                    className="our-icon"
                    src={ourLogo}
                    alt="logo"/>
            </NavLink>

            <div className='right-header'>
                <div className="buttons">
                    <ul>
                        <li className='butt'>
                            <NavLink to='/about' activeClassName='active-header'>О проекте</NavLink>
                        </li>

                        <li className='butt'>
                            <NavLink to='/departments' activeClassName='active-header'>Кафедры</NavLink>
                        </li>

                        <li className='butt'>
                            <NavLink to='/login' activeClassName='active-header'>Вход</NavLink>
                        </li>

                        <li>
                            <div className='ellipse-header'>
                                <NavLink to='/sign/in' activeClassName='active-header'>Регистрация</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Header;