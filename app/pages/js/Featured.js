import React, { useEffect } from "react";
import Image from "next/image";
import car from "../images/6.jpg";
import "../css/Featured.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";
import url from "./Host";

export default function Featured() {
  const [cars, setCars] = React.useState([]);
  const [images, setImages] = React.    useState([]);

  const [price, setPrice] = React.useState([]);

  useEffect(() => {
    axios.get(`${url}/api/cars_get/`).then((res) => {
    
       axios.get(`${url}/api/images/`)
      .then((res1) => {
       for (let i = 0; i < res.data.length; i++) {
        res.data[i].image=[]
       for (let j = 0; j < res1.data.length; j++) {
        if(res.data[i].id==res1.data[j].car){
          res.data[i].image.push(res1.data[j])
        }
      }}
    setTimeout(() => {
       setCars(res.data) 
    }, 10);
    
    
    })
      .catch((err) => {
        console.log(err, "salom");
      });
    });

   
  },
   []);

  function getData2(key) {
    console.log(key);
    localStorage.setItem("oneproduct", JSON.stringify(key));
    window.location = "/onecar";
  }

  return (
    <div className="featured">
      <h5 className="featured_info">Удобный выбор</h5>
      <h2 className="featured_title">Избранные объявления</h2>
      <div className="featured_body">
        {cars.map((item, key) => {
          if (key == 0) {
            return (<div
                className="featured_left"
                onClick={() => {
                  getData2(cars[0]);
                }}
              >
             {item.image.length>0?(<Image width={100} height={100}
     src={item.image[0].image}  alt="a" className="featured_img" />):(<Image width={100} height={100}
     src={car}  alt="a" className="featured_img" />)}
                <div className="featured_bottom">
                  <h3 className="featured_name">{item.name}</h3>
                  <div className="featured_box">
                    <p className="feat_year">{item.year}</p>
                    <p className="feat_auto">{item.gearbox.name}</p>
                    <p className="feat_pet">{item.fuel_sort.name}</p>
                    <p className="feat_p">{item.sale}%</p>
                    <h4 className="feat_price">{item.price}.sum</h4>
                  </div>
                </div>
              </div>
            );
          } 
        })}
         <div className="featured_right">
            {cars.map((item,key)=>{
          if (key > 0 && key<=4) {
            return (
              <div
                className="feat_card"
                onClick={() => {
                  getData2(item);
                }}
              >
                {item.image.length>0?(<Image width={100}  height={100}
     src={item.image[0].image}  alt="a" className="featured_img" />):(<Image width={100}  height={100}
     src={car}  alt="a" className="featured_img" />)}
                <div className="featCard_bottom">
                  <h3 className="featCard_name">{item.name}</h3>
                  <h4 className="featCard_price">{item.price}.sum</h4>
                  <div className="featCard_box">
                    <p className="featCard_year">{item.year}</p>
                    <p className="featCard_auto">{item.gearbox.name}</p>
                    <p className="featCard_pet">{item.fuel_sort.name}</p>
                  </div>
                </div>
                
              </div>
            );
          } 

            })}   
                  
                </div>




      </div>
      <div className="feat_bottom">
        <div className="feat_left">
          <p>Подписывайтесь на нас</p>
          <a href="#" className="iconBox">
            <FaFacebookF className="icon" />
          </a>
          <a href="#" className="iconBox">
            <FaTwitter className="icon" />
          </a>
          <a href="#" className="iconBox">
            <FaInstagram className="icon" />
          </a>
        </div>
        <p className="feat_tit">Подписывайтесь на нас</p>
        <button
          className="Btnbody feat_btn"
          onClick={() => (window.location = "/cars")}
        >
          Просмотр новостей
        </button>
      </div>
    </div>
  );
}
