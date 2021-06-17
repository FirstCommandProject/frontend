import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import gifNotFound from '../../Source/images/pageNotFound.gif';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <>
            <Header/>
            <div className='wrapper-notFound'>
                <div>
                    <img alt='logo'
                         src={gifNotFound}/>
                </div>

                <div className='description-notFound'>
                    <span>
                        Что-то пошло не так
                    </span>

                    <p>
                        Кажется, что страница которую вы ищите, была перемещена,
                        переименована или даже удалена!
                    </p>
                </div>

                <div className='ellipse-notFound'>
                    <div className='back-notFound'>
                        <NavLink to='/main'>Вернуться назад</NavLink>
                    </div>
                </div>
            </div>
        </>
    );

}


export default PageNotFound;