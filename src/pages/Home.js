import React, { useEffect, useLayoutEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";

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
  const data = [
    {
      raised_money: 1200,
      goal: 3600,
      title: "Mem",
      photourl: "assets/ga1.png",
    },
    {
      raised_money: 1200,
      goal: 3600,
      title: "Mem",
      photourl: "assets/ga2.png",
    },
    {
      raised_money: 1200,
      goal: 3600,
      title: "Mem",
      photourl: "assets/help3.png",
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
            <span>ABANDONED</span>
            <span> AND</span> <span>ALONE</span>
          </p>
          <p class="banner-heading-2">
            <span>Yearning</span> <span>for a</span> <span>touch of hope</span>
          </p>
          <p class="banner-heading-3">
            Her eyes tell a story of lost innocence and quiet desperation. This
            young girl, abandoned and alone, waits for a touch of hope. With
            your support, we can give her the chance to experience the warmth
            and security every child deserves. Together, we can transform her
            silent dreams into a future full of love and possibilities.
          </p>
          <button
            onClick={() => {
              navigate("causes");
            }}
          >
            Donate Now
          </button>
        </div>
      </section>
      <section class="help-section">
        <p>
          HOW COULD <span style={{ color: "var(--red)" }}>YOU HELP ?</span>
        </p>
        <div class="help-container">
          {help.map((e) => {
            return (
              <div class="cards">
                <div class="help-img">
                  <img src="/public/assets/gold_bg.jpg" />
                </div>
                <h1>{e.title}</h1>
                <p>{e.descr}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section class="about-us">
        <div class="about-us-1">{/* <img src="assets/about.png" /> */}</div>
        <div class="about-us-2">
          <div class="about-text">
            <p class="about-heading-2">WE ARE</p>
            <p class="about-heading-2">NON-PROFIT TEAM</p>
            <p class="about-heading-3">
              We are a team of dedicated individuals, volunteers, and supporters
              who share a common vision: to alleviate suffering, promote
              equality, and uplift communities. With unwavering determination
              and a heartfelt passion for change, we have undertaken numerous
              projects and initiatives.
            </p>
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
          FEATURED <span style={{ color: "var(--red)" }}>CAUSES</span>
        </p>

        <div class="featured-container">
          {data.map((cause) => {
            return (
              <FeaturedCard
                raised={cause.raised_money}
                goal={cause.goal}
                title={cause.title}
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
          OUR <span style={{ color: "var(--red)" }}>TEAM</span>
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
