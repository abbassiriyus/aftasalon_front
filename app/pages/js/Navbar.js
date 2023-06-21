"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import "../css/Navbar.css";
import axios from "axios";
import url from "./Host";

export default function Navbar() {
  const [count, setCount] = useState(false);
  const [user, setUser] = useState((localStorage.getItem("onemen")?JSON.parse(localStorage.getItem("onemen")):false))
 

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "ru",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  




  return (
    <div className="navbar">
     
      <div
        className="modalMenu"
        style={count === true ? { display: "flex" } : { display: "none" }}
      >
        <MdClose className="close_btn" onClick={() => setCount(false)} />
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">
           Главная
          </a>
        </div>
        <div className="a_box">
          <a href="/cars" className="a_fff a_mobile">
          Поиск
          </a>
        </div>
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">
          Листинг
          </a>
        </div>
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">
          Страницы
          </a>
        </div>
        <div className="a_box">
          <a href="#" className="a_fff a_mobile">
          Более
          </a>
        </div>
      </div>
      <BiMenuAltLeft className="menuLeftIcon" onClick={() => setCount(true)} />
      <div className="navbar_left">
        <a href="/" className="logo">
          <Image src={logo} width={200} height={"auto"} alt="" />
        </a>
        <a href="/" className="a_fff">
          Главная
        </a>
        <a href="/cars" className="a_fff">
        Поиск
        </a>
        <a href="/about" className="a_fff">
        о нас
        </a>
        <a href="#" className="a_fff">
        Страницы
        </a>
        <a href="#" className="a_fff">
        Более
        </a>
      </div>
      
      {user ? (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              <a href="/userpage" className="a_fff">
                {user.username}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar_right">
            <div className="loginIn">
              <AiOutlineUser className="user_icon" />
              <a href="/login" className="a_fff">
              Войти в систему
              </a>
            </div>
            <a href="/login" className="a_fff">
            Регистранция
            </a>
          </div>
        </div>
      )}
      {/* <div className='navbar_right'>
        <div className='loginIn'>
          <AiOutlineUser className='user_icon' />
          <a href='/login' className='a_fff'>
            Login In
          </a>
        </div>  
        <a href='/login' className='a_fff'>
          Register
        </a>
      </div> */}
      <HiUsers className="usersIcon" />
      <div id="google_translate_element"></div>
    </div>
  );
}
