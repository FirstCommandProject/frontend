import { NavLink } from 'react-router-dom';

import Lottie from 'lottie-react-web'

import HomePagePicture from '../../assets/lottie/welcome.json';

import Header from "../../Components/Header/Header";
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            {<Header/>}
            <div className='wrapper-main'>
                <div className='wrapper-left'>
                    <span className='greeting-main'>
                        Добро пожаловать!
                    </span>

                    <p className='description-main'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi assumenda at commodi dolorem et ex inventore itaque neque odit saepe sequi totam veritatis.
                    </p>

                    <NavLink to='/my/test'>
                        <button className="button"><span>Пройти тестирование</span></button>
                    </NavLink>
                </div>

                <div className='wrapper-right'>
                    <div className='lottie-shadow'>
                        <Lottie
                            options={{
                                animationData: HomePagePicture
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}


export default HomePage;
