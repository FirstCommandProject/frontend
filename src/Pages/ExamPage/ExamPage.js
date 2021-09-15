import { useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';
import Header from "../../Components/AuthorizedHeader/AuthorizedHeader";
import { Button } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './ExamPage.scss';

const NotFoundPage = () => {
    const [value, setValue] = useState('');
    const [countQuestion, setCountQuestion] = useState(1)
    const [questionBE, setQuestionBE] = useState([{}]);
    const history = useHistory();

    // get first data
    useEffect(() => {
        getDefaultSession();
        getQuestion();
    }, [])

    // get question
    useEffect(() => {
        getQuestion();
    }, [countQuestion]);

    // check auth
    if (!localStorage.getItem('user')) {
        return <Redirect to="/login"/>
    }

    const getQuestion = async() => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/test`, 
            {
                id: countQuestion
            }
          );
        setQuestionBE([res.data.data]);
    }

    const getDefaultSession = async () => {
        const res = await axios.get(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/default-session`
        );
        if (res.data.statusCode === '200') {
            localStorage.setItem("session", res.data.data);
        }
    }

    const OnChangeAnswer = (event) => {
      setValue(event.target.value);
    };

    const addAnswer = async (index) => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/answer-question`,
            {
                session: localStorage.getItem('session'),
                answer: +value,
                id: countQuestion
            }
        );
        if (res.data.statusCode === '200') {
            setCountQuestion((prev) => prev + 1);
            setValue('');
            localStorage.setItem("session", res.data.data);
        }
    }

    const onFinish = async () => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/answer-question`,
            {
                session: localStorage.getItem('session'),
                answer: +value,
                id: countQuestion
            }
        );
        if (res.data.statusCode === '200') {
            history.push("/my/results");
            setValue('');
        }
        history.push('/my/results');
    }
    
    return (
        <>
            <Header/>
            {questionBE.length && questionBE.map((question, index) => 
                <div className="question" key={`question-${index}`}>
                    <div className="question-number">
                        Вопрос номер {countQuestion}
                    </div>
                    <div className="question-text">
                        {question.title
                        ? question.title 
                        : <div>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    }
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla dictum at tortor adipiscing sapien, at ornare sit pretium. */}
                    </div>
                    <div className="question-radio">
                    <FormControl component="fieldset">
                        <RadioGroup value={value} onChange={OnChangeAnswer}>
                            <FormControlLabel selected value="1" control={<Radio />} label="Да" />
                            <FormControlLabel value="0.5" control={<Radio />} label="Скорее да" />
                            <FormControlLabel value="0" control={<Radio />} label="Не знаю" />
                            <FormControlLabel value="-0.5" control={<Radio />} label="Скорее нет" />
                            <FormControlLabel value="-1" control={<Radio />} label="Нет" />
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