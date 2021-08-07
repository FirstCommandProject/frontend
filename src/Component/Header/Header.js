import react from "react";
import { NavLink } from "react-router-dom";
import ourLogo from '../../Source/images/NewLogo.png';
import useWindowDimensions from '../windowSizeHook/windowSize.js';
import BurgerMenu from '../BurgerMenu/Burger.js';
import './Header.css';

const Header = () => {
    const { width } = useWindowDimensions();
    console.log(width);

    return (    
        <div className="main-header">
            {width > 620 
            ? <>
                <NavLink to='/' >
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
                                    <NavLink to='/sign/up' activeClassName='active-header'>Регистрация</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
            : <BurgerMenu pageWrapId={"page-wrap"} />
        }
        </div>
    );
}


export default Header;