import aboutPagePicture from '../../assets/illustrations/aboutPagePicture.png';
import Header from "../../Components/Header/Header";
import './AboutPage.css';

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className='wrapper-description'>
                <div class="img-description">
                    <img
                        alt='logo'
                        src={aboutPagePicture}
                    />
                </div>
                

                <div className='box-description'>
                    <h2>
                        О проекте
                    </h2>

                    <p>
                        Данная экспертная система была создана для упрощения подобра направления для поступающих на магистратуру
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.
                    </p>
                </div>
            </div>
        </>
    );
}


export default AboutPage;
