import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import PasswordInput from "../PasswordInput/PasswordInput";
import "./SignUp.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignUp = () => {
  const history = useHistory();
  const regexpEmail = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [university, setUniversity] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [openError, setError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [alert, setAlert] = useState("");
  const [mailError, setMailError] = useState(false);
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);

  const registerUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/registration`,
        {
          university,
          userName,
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
      setMailError(true);
    } else {
      setMailError(false);
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
    <div className="body">
      <p className="header-text-1">Регистрация</p>
      <div className="main">
        <div className="sign-up">
          <div className="input-fields">
            <p className="input-text-1">Почта</p>
            <TextField
              type="email"
              className={mailError ? "input-error" : "input"}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => checkEmail()}
            />
            {mailError && (
              <p className="input-text-error">Некорректная почта</p>
            )}
          </div>
          <div className="input-fields">
            <p className="input-text-1">Пароль</p>
            <PasswordInput
              value={password}
              setValue={setPassword}
            />
          </div>
          <div className="input-fields">
            <p className="input-text-1">Повторите пароль</p>
            <PasswordInput
              checkPassword={checkRepeatPassword}
              repeatPasswordError={repeatPasswordError}
              value={repeatPassword}
              setValue={setRepeatPassword}
            />
            {repeatPasswordError && (
              <p className="input-text-error">
                Пароли не совпадают
              </p>
            )}
          </div>
          <div className="input-fields">
            <p className="input-text-1">ФИО</p>
            <TextField
              className={"input"}
              variant="outlined"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-fields">
            <p className="input-text-1">ВУЗ</p>
            <TextField
              className={"input"}
              variant="outlined"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              onBlur={(e) => setUniversity(e.target.value)}
            />
          </div>
          <div className="login-1">
            <Button
              className="sign-up-btn"
              variant="outlined"
              disabled={checkDisabled}
              onClick={() => registerUser()}
            >
              Зарегистрироваться
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
        </div>
      </div>
      <div className="buttons">
        <Link to="/login">
          <Button className="text">
            Вход
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
