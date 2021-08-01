/*Код для PersonalData*/
import { useState } from "react";
import Cab from "../PersonalData/PersonalData";
/*Код для PersonalData*/

import descriptionPicture from '../../Source/images/description-img.png';
import Header from "../Header/Header";
import './Description.css';

const Description = () => {

    {/*Код для PersonalData*/}
    const [modalActive, setModalActive] = useState(false);
    {/*Код для PersonalData*/}

    return (
        <>
            <!-- <Header /> -->

            <div className='wrapper-description'>
                <img
                    className='img-description'
                    alt='logo'
                    src={descriptionPicture}
                />

                <div className='box-description'>
                    <span>
                        О проекте
                    </span>

                    <p>
                        Данная экспертная система была создана для упрощения подобра направления для поступающих на магистратуру
                        Здесь дальше идет русский текст, потому что на английском текст становится почему-то жирным
                    </p>
                </div>
            </div>
        </>
    );
}


export default Description;
