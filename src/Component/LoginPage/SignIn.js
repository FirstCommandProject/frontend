import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import PasswordInput from "../PasswordInput/PasswordInput";
import ourLogo from '../../Source/images/NewLogo.jpg';
import RigthImage from '../ImageForLogin/ImageForLogin.js';
import "./SignIn.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignIn = () => {
  const history = useHistory();
  const regexpEmail = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openError, setError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [alert, setAlert] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/login`,
        {
          email,
          password,
        }
      );
      if (res.data.isAdmin) {
        localStorage.setItem("admin", JSON.stringify(res.data));
        history.push("/admin_page");
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push("/home_page");
      }
    } catch (e) {
      setAlert("Ошибка");
      setErrorText("Неправильный E-mail или пароль");
      setError(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const checkEmail = (e) => {
    if (!email.match(regexpEmail)) {
      setAlert("error");
      setErrorText(`Например: jsmith@example.com`);
      setError(true);
    } else {
      setAlert("success");
      setErrorText(`Корректый E-mail`);
      setError(true);
    }
  };

  let checkDisabled = !email.match(regexpEmail);

  return (
    <div className='all'>
      <div className="left">
        <div>
          <Link to='/' >
            <img
              className="image-header"
              src={ourLogo}
              alt="logo"/>
          </Link>
        </div>
        <h2 className="header-text">Вход в личный кабинет</h2>
        <div className="sign-in">
          <div className="input-fields">
            <TextField
              label="Почта"
              className="input"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
                className: "label"
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => checkEmail()}
            />
          </div>
          <div className="input-fields">
            <PasswordInput
              value={password}
              setValue={setPassword}
            />
          </div>
          <div className='memory'>
            <div className="left-box">
              <input type="checkbox" className='checkbox'/>
              <p className='left-text-checkbox'>Запомнить меня</p>
            </div>
            <div className="forgot-password">
              <Link to="/forgot_password">
                Забыли пароль?
              </Link>
            </div>
          </div>
          <div className="login">
            <Button
              className="login-btn"
              variant="outlined"
              disabled={checkDisabled}
              onClick={() => loginUser()}
            >
              Вход
            </Button>
          </div>
        </div>
        <div className="buttons">
          <p>Нет аккаунта?</p>
          <Link to="/sign/up">
            Создать аккаунт
          </Link>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity={alert}>{errorText}</Alert>
        </Snackbar>
      </div>
      <div className='rigth'>
        <RigthImage />
      </div>
    </div>
  );
};

export default SignIn;
