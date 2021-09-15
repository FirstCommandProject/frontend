import { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
    const [answers, setAnswers] = useState([]);
    const history = useHistory();

    // const questions = useMemo(async() => {
    //     const res = await axios.get(
    //         `${process.env.REACT_APP_SERVER_ENDPOINT}/departments`
    //       );
    //     return res.data.data;
    // }, [value]);

    const questions = [{}, {}, {}];

    const OnChangeAnswer = (event) => {
      setValue(event.target.value);
    };

    if (!localStorage.getItem('user')) {
        return <Redirect to="/login"/>
    }

    const addAnswer = (index) => {
        const tmpObj = {
            [index]: value
        };

        setAnswers((prev) => [...prev, tmpObj])
    }

    const onFinish = async () => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/test/finish`,
            {
                answers
            }
        );
        if (res.data.statusCode === '200') {
            history.push("/my/results");
        }
    }
    
    return (
        <>
            <Header/>
            {questions.map((question, index) => 
                index === (answers.length) &&
                <div className="question">
                    <div className="question-number">
                        Вопрос номер { index + 1 }
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
                        <Button className="button-finish" onClick={onFinish}>
                            Закончить
                        </Button>
                        <Button className="button-next" onClick={() => addAnswer(index)}>
                            Далее
                        </Button>
                        {/* <Button className="button-backward">
                            Назад
                        </Button> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default NotFoundPage;