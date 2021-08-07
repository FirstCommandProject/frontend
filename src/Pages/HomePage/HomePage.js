import { NavLink } from 'react-router-dom';
import HomePagePicture from '../../assets/illustrations/homePagePicture.png';

import Header from "../../Components/Header/Header";
import './HomePage.css';

const HomePage = () => {
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi assumenda at commodi dolorem et ex inventore itaque neque odit saepe sequi totam veritatis.
                        </p>
                    </div>

                    <NavLink to='/my/test'>
                        <div className='ellipse-main'>
                            <div className='test-main'>
                                Пройти тестирование
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className='wrapper-right'>
                    <img
                         className='img-main'
                         alt='logo'
                         src={HomePagePicture}
                    />
                </div>
            </div>
        </>
    );
}


export default HomePage;
