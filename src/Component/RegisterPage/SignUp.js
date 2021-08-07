import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ourLogo from '../../Source/images/NewLogo.png';
import RigthImage from '../ImageForLogin/ImageForLogin.js';
import PasswordInput from "../PasswordInput/PasswordInput";
import "./SignUp.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignUp = () => {
  const history = useHistory();
  const regexpEmail = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [openError, setError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [alert, setAlert] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const checkEmail = (e) => {
    if (!email.match(regexpEmail)) {
      setAlert("error");
      setErrorText(`Пример: jsmith@example.com`);
      setError(true);
    } else {
      setAlert("success");
      setErrorText(`Корректый E-mail`);
      setError(true);
    }
  };

  const checkRepeatPassword = (e) => {
    if (password !== repeatPassword) {
      setAlert("error");
      setErrorText("Пароли не совпадают!");
      setError(true);
      setRepeatPasswordError(true);
    } else {
      setAlert("success");
      setErrorText("Пароли совпадают!");
      setError(true);
      setRepeatPasswordError(false);
    }
  };

  return (
    <div className='first-page-sign-up'>
      <div className="left-first-page-sign-up">
        <div className="image-header-sign-up">
          <Link to='/' >
            <img
                src={ourLogo}
                alt="logo"/>
          </Link>
        </div>
        <p className="header-text-1">Регистрация</p>
        <div className="input-fields-sign-up">
          <TextField
            InputLabelProps={{
              shrink: true,
              className: "label"
            }}
            label="Почта"
            className="input"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => checkEmail()}
          />
        </div>
        <div className="input-fields-sign-up">
          <PasswordInput
            value={password}
            setValue={setPassword}
          />
        </div>
        <div className="input-fields-sign-up">
          <PasswordInput
            checkPassword={checkRepeatPassword}
            repeatPasswordError={repeatPasswordError}
            value={repeatPassword}
            setValue={setRepeatPassword}
            label="Повторите пароль"
          />
        </div>
        <div className="sign-up">
          <Button
            className="sign-up-btn"
            variant="outlined"
            onClick={() => history.push("/sign/up/2")}
          >
            Продолжить
          </Button>
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
        <div className="buttons-for-sign-up">
          <p>Есть аккаунт?</p>
          <Link to="/login">
            Войти
          </Link>
        </div>
      </div>
      <div className='rigth-sign-up'>
        <RigthImage />
      </div>
    </div>
  );
};

export default SignUp;
