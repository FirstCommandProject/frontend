import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import appLogo from '../../assets/branding/logo.png';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import useWindowDimensions from '../windowSizeHook/windowSize.js';
import BurgerMenu from '../BurgerMenu/Burger.js';
import Account from '../PersonalData/PersonalData';
import './AuthorizedHeader.css';

const AuthorizedHeader = () => {
    const { width } = useWindowDimensions();
    const [isModal , setIsModal] = useState(false);
    
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
                        <NavLink to='#'>
                            <span onClick={() => setIsModal(true)}>
                                Аккаунт
                            </span>
                        </NavLink>
                    </li>

                    <li className='round-button-authorized-header'>
                        <NavLink to='/my/test'>Пройти тестирование</NavLink>
                    </li>
                </ul>
            </>
            : <BurgerMenu pageWrapId={"page-wrap"} />
        }
        <Modal
            open={isModal}
            className="modal-window"
            onClose={() => setIsModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 1000,
            }}
        >
            <Account active={isModal} setActive={setIsModal} />
        </Modal>
        
        </div>
    );
}


export default AuthorizedHeader;