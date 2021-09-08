import icon1 from '../../assets/icons/Icon1.png'
import icon2 from '../../assets/icons/Icon2.png';
import icon3 from '../../assets/icons/Icon3.png';
import icon4 from '../../assets/icons/Icon4.png';
import './Faculty.css';

const Faculty = () => {
    const photo = [icon1, icon2, icon3];

    const offers = [
        {
            id: 1,
            name: "Some text",
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae."
        },
        {
            id: 2,
            name: "Ключевые области",
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae."
        },
        {
            id: 3,
            name: "Трудоустройство",
            desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. Luctus lacus hac sit interdum elit, nibh adipiscing velit vitae."
        },
    ];

    const textTable = [
        {
            id: 1,
            description: "Алгоритмы и структуры данных"
        },
        {
            id: 2,
            description: "Математические основы анализа больших данных"
        },
        {
            id: 3,
            description: "Методы интеллектуального анализа данных"
        },
        {
            id: 3,
            description: "Технологии анализа больших данных"
        },
    ];

    function checkCount(count) {
        if (count % 2 == 0) {
            return 'discipline-fac-1';
        } else {
            return 'discipline-fac';
        }
    }

    return (
        <>
            <div className='photo-faculty'>
                <img
                    alt='logo'
                    src={icon4}
                />
            </div>

            <div className='wrapper-faculty'>
                <div className='top-faculty'>
                    <div className='name-faculty'>
                        <div>
                            <p> КАФЕДРА </p>
                        </div>

                        <span>
                        Что вы получите?
                    </span>

                        <hr/>
                    </div>

                    <div className='box-faculty'>
                        {offers.map((item, index) => (
                            <div>
                                <img
                                    alt='logo'
                                    src={photo[index]}
                                />

                                <span> {item.name} </span>

                                <p> {item.desription} </p>
                            </div>
                        ))
                        }
                    </div>
                </div>

                <div className='bottom-faculty'>
                    <div className='name-bottom'>
                        <div>
                            <p> ИНФОРМАЦИЯ </p>
                        </div>

                        <span>
                        Специальные дисциплины программы
                    </span>

                        <hr/>
                    </div>

                    <div className='disciplines-faculty'>
                        {textTable.map((t, count) =>
                            <div className={checkCount(count)}>
                                <p> {t.description} </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Faculty;