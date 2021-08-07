/*Код для PersonalData*/
import { useState } from "react";
/*Код для PersonalData*/

import descriptionPicture from '../../assets/illustrations/description-img.png';
import Header from "../../Components/Header/Header";
import './AboutPage.css';

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
                         src={descriptionPicture}
                    />
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
            </div>
        </>
    );
}


export default Description;
