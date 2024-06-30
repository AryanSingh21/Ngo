import React, { useEffect, useLayoutEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";
import SkillCard from "../components/SkillCard";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // const change = () => {
  //   const elem = document.getElementById("chng");
  //   elem.setAttribute("src", "assets/help1.png");
  // };
  // const [data, setdata] = useState([]);
  // const [team, setteam] = useState([]);
  const [help, sethelp] = useState([]);
  const [reviews, setreviews] = useState([]);
  // raised={cause.raised_money}
  // goal={cause.goal}
  // title={cause.title}
  // img={cause.photourl}
  const nums = [
    {
      num: 188,
      name: "Human Impacted",
    },
    {
      num: 90 + "+",
      name: "Collaborators",
    },
    {
      num: 130,
      name: "Donations",
    },
    {
      num: 50 + "+",
      name: "Communities",
    },
  ];
  const data = [
    {
      raised_money: 1200,
      goal: "We aim to provide comprehensive football training to underprivileged children, helping them develop their skills and reach their full potential",
      title: "Skill development",
      photourl: "assets/football-4.jpeg",
    },
    {
      raised_money: 1200,
      goal: "Through football, we strive to create a more inclusive society, breaking down barriers based on socio-economic backgrounds",
      title: "Social Inclusion",
      photourl: "assets/football-2.jpeg",
    },
    {
      raised_money: 1200,
      goal: "By equiping these children with life skills and self confidence, we aim to empower them to overcome challenges and succeed in all aspects of life",
      title: "Empowerment",
      photourl: "assets/football-3.jpeg",
    },
  ];
  const team = [
    {
      first_name: "John",
      last_name: "Doe",
      role: "Member",
      avatar: "assets/gal4.png",
    },
    {
      first_name: "John",
      last_name: "Doe",
      role: "Member",
      avatar: "assets/gal4.png",
    },
    {
      first_name: "John",
      last_name: "Doe",
      role: "Member",
      avatar: "assets/gal4.png",
    },
  ];
  // const team

  const navigate = useNavigate();
  return (
    <div>
      <section class="banner-1">
        <div class="diagonal-div"></div>
        {/* <div class="diagonal-div-2"></div> */}

        <div class="banner-text">
          <p class="banner-heading-1">
            <span>SNIGMAY</span>
            <span style={{ color: "maroon" }}> FOUNDATION</span>
          </p>
          <p class="banner-heading-2">
            <span>Together</span> <span>we can</span> <span>Make a</span>
            <span style={{ color: "maroon", border: "none" }}> Difference</span>
          </p>
          <p class="banner-heading-3">
            Welcome to Snigmay Foundation, where passion meets purpose on the
            football field. We believe in the power of football to transform
            lives, unite communities, and inspire future generations. Our
            mission is to support and develop young talent, provide access to
            quality training facilities, and promote the values of teamwork,
            discipline, and fair play
          </p>
          <button
            onClick={() => {
              navigate("/about");
            }}
          >
            About Us
          </button>
        </div>
      </section>
      <section class="help-section">
        {/* <p>
          HOW COULD <span style={{ color: "var(--red)" }}>YOU HELP ?</span>
        </p> */}
        <p style={{ color: "maroon" }}>WELCOME TO SNIGMAY FOUNDATION</p>
        <div className="border-div">
          <h1 style={{ fontSize: "25px" }}>
            Pune based non-pofit organisation focusing on nation building
            through youth development, sports and women empowerment. We believe
            in the power of football to transform lives of under privileged
            children in India
          </h1>
        </div>
      </section>
      <section class="about-us">
        <div class="about-us-1">{/* <img src="assets/about.png" /> */}</div>
        <div class="about-us-2">
          <div class="about-text">
            <p class="about-heading-2">GIVE HELP</p>
            <p class="about-heading-2" style={{ fontSize: "40px" }}>
              TO THOSE WHO NEED IT
            </p>
            <div className="num-div">
              {nums.map((data) => {
                return (
                  <div className="num-div-inner">
                    <p>{data.num}</p>
                    <h1>{data.name}</h1>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                navigate("causes");
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>
      <section class="feature-section">
        <p>
          WHAT WE <span style={{ color: "maroon" }}>DO</span>
        </p>

        <div class="featured-container">
          {data.map((cause) => {
            return (
              <SkillCard
                title={cause.title}
                desc={cause.goal}
                img={cause.photourl}
              />
            );
          })}
        </div>
      </section>

      <Slider className="w-full flex overflow-hidden">
        {reviews.map((e) => {
          return (
            <section class="testimonials">
              <h1>WHAT TEAM SAYS</h1>

              <div class="dialog">
                <img src="assets/quotes.png" />
                <p style={{ marginBottom: "30px" }}>{e.review_text}</p>

                <div class="triangle"></div>
                <div className="w-full 0  flex iconT justify-center items-center p-6">
                  <img src={e.photoUrl} className="rounded-full" />
                </div>
                <div>
                  <span>
                    <span style={{ color: "var(--red)" }}>
                      {e.first_name} {e.last_name}
                    </span>{" "}
                    | {e.role}
                  </span>
                </div>
              </div>
            </section>
          );
        })}
        {/* <section class="testimonials">
          <h1>WHAT PEOPLE SAY</h1>

          <div class="dialog">
            <img src="assets/quotes.png" />
            <p style={{ marginBottom: "30px" }}>
              People say that life is a journey, and along the way, we encounter
              joys, sorrows, and countless moments that shape our stories. What
              we say and do, the connections we make, and the impact we leave on
              the world are all part of this beautiful narrative
            </p>

            <div class="triangle"></div>
            <span>
              <span style={{ color: "var(--red)" }}>JOHN DOE</span> | NGO
            </span>
          </div>

          <div class="test-photos">
            <img src="assets/test1.png" />
            <img src="assets/test2.png" />
            <img src="assets/test3.png" />
            <img src="assets/test4.png" class="display" />
            <img src="assets/test5.png" class="display" />
          </div>
        </section> */}
      </Slider>
      <section class="volunteer">
        <p class="title">
          OUR <span style={{ color: "maroon" }}>TEAM</span>
        </p>

        <div class="help-container">
          {team.map((data) => {
            return (
              <div class="cards">
                <div class="help-img">
                  <img src={data.avatar} />
                </div>
                <h1>
                  {data.first_name} {data.last_name}
                </h1>
                <p>{data.role}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
