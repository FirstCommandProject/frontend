import { useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import date from 'date-and-time';
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
    const [answered, setAnswered] = useState([])
    const [questionBE, setQuestionBE] = useState([{}]);
    const [session, setSession] = useState({});
    const [idQuestion, setIdQuestion] = useState(undefined);
    const history = useHistory();
    
    const getQuestion = async() => {
        if (Object.keys(session).length !== 0) {
            const res = await axios.post(
                `${process.env.REACT_APP_SERVER_ENDPOINT}/relevant-question`, 
                {
                    answered,
                    weights: session.weights
                }
            );
            if (res.data.statusCode === '200') {
                setQuestionBE([res.data.data]);
                setAnswered((prev) => [...prev, res.data.data.id]);
                setIdQuestion(res.data.data.id);
            }
        }
    }

    const getDefaultSession = async () => {
        const res = await axios.get(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/default-session`
        );
        if (res.data.statusCode === '200') {
            setSession(JSON.parse(res.data.data));
        }
    }
    console.log(session);
    // get first data
    useEffect(() => {
        getDefaultSession();
    }, [])

    // get question
    useEffect(() => {
        getQuestion();
    }, [session]);

    // check auth
    if (!localStorage.getItem('user')) {
        return <Redirect to="/login"/>
    }

    const OnChangeAnswer = (event) => {
      setValue(event.target.value);
    };

    const addAnswer = async (index) => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/answer-question`,
            {
                session,
                answer: +value,
                id: idQuestion
            }
        );
        if (res.data.statusCode === '200') {
            setValue('');
            setSession(res.data.data);
        }
    }

    const onFinish = async () => {
        setValue('');
        const finishRes = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/last-user-answer`,
            {
                session: session.weights,
                time: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
                email: localStorage.getItem("email")
            }
        );
        if (finishRes.data.statusCode === '200') {
            history.push("/my/results");
        }
    }
    
    return (
        <>
            <Header/>
            {questionBE.length && questionBE.map((question, index) => 
                <div className="question" key={`question-${index}`}>
                    <div className="question-number">
                        Вопрос номер {answered.length}
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