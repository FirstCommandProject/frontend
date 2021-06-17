import Header from "../Header/Header";
import descriprionPicture from '../../Source/images/description-img.png';
import './Description.css';

const Description = () => {
    return (
        <>
            <Header />
            <div className='wrapper-description'>
                <>
                    <img className='img-description'
                         alt='logo'
                         src={descriprionPicture}/>
                </>

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
