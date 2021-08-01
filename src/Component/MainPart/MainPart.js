import { NavLink } from 'react-router-dom';
import MainPicture from '../../Source/images/main-img.png';
import Header from "../Header/Header";
import './MainPart.css';

const MainPart = () => {
    return (
        <>
            <Header/>
            <div className='wrapper-main'>
                <div className='wrapper-left'>
                    <div className='greeting-main'>
                        <span className='greeting-main'>
                            Добро пожаловать!
                        </span>

                        <p className='description-main'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi assumenda at commodi
                            dolorem
                            et
                            ex inventore itaque neque odit saepe sequi totam
                        </p>
                    </div>

                    <div>
                        <NavLink to='/my/test'>
                            <div className='ellipse-main'>
                                <div className='test-main'>
                                    Пройти тестирование
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className='wrapper-right'>
                    <img
                         className='img-main'
                         alt='logo'
                         src={MainPicture}
                    />
                </div>
            </div>
        </>
    );
}


export default MainPart;
