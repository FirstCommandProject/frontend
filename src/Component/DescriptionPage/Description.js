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
            <Header />
            <div className='wrapper-description'>
                <div>
                    <img
                         className='img-description'
                         alt='logo'
                         src={descriptionPicture}/>
                </div>

                <div className='box-description'>
                    <span>
                        О проекте
                    </span>

                    <p>
                        Данная экспертная система была создана для упрощения подобра направления для поступающих на магистратуру

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla dictum at tortor adipiscing sapien, at ornare sit pretium.
                        Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.
                    </p>
                </div>

                {/*Код для PersonalData*/}
                <button onClick={() => setModalActive(true)}>модальное окно</button>
                <Cab
                    active={modalActive}
                    setActive={setModalActive}/>
                {/*Код для PersonalData*/}

            </div>
        </>
    );
}


export default Description;
