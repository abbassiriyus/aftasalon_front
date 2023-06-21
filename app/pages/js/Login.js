"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Login.css";
import axios from "axios";
import url from "./Host";
// import img from "./img/logo.png"
// import galochka from "./img/Group 62.png"
// import google from "./img/Group 61.png"
// import galoch from "./img/Group 63.png"
// import fon from "./img/image 22.png"
// import fon1 from "./img/image 22 (1).png"

export default function Login() {
  const page = 1;
  const [data, setData] = React.useState(1);
  const [staff, setStaff] = React.useState();
  const [user, setUser] = useState([]);

  const plus = () => {
    setData(data + 1);
  };
  const minus = () => {
    if (data > 0) {
      setData(data - 1);
    }
  };
  function agerr(id) {
    setStaff(id);
  }
  function postUser() {
    console.log(staff);
    var usernamee = document.querySelector(".Phone").value;
    var data = new FormData();
    // data.append("username", document.getElementById("userNameEmail").value);
    data.append("username", document.getElementById("userNameEmail").value);
    data.append("phone", usernamee);
    data.append("password", document.querySelector(".Password").value);
    data.append("is_staff", false);
    axios
      .post(`${url}/auth/register/`, data)
      .then((res) => {
        localStorage.setItem("Token_user", res.data.access);
        alert("success");
        window.location = "/userpage";
        localStorage.setItem("username", usernamee);
      })
      .catch((err) => {
        alert(err);
      });
  }
  function userLogin() {
    var datta = new FormData();
    var usernamee = document.querySelector(".userNameEmail").value;
    datta.append("phone", usernamee);
    datta.append("password", document.querySelector(".userPassword").value);
    axios.post(`${url}/auth/login/`, datta)
      .then((res) => {
        // res.data.map(item => {
        // if (res.data.username === asd && res.data.password === asd2) {
        // alert("zo`r");
        console.log(res.data);
        localStorage.setItem('username', usernamee)
        JSON.stringify(localStorage.setItem("Token_user", res.data.access))
        window.location = "/userpage";
        // } else {
        //   alert('To`g`ri kelmadi')
        // }
        // })
      });
  }

  return (
    <div>
      <Navbar />

      <center>
        <div className="form">
          <div className="all-button">
            <button
              style={
                data === 1
                  ? { background: "#ff4605", border: "1px solid gray;" }
                  : { background: "white" }
              }
              onClick={() => {
                setData(1);
              }}
            >
              Авторизоваться
            </button>
            <button
              style={
                data === 2
                  ? { background: "#ff4605", border: "10px solid gray ;" }
                  : { background: "white" }
              }
              onClick={() => {
                setData(2);
              }}
            >
              Регистранция
            </button>
          </div>
          <div className="asos_form">
            {data === 1 ? (
              <div className="login">
                <h2>Войдите в свой аккаунт</h2>
                <h3>Добро пожаловать! Войдите в свой аккаунт</h3>
                <div className="inputs">
                  <input
                    className="userNameEmail"
                    id='userNameEmail'
                    type="text"
                    placeholder="Электронная почта или имя пользователя"
                  />
                  <input
                    className="userPassword"
                    type="password"
                    placeholder="Пароль"
                  />
                </div>
                <div className="checkbox">
                  {/* <div className="check2">
                    <input id="cb1" type="checkbox" />
                    <p>Remember</p>
                  </div> */}
                  <a className="forgot" href="#">
                  Забыли пароль?
                  </a>
                </div>
                <button onClick={() => userLogin()}>Login</button>
              </div>
            ) : (
              <div className="registratsiya">
                <h2>Регистранция</h2>
                <h3>Создайте новую учетную запись сегодня.</h3>
                <div className="inputs">
                  <input
                    type="text"
                    className="Username"
                    placeholder="Имя*"
                  />
                  {/* <input type="text" className="Email" placeholder="Email*" /> */}
                  <input type="text" className="Phone" placeholder="Телефон*" />
                  <input
                    type="password"
                    className="Password"
                    placeholder="Пароль*"
                  />
                  {/* <div className="checkbox1">
                    <div className="check">
                      <input onClick={() => agerr(false)}  id="cb1" type="radio" className="radio" name="radio" />
                      <p>Private seller</p>
                    </div>
                    <div className="check">
                      <input onClick={() => agerr(true)} id="cb1" className="radio2" type="radio" name="radio" />
                      <p>Business seller</p>
                    </div>
                  </div> */}
                </div>
                {/* <div className="checkbox1">
                  <div className="check2">
                    <input id="cb1" type="checkbox" />
                    <p>I accept the</p>
                  </div>
                  <a className="privacy" href="#">
                    privacy policy
                  </a>
                </div> */}
                <button onClick={() => postUser()}>Регистранция</button>
              </div>
            )}
          </div>
        </div>
      </center>
      {/* <Footer /> */}
    </div>
  );
}
