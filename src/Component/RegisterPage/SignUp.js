import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ourLogo from '../../Source/images/NewLogo.jpg';
import rigthImage from '../../Source/images/signInImage.jpg';
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

  const registerUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/registration`,
        {
          email,
          password,
        }
      );
      setAlert("success");
      setErrorText("The user is successfully created!");
      setError(true);
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/my");
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

  let checkDisabled =
    password !== repeatPassword ||
    !email.match(regexpEmail);

  return (
    <div className='first-page-sign-up'>
      <div className="left-first-page-sign-up">
        <div className="image-header-sign-up">
          <Link to='/' >
            <img
                className="our-icon"
                src={ourLogo}
                alt="logo"/>
          </Link>
        </div>
        <p className="header-text-1">Регистрация</p>
          <div className="input-fields-sign-up">
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Почта"
              type="email"
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
            />
          </div>
          <div className="sign-up">
            <Button
              className="sign-up-btn"
              variant="outlined"
              disabled={checkDisabled}
              onClick={() => registerUser()}
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
        <img
          src={rigthImage}
          alt="rigth-sign-up"/>
      </div>
    </div>
  );
};

export default SignUp;
