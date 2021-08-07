import react from "react";
import { NavLink } from "react-router-dom";
import appLogo from '../../assets/branding/logo.png';
import useWindowDimensions from '../windowSizeHook/windowSize.js';
import BurgerMenu from '../BurgerMenu/Burger.js';
import './Header.css';

const Header = () => {
    const { width } = useWindowDimensions();
    
    return (    
        <div className="main-header">
            {width > 620 
            ? <>
                <NavLink to='/' >
                    <img
                        className="our-icon"
                        src={appLogo}
                        alt="logo"/>
                </NavLink>

                
                
                <ul className="nav">
                    <li className='nav-button'>
                        <NavLink to='/about' activeClassName='active-header'>О проекте</NavLink>
                    </li>

                    <li className='nav-button'>
                        <NavLink to='/departments' activeClassName='active-header'>Кафедры</NavLink>
                    </li>

                    <li className='nav-button'>
                        <NavLink to='/login' activeClassName='active-header'>Вход</NavLink>
                    </li>
                </ul>

                <div class='round-button'>
                    <NavLink to='/sign/up' className="round-button-link" activeClassName='active-header'>Регистрация</NavLink>
                </div>
                
            </>
            : <BurgerMenu pageWrapId={"page-wrap"} />
        }
        </div>
    );
}


export default Header;