"use client";
import React from "react";
import Navbar from "../Navbar";
import "../../css/About.css"
import Image from "next/image";
import office from "../../images/office.jpg";
import us from "../../images/us.png";
import gr from "../../images/gr.jpg";
import Team from "../Team";
import img1 from "../../images/galery.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about_left">
          <h1>About Us</h1>
          <h4>
          Чем закончилось приключение, увидим позже. Однако Ауда волновалась.
             она ничего не сказала.
          </h4>
          <p className="about_info">
          Что касается Паспарту, то он счел маневр мистера Фогга просто
             славный. Капитан сказал: «между одиннадцатью и двенадцатью узлами».
             и Генриетта подтвердила его предсказание. Чем закончилось приключение
             будет видно анон. Ауда встревожилась, хотя ничего не сказала. Как
             что касается Паспарту, то маневр мистера Фогга показался ему просто великолепным.
             — сказал капитан.
          </p>
          <p className="about_border">
          В первые дни они шли достаточно гладко. Море было
             не очень неблагоприятный, ветер казался неподвижным в северо-восточном направлении.</p>
          <p className="about_info">
          Что касается Паспарту, то он счел маневр мистера Фогга просто
             славный. Капитан сказал: «между одиннадцатью и двенадцатью узлами».
             и Генриетта подтвердила его предсказание. Чем закончилось приключение
             будет видно анон. Ауда встревожилась, хотя ничего не сказала. Как
             что касается Паспарту, то маневр мистера Фогга показался ему просто великолепным.
             — сказал капитан.
          </p>
        </div>
        <Image src={office} alt="" className="aboutImage" />
      </div>
      <div className="seo">
        <div className="seo_left">
          <Image src={us} alt="" />
          <div className="left_box">
            <h2>Наш генеральный директор Сэй</h2>
            <p>
            Качество никогда не бывает случайным; это всегда результат высокой
               намерение.
            </p>
          </div>
        </div>
        <Image src={gr} alt="" className="seo_img" />
        <div className="seo_center">
          <h3>Закажите тест-драйв!</h3>
          <button className="center_btn">Связаться с нами</button>
        </div>
      </div>
      <Team />
      <div className="about_images">
        <div className="image_left">
          <Image src={img1} alt="" className="about_img1" />
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
        </div>
        <div className="image_right">
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
        </div>
      </div>
      <div className="question">
        <h1>Часто задаваемые вопросы</h1>
        <div className="question_body">
          <div className="question_left">
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
              >
                <Typography>Вы предлагаете какие-либо гарантии?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Мы можем помочь с вашим планом финансирования, мы можем предложить несколько советов и рекомендаций. Уезжайте на этой машине вашей мечты, независимо от вашей кредитной истории.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Аккордеон 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Клиент очень важен, за клиентом последует клиент.
                   Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политики
                   потребности
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Клиент очень важен, за клиентом последует клиент.
                   Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политики
                   потребности
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Клиент очень важен, за клиентом последует клиент.
                   Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политики
                   потребности
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="question_right">
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Клиент очень важен, за клиентом последует клиент.
                   Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политики
                   потребности
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Клиент очень важен, за клиентом последует клиент.
                   Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политики
                   потребности
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Клиент очень важен, за клиентом последует клиент.
                   Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политики
                   потребности
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Клиент очень важен, за клиентом последует клиент.
                   Suspendisse malesuada lake ex, пусть это будет очень лестно для лео политики
                   потребности
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <button className="question_btn">Узнать больше</button>
      </div>
    </div>
  );
}
