import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
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
                             src='https://s3-alpha-sig.figma.com/img/1ef5/2a0e/7fe874a1afcfc6251e479cb65317fbbc?Expires=1623628800&Signature=TgCKhn6fTnO3bNwbZWqXm-PR6R8HVS~JS0srIpe6047fWwrGB05-AV7gFimRa1oJaFII98-YJYBZlhwNRqcTJnTQM6DpRlTY3p9AHIx4K9YmRl5UnEoiDeYjJrKy2ar7JIiX98SyNlYWZa1mv5gIBONnCmHmB7PCcJu20hvT0tWsMiohjMPhQ54NKkBY2WJ1XIfYr58wU8qUArJfp2xSkxq55E0mS8caxZGXWIyk-7sx8rlwwgULB8DEZtJhm7aYwaBl2uCtj-4dhoiRed8z9UnTZC485gThPuJSMLsHeDQ25ZzAEtI-7uM0FKiYULCGKWbXsWvg1RYvyZDvhjmEuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
                    </div>

                    <div className='name-span'>
                        <span>
                            СавосинДА/ЮФУ/savosin@gmail.com
                        </span>
                    </div>

                    <div className='center-acc'>
                        <ul>
                            <li>
                                <NavLink to='/change/personal/info' activeClassName='activeLink'>Изменить данные о себе</NavLink>
                            </li>

                            <li>
                                <NavLink to='/recent/results' activeClassName='activeLink'>Последние результаты</NavLink>
                            </li>

                            <li>
                                <NavLink to='/exit' activeClassName='activeLink'>Выйти</NavLink>
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