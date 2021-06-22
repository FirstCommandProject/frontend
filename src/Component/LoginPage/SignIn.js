import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import PasswordInput from "../PasswordInput/PasswordInput";
import ourLogo from '../../Source/images/NewLogo.jpg';
import rigthImage from '../../Source/images/signInImage.jpg';
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
        <div className="image-header">
          <Link to='/' >
            <img
                className="our-icon"
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
            <input type="checkbox" className='checkbox'/>
            <p className='left-text-checkbox'>Запомнить меня</p>
            <Link to="/sign/in">
              Забыли пароль?
            </Link>
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
          <Link to="/sign/in">
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
        <img
          src={rigthImage}
          alt="rigth"/>
      </div>
    </div>
  );
};

export default SignIn;
