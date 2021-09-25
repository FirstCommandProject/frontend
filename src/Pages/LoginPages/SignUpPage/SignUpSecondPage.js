import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

import appLogo from '../../../assets/branding/logo.png';

import SignImage from '../../../Components/SignImage/SignImage.js';
import "./SignUpSecondPage.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignUpSecondPage = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [university, setUniversity] = useState("");
  const [openError, setError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [alert, setAlert] = useState("");

  const registerUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/registration`,
        {
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
          firstName,
          secondName,
          thirdName,
          university,
        }
      );
      if (res && res.data && res.data.statusCode && res.data.statusCode === '200') {
        localStorage.clear();
        setAlert("success");
        setErrorText("Пользователь успешно создан!");
        setError(true);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("email", JSON.stringify(res.data.data?.email));
        history.push("/my/test");
      }
    } catch (e) {
      setAlert("Ошибка");
      setErrorText("Такой пользователь уже существует!");
      setError(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  return (
    <div className='second-page-sign-up'>
      <div className="left-second-page-sign-up">
        <div className="image-header-sign-up">
          <Link to='/' >
            <img
                src={appLogo}
                alt="logo"/>
          </Link>
        </div>
        <p className="header-text-1">Регистрация</p>
          <div className="input-fields-sign-up-second-page">
            <TextField
              InputLabelProps={{
                shrink: true,
                className: "label"
              }}
              label="Имя"
              className="input"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-fields-sign-up-second-page">
            <TextField
              InputLabelProps={{
                shrink: true,
                className: "label"
              }}
              label="Фамилия"
              className="input"
              variant="outlined"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
          <div className="input-fields-sign-up-second-page">
            <TextField
              InputLabelProps={{
                shrink: true,
                className: "label"
              }}
              label="Отчество(необязательно)"
              className="input"
              variant="outlined"
              value={thirdName}
              onChange={(e) => setThirdName(e.target.value)}
            />
          </div>
          <div className="input-fields-sign-up-second-page">
            <TextField
              InputLabelProps={{
                shrink: true,
                className: "label"
              }}
              label="ВУЗ"
              className="input"
              variant="outlined"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
          <div className="sign-up-second-page">
            <Button
              className="sign-up-btn-second-page"
              variant="outlined"
              onClick={() => registerUser()}
            >
              Создать аккаунт
            </Button>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={openError}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert severity={alert}>{errorText}</Alert>
          </Snackbar>
      </div>
      <div className='rigth-sign-up'>
        <SignImage/>
      </div>
    </div>
  );
};

export default SignUpSecondPage;
