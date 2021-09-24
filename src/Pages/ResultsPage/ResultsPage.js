import react, { useEffect } from "react";
import axios from 'axios';
import DiagramRes from "./DiagramResult";
import Header from "../../Components/Header/Header";

const AboutPage = () => {

    const getResults = async() => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVER_ENDPOINT}/last-user-result`,
            {
              email: localStorage.getItem('email')
            }
          );
        if (res.data.statusCode === '200') {
            alert(res.data.data)
        }
    }

    useEffect(() => {
        getResults();
    }, []);

    return (
        <>
            <Header />
            <DiagramRes />
        </>
    );
}


export default AboutPage;
