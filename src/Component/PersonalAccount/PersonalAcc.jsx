import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PersonIcon from '../../Source/images/Personal-icon.png';
import './PersonalAcc.css';

const PersonalAcc = () => {
    return (
        <>
            <Header/>
            <div className='wrapper-acc'>
                <div className='box-acc'>
                    <div className='greeting-acc'>
                        Добро пожаловать в личный кабинет!
                    </div>

                    <div className='icon-acc'>
                        <img alt='Здесь должна быть фотография=)'
                             src={PersonIcon}/>
                    </div>

                    <div className='name-span'>
                        <span>
                            СавосинДА/ЮФУ/savosin@gmail.com
                        </span>
                    </div>

                    <div className='center-acc'>
                        <ul>
                            <li>
                                <NavLink to='/change/personal/info'
                                         activeClassName='activeLink'>Изменить данные о себе</NavLink>
                            </li>

                            <li>
                                <NavLink to='/recent/results'
                                         activeClassName='activeLink'>Последние результаты</NavLink>
                            </li>

                            <li>
                                <NavLink to='/exit'
                                         activeClassName='activeLink'>Выйти</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default PersonalAcc;