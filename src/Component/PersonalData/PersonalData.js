import personalIcon from '../../Source/images/personal-img.png';
import { TextField } from "@material-ui/core";
import './PersonalData.css';
import '../LoginPage/SignIn.scss';

const PersonalData = ({active, setActive}) => {
    return (
        <div
            className={active ? "wrapper-personal active" : "wrapper-personal"}
            onClick={() => setActive(false)}>
            <div
                className={active ? "personal-content active" : "personal-content"}
                onClick={e => e.stopPropagation()}>

                <div>
                    <span>
                        Личные данные
                    </span>
                </div>

                <div>
                    <img
                        src={personalIcon}
                        alt='logo'/>
                </div>

                <div>
                    <TextField
                        label="Имя"
                        className="input"
                        variant="outlined"
                    />
                </div>

                <div>
                    <TextField
                        label="Фамилия"
                        className="input"
                        variant="outlined"
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="Отчество(необязательно)"
                        className="input"
                        variant="outlined"
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="ВУЗ"
                        className="input"
                        variant="outlined"
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="Почта"
                        className="input"
                        variant="outlined"
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="Пароль"
                        className="input"
                        variant="outlined"
                    />
                </div>

                <div>

                </div>

                <div className='personal-butt'>
                    <button className='personal-button1'>
                        Отменить
                    </button>

                    <button className='personal-button2'>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}


export default PersonalData;