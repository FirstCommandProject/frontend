import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ourLogo from '../../Source/images/NewLogo.jpg';
import RigthImage from '../ImageForLogin/ImageForLogin.js';
import "./RestorePassword.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const RestorePassword = () => {
  const history = useHistory();
  const regexpEmail = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [email, setEmail] = useState("");
  const [openError, setError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [alert, setAlert] = useState("");

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

  return (
    <div className='restore-password'>
      <div className="left-restore-password">
        <div className="image-header-restore-password">
          <Link to='/' >
            <img
              src={ourLogo}
              alt="logo"/>
          </Link>
        </div>
        <p className="header-text-1">Забыли пароль?</p>
        <div className="input-fields-restore-password">
          <TextField
            InputLabelProps={{
              shrink: true,
              className: "label"
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
        <div className="restore-password-for-button">
          <Button
            className="restore-password-btn"
            variant="outlined"
            onClick={() => history.push("/sign/up/2")}
          >
            Восстановить пароль
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
        <div className="buttons-for-restore-password">
          <p>Нет аккаунта?</p>
          <Link to="/sign/up">
            Создать аккаунт
          </Link>
        </div>
      </div>
      <div className='rigth-restore-password'>
        <RigthImage />
      </div>
    </div>
  );
};

export default RestorePassword;
