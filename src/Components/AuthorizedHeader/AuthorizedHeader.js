import react from "react";
import { NavLink } from "react-router-dom";
import appLogo from '../../assets/branding/logo.png';
import useWindowDimensions from '../windowSizeHook/windowSize.js';
import BurgerMenu from '../BurgerMenu/Burger.js';
import './AuthorizedHeader.css';

const AuthorizedHeader = () => {
    const { width } = useWindowDimensions();
    
    return (    
        <div className="main-header-authorized-header">
            {width > 1000 
            ? <>
                <NavLink to='/' >
                    <img
                        className="our-icon"
                        src={appLogo}
                        alt="logo"/>
                </NavLink>

                <ul className="nav-authorized-header">
                    <li className='nav-button-authorized-header'>
                        <NavLink to='/about' activeClassName='active-header'>О проекте</NavLink>
                    </li>

                    <li className='nav-button-authorized-header'>
                        <NavLink to='/my/results' activeClassName='active-header'>Результаты</NavLink>
                    </li>

                    <li className='nav-button-authorized-header'>
                        <NavLink to='/departments' activeClassName='active-header'>Кафедры</NavLink>
                    </li>

                    <li className='nav-button-authorized-header'>
                        <NavLink exact to='/my' activeClassName='active-header'>Аккаунт</NavLink>
                    </li>

                    <li className='round-button-authorized-header'>
                        <NavLink to='/my/test'>Пройти тестирование</NavLink>
                    </li>
                </ul>
            </>
            : <BurgerMenu pageWrapId={"page-wrap"} />
        }
        </div>
    );
}


export default AuthorizedHeader;