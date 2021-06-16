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
                             src='https://scontent-arn2-1.xx.fbcdn.net/v/t1.18169-1/c19.0.416.416a/10420331_816875101668357_2010640913126961740_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=hi8ZndGqLHwAX9LeQ37&_nc_oc=AQklpKDUqalJogZqavQeba3ItxGOHL9OVlOLf7HMDeLqJXuLK8XR4iEHj5V5FuYJD3Y&_nc_ht=scontent-arn2-1.xx&tp=29&oh=d972fc6a555a16e697c2198899f56c1d&oe=60DECA16'/>
                    </>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Faculty;
