import personalIcon from '../../Source/images/personal-img.png';
import { TextField } from "@material-ui/core";
import './PersonalData.css';

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
                        className="personal-input"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div>
                    <TextField
                        label="Фамилия"
                        className="personal-input"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="Отчество(необязательно)"
                        className="personal-input"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="ВУЗ"
                        className="personal-input"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="Почта"
                        className="personal-input"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="span-col-2">
                    <TextField
                        label="Пароль"
                        className="personal-input"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
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