import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import DiagramRes from "../../Components/DiagramResult/DiagramResult";
import Header from "../../Components/Header/Header";
import AuthorizedHeader from "../../Components/AuthorizedHeader/AuthorizedHeader";
import './ResultsPage.css';

const AboutPage = () => {
    const [result, setResult] = useState([]);
    const history = useHistory();

    const getResults = async() => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/last-user-result`,
            {
              email: localStorage.getItem('email')
            }
          );
        if (res && res.data && res.data.statusCode && res.data.statusCode === '200') {
            if (res.data.data && res.data.data.scores) {
                setResult(JSON.parse(res.data.data?.scores));
            } else {
                history.push('/my/test')
            }
        }
    }

    useEffect(() => {
        getResults();
    }, []);

    // check auth
    if (!localStorage.getItem('user')) {
        return <Redirect to="/login"/>
    }

    return (
        <>
            {localStorage.getItem('user')? <AuthorizedHeader /> :<Header />}
            <div className="content-result">
                {result.length
                ? <DiagramRes scores={result} />
                : <CircularProgress />}
            </div>
        </>
    );
}


export default AboutPage;
