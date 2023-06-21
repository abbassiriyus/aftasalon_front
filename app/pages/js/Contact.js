import React from "react";
("use  client");
import "../css/Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Head from "next/head";

export default function Contact() {
  return (
    <div>
        <Head>
        <title>BaraCar-домашняя страница</title>
      </Head>
      <Navbar />
      <div className="contact">
        <div className="contact_left">
          <h1>Связаться с нами</h1>
          <p className="contact_info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            temporibus nobis placeat vero sunt ut explicabo fugit unde cumque
            architecto.
          </p>
          <p className="contact_address"> Западная 12-я улица Нью-Йорк, штат Нью-Йорк, США</p>
          <a className="contact_tel" href="tel: +998931513776">
            (123) <span> 456-78901</span>
          </a>
          <div className="email_box">
            <MdEmail className="email_icon" />
            <a href="mailto: asliddinumirzoqov3@gmail.com">
              support@vehica.com
            </a>
          </div>
          <div className="feat_left contact_icons">
            <p>Подписывайтесь на нас</p>
            <a href="#" className="iconBox ">
              <FaFacebookF className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaTwitter className="icon icon4" />
            </a>
            <a href="#" className="iconBox">
              <FaInstagram className="icon icon4" />
            </a>
          </div>
        </div>
        <div className="contact_right">
          <div className="inputs_top">
            <input type="text" className="contact_inp" placeholder="Имя" />
            <input type="text" className="contact_inp" placeholder="Электронная почта*" />
            <input type="text" className="contact_inp" placeholder="Телефон" />
          </div>
          <textarea
            rows={10}
            placeholder="Сообщение*"
            className="contact_textarea"
          ></textarea>
          <div className="inputs_bottom">
            <label className="container">
            я принимаю <a href="#!"> политика конфиденциальностиOne</a>
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <button className="contact_btn">Отправлять</button>
          </div>
        </div>
      </div>
      <div className="iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.724080796138!2d69.36349267638798!3d41.29310917131201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5f1f3347f27%3A0x9a5455de3245cf1f!2z0KjQutC-0LvQsCDihJYyODI!5e0!3m2!1sru!2s!4v1685612426244!5m2!1sru!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

