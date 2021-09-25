import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import date from 'date-and-time';
import axios from "axios";
import { Button } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Redirect } from 'react-router-dom'
import SkeletonHelper from '../../Components/Skeleton/Skeleton';
import Header from "../../Components/AuthorizedHeader/AuthorizedHeader";
import './ExamPage.scss';

const NotFoundPage = () => {
    const [value, setValue] = useState('');
    const [answered, setAnswered] = useState([])
    const [questionBE, setQuestionBE] = useState([{}]);
    const [session, setSession] = useState({});
    const [idQuestion, setIdQuestion] = useState(undefined);
    const [totalCount, setTotalCount] = useState(0);
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
            if (res && res.data && res.data.statusCode && res.data.statusCode === '200') {
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
        if (res && res.data && res.data.statusCode && res.data.statusCode === '200') {
            setSession(JSON.parse(res.data.data));
            // setTotalCount(res.data.totalCount);
            setTotalCount(2)
        }
    }

    // get first data
    useEffect(() => {
        getDefaultSession();
    }, [])

    // get question
    useEffect(() => {
        if ((answered.length < totalCount) || answered.length === 0) {
            getQuestion();
        } else {
            setAnswered((prev) => [...prev, {}]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        if (res && res.data && res.data.statusCode && res.data.statusCode === '200') {
            setValue('');
            setSession(res.data.data);
            setQuestionBE([{}]);
        }
    }

    const onFinish = async () => {
        setValue('');
        setQuestionBE([{}]);
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/last-user-answer`,
            {
                session: session.weights,
                time: date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
                email: localStorage.getItem("email")
            }
        );
        if (res && res.data && res.data.statusCode && res.data.statusCode === '200') {
            history.push("/my/results");
        }
    }
    
    return (
        <>
            <Header/>
            {questionBE.length && questionBE.map((question, index) => 
                <div className="question" key={`question-${index}`}>
                    <div className="question-number">
                        {answered.length <= totalCount && 
                            <span>
                                Вопрос номер {answered.length} из {totalCount}
                            </span>
                        }
                    </div>
                    <div className="question-text">
                        {question.title
                        ? question.title 
                        : <SkeletonHelper />
                        }
                    </div>
                    {answered.length <= totalCount && 
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
                    }
                    <div className="buttons">
                        <Button className="button-finish" onClick={onFinish}>
                            Закончить
                        </Button>
                        {answered.length <= totalCount && <Button className="button-next" onClick={() => addAnswer(index)}>
                            Далее
                        </Button>
                        }
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