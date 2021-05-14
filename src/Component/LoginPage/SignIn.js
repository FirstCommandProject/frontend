import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import PasswordInput from "../PasswordInput/PasswordInput";
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
  const [mailError, setMailError] = useState(false);

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
      setMailError(true);
    } else {
      setMailError(false);
      setAlert("success");
      setErrorText(`Корректый E-mail`);
      setError(true);
    }
  };

  let checkDisabled = !email.match(regexpEmail);

  return (
    <div className="body">
      <h2 className="header-text">Вход</h2>
      <div className="main">
          <div className="sign-in">
          <div className="input-fields">
            <p className="input-text">Почта</p>
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
            <p className="input-text">Пароль</p>
            <PasswordInput
              value={password}
              setValue={setPassword}
            />
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
      </div>
      <div className="buttons">
        <Link to="/registration">
          <Button className="create-acc-btn">Зарегистрироваться</Button>
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
  );
};

export default SignIn;
