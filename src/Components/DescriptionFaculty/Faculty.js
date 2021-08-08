import icon1 from '../../assets/icons/Icon1.png'
import icon2 from '../../assets/icons/Icon2.png';
import icon3 from '../../assets/icons/Icon3.png';
import icon4 from '../../assets/icons/Icon4.png';
import './Faculty.css';

const Faculty = () => {
    return (
        <div className='wrapper-faculty'>
            <div className='top-faculty'>
                <div className='name-faculty'>
                    <img
                        alt='logo'
                        src={icon4}
                    />

                    <div>
                        <p>
                            КАФЕДРА
                        </p>
                    </div>

                    <span>
                        Что вы получите?
                    </span>

                    <hr/>
                </div>

                <div className='box-faculty'>
                    <div>
                        <img
                            alt='logo'
                            src={icon1}
                        />

                        <span>
                            Some text
                        </span>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla dictum at tortor adipiscing sapien, at ornare sit pretium.
                            Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.
                        </p>
                    </div>

                    <div>
                        <img
                            alt='logo'
                            src={icon2}
                        />

                        <span>
                            Ключевые области
                        </span>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla dictum at tortor adipiscing sapien, at ornare sit pretium.
                            Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.
                        </p>
                    </div>

                    <div>
                        <img
                            alt='logo'
                            src={icon3}
                        />

                        <span>
                            Трудоустройство
                        </span>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla dictum at tortor adipiscing sapien, at ornare sit pretium.
                            Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bottom-faculty'>
                <div className='name-bottom'>
                    <div>
                        <p>
                            ИНФОРМАЦИЯ
                        </p>
                    </div>

                    <span>
                        Специальные дисциплины программы
                    </span>

                    <hr/>
                </div>

                <div className='disciplines-faculty'>
                    <div className='discipline-fac-1'>
                        <p>Алгоритмы и структуры данных</p>
                    </div>

                    <div className='discipline-fac'>
                        <p>Математические основы анализа больших данных</p>
                    </div>

                    <div className='discipline-fac-1'>
                        <p>Методы интеллектуального анализа данных</p>
                    </div>

                    <div className='discipline-fac'>
                        <p>Технологии анализа больших данных</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Faculty;