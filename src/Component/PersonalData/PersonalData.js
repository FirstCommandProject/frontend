import { useState } from "react";
import personalIcon from '../../Source/images/personal-img.png';
import { TextField } from "@material-ui/core";
import PasswordInput from "../PasswordInput/PasswordInput";
import './PersonalData.css';

const PersonalData = ({active, setActive}) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [patr, setPatr] = useState("");
    const [univer, setUniver] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const cancelFunction = () => {
        setActive(false);
        setPassword("");
        setName("");
        setSurname("");
        setPatr("");
        setUniver("");
        setEmail("");
    }

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
                        alt='logo'
                    />
                </div>

                <div>
                    <TextField
                        label="Имя"
                        className="personal-input"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
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
                        value={patr}
                        onChange={(e) => setPatr(e.target.value)}
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
                        value={univer}
                        onChange={(e) => setUniver(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="span-col-2">
                    <PasswordInput
                        value={password}
                        setValue={setPassword}
                    />
                </div>

                <div />

                <div className='personal-butt'>
                    <button className='button-cancel' onClick={() => cancelFunction()}>
                        Отменить
                    </button>

                    <button className='button-save'>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}


export default PersonalData;