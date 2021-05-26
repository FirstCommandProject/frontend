import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Faculty.css';


const Faculty = () => {
    return (
        <>
            <Header />
            <div className='wrapper-faculty'>
                <div className='box-faculty'>
                    <div>
                        <div className='name-faculty'>
                            Кафедра МОП ЭВМ
                        </div>

                        <div className='description-faculty'>
                            Кафедра математического обеспечения и применения ЭВМ была организована в 1973 году по
                            инициативе
                            д.т.н. профессора А.Н. Мелихова для подготовки специалистов в области разработки
                            программного
                            обеспечения для электронно-вычислительных машин. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquid animi culpa doloremque doloribus? Accusantium ad alias amet
                            aperiam
                            aspernatur aut, debitis deleniti deserunt dolor eaque eligendi eos facere facilis id iure,
                            laborum nam nihil non odio omnis quae quidem sapiente soluta ullam unde. Assumenda dolores
                            inventore libero nisi repudiandae ullam?
                        </div>

                        <div className='scores-faculty'>
                            Баллы:
                            <div className='nums-faculty'>
                                1. Инфа 1000000200<br/>
                                2. Матан 100800<br/>
                                3. Русский unknown<br/>
                            </div>
                        </div>

                        <div className='ref-faculty'>
                            <a target='_black'
                               href='https://sfedu.ru/www/stat_pages22.show?p=ELS/inf/D&x=ELS/-3000000000020'>Страница с
                                кафедрой</a>
                        </div>
                    </div>

                    <>
                        <img alt='Здесь должна быть фотография=)'
                             src='https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.18169-9/10420331_816875101668357_2010640913126961740_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9JI-SESrTeMAX-SOS-X&_nc_oc=AQlexn5HiKX39rSQulhfy920adqWMD0HgtfbmM6xk9doV-roh0yeyuUOpcaphZGZZzY&_nc_ht=scontent.fhrk1-1.fna&oh=25e91c394a7d1d33728f300f9ef670ff&oe=60B6269C'/>
                    </>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Faculty;
