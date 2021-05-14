import { NavLink } from "react-router-dom";
import educationImg from './education.gif';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './MainPart.css';

const MainPart = () => {
    return (
        <>
            <Header />
            <div className='wrapper'>
                <div className='wrapper_name'>
                    <span className='span1'>Экспертная система<br/></span>
                    <span className='span2'>для поступающих в магистратуру</span>
                </div>

                <div className='ellipse'>
                    <div className='test'>
                        <NavLink to='/my/test' activeClassName='activeLink'>Пройти тестирование</NavLink>
                    </div>
                </div>

                <div>
                    <img alt='logo' src={educationImg} />
                </div>
            </div>
            <Footer />
        </>
    );
}


export default MainPart;
