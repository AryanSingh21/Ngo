import React from "react";
import "../App.css";
import Card from "../components/Card";
import AboutCard from "../components/AboutCard";
import axios from "axios";
import { useState } from "react";

const About = () => {
  // const [data, setdata] = useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      img: "assets/building.png",
      txt: "Residential Setup",
    },
    {
      img: "assets/football-field.png",
      txt: "Playing Facility",
    },
    {
      img: "assets/teacher.png",
      txt: "Tech-driven Training",
    },
    {
      img: "assets/med.png",
      txt: "Medical Set-Up",
    },
    {
      img: "assets/jersey.png",
      txt: "Kit and Equipments",
    },
  ];
  // React.useEffect(() => {
  //   const getMilestones = async () => {
  //     const res = await axios.get("http://localhost:8000/milestones", {
  //       responseType: "json",
  //     });
  //     console.log(res);
  //     setdata(res.data);
  //   };
  //   getMilestones();
  // }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="about-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter  font-sans">About Us</h1>
          <p className="text-gray-200">
            Join our football academy, where over 100 talented players thrive!
            Our scholarship program supports players from diverse backgrounds,
            guiding them to excellence on the field and in life. With two
            modules Grassroots for beginners and Elite for professional
            readiness we ensure comprehensive development. From physical skills
            to educational support, we nurture every aspect of a child's growth.
            Enroll now and unleash your potential!
          </p>
        </div>
      </div>
      <div className="border-div" style={{ marginTop: "5vw" }}>
        <h1 style={{ fontSize: "25px" }}>
          Pune based non-pofit organisation focusing on nation building through
          youth development, sports and women empowerment. We believe in the
          power of football to transform lives of under privileged children in
          India
        </h1>
      </div>
      <div className="milestone-div">
        <h1 style={{ fontSize: "3.5rem" }}>Our Milestones</h1>
        <div className="m-div-1">
          <p style={{ width: "50%" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse
            provident asperiores veritatis est minima saepe minus quia adipisci
            illum repudiandae eaque error quaerat laborum aspernatur, dolorum ut
            doloribus? Corrupti?
          </p>
          <div
            className="div-1-img"
            style={{ height: "40vh", width: "30vw", backgroundColor: "aqua" }}
          ></div>
        </div>
        <div className="m-div-2">
          <div
            className="div-2-img"
            style={{ height: "40vh", width: "30vw", backgroundColor: "aqua" }}
          ></div>
          <p style={{ width: "50%" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse
            provident asperiores veritatis est minima saepe minus quia adipisci
            illum repudiandae eaque error quaerat laborum aspernatur, dolorum ut
            doloribus? Corrupti?
          </p>
        </div>
        <div className="m-div-3">
          <p style={{ width: "50%" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse
            provident asperiores veritatis est minima saepe minus quia adipisci
            illum repudiandae eaque error quaerat laborum aspernatur, dolorum ut
            doloribus? Corrupti?
          </p>
          <div
            className="div-3-img"
            style={{ height: "40vh", width: "30vw", backgroundColor: "aqua" }}
          ></div>
        </div>
      </div>

      <div className="infra-div">
        <h1 style={{ fontSize: "3rem" }}>Infastructure Development</h1>
        <div className="card-div">
          {data.map((card) => {
            return (
              <div className="carder">
                <img src={card.img} alt="" />
                <p>{card.txt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
