import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./Component/RegisterPage/SignUp";
import LoginPage from "./Component/LoginPage/SignIn";
import Main from './Component/MainPart/MainPart.js';
import Description from './Component/DescriptionPage/Description.js';
import AllInstitute from './Component/AllInstitute/Instite';
import DescriptionFaculty from './Component/DescriptionFaculty/Faculty';
import PageNotFound from "./Component/PageNotFound/PageNotFound";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/sign/in">
                    <RegisterPage />
                </Route>
                <Route path='/departments'>
                    <AllInstitute />
                </Route>
                <Route path='/my/faculty/'>
                    <DescriptionFaculty />
                </Route>
                <Route path='/about'>
                    <Description />
                </Route>
                <Route path='/main'>
                    <Main />
                </Route>
                <Route path='/'>
                    <PageNotFound />
                </Route>
                <Redirect from='' to='/' />
            </Switch>

        </div>
    );
};

export default App;
