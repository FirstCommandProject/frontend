import { useState } from "react";
import { Redirect } from 'react-router-dom'
import Header from "../../Components/AuthorizedHeader/AuthorizedHeader";
import { Button } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './ExamPage.scss';

const NotFoundPage = () => {
    const [value, setValue] = useState('');

    const OnChangeAnswer = (event) => {
      setValue(event.target.value);
    };

    if (!localStorage.getItem('user')) {
        return <Redirect to="/login"/>
    }
    
    return (
        <>
            <Header/>
            <div className="question">
                <div className="question-number">
                    Вопрос номер
                </div>
                <div className="question-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla dictum at tortor adipiscing sapien, at ornare sit pretium.
                </div>
                <div className="question-radio">
                <FormControl component="fieldset">
                    <RadioGroup value={value} onChange={OnChangeAnswer}>
                        <FormControlLabel selected value="yes" control={<Radio />} label="Да" />
                        <FormControlLabel value="ratherYes" control={<Radio />} label="Скорее да" />
                        <FormControlLabel value="dontKnow" control={<Radio />} label="Не знаю" />
                        <FormControlLabel value="ratherNo" control={<Radio />} label="Скорее нет" />
                        <FormControlLabel value="no" control={<Radio />} label="Нет" />
                    </RadioGroup>
                </FormControl>
                </div>
                <div className="buttons">
                    <Button className="button-finish">
                        Закончить
                    </Button>
                    <Button className="button-next">
                        Далее
                    </Button>
                    {/* <Button className="button-backward">
                        Назад
                    </Button> */}
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;