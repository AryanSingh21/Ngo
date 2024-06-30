import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseGlobal from "../hooks/UseGlobal";

const Header = ({ path, User }) => {
  const [Toggle, setToggle] = useState("");
  console.log(User, "hello");
  return (
    <header style={{ backgroundColor: "#800000", color: "white" }}>
      <div class="logo-container">
        <Link to="/">{/* <img src="assets/ribbon.png" class="logo" /> */}</Link>
        <Link to="/">
          <div class="logo-text">
            {/* <h1
              class="logo-header"
              style={{ color: "#fff548", borderBlockColor: "white" }}
            >
              SNIGMAY
            </h1>
            <p style={{ color: "white" }}>FOUNDATION</p> */}
            <img
              src="assets/logo-2.jpg"
              alt=""
              className="logo-img"
              style={{ height: "18vh", width: "8vw", borderRadius: "10vw" }}
            />
          </div>
        </Link>
      </div>

      <div class="ham-btn">
        {Toggle === "active" ? (
          <i
            class="fa fa-times"
            onClick={() => {
              setToggle("");
            }}
          ></i>
        ) : (
          <i
            class="fa fa-solid fa-bars"
            onClick={() => {
              setToggle("active");
            }}
          ></i>
        )}
      </div>
      <div
        class={"header-links " + Toggle}
        onClick={() => {
          setToggle("");
        }}
      >
        <ul className="scroll-auto" style={{ color: "whitesmoke" }}>
          <Link to="/" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{
                  color: path == "/" ? "#fff548" : "whitesmoke",
                  // fontSize: "1.2rem",
                }}
              >
                Home
              </a>
            </li>
          </Link>
          <Link to="/about" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{
                  color: path == "/about" ? "#fff548" : "whitesmoke",
                  // fontSize: "1.2rem",
                }}
              >
                About
              </a>
            </li>
          </Link>
          <Link to="/causes" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{
                  color: path == "/causes" ? "#fff548" : "whitesmoke",
                  // fontSize: "1.2rem",
                }}
              >
                Our Programs
              </a>
            </li>
          </Link>
          <Link to="/events" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{
                  color: path == "/events" ? "#fff548" : "whitesmoke",
                  // fontSize: "1.2rem",
                }}
              >
                Event
              </a>
            </li>
          </Link>
          <Link to="/news" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{
                  color: path == "/news" ? "#fff548" : "whitesmoke",
                  // fontSize: "1.2rem",
                }}
              >
                News
              </a>
            </li>
          </Link>
          <Link to="contact" className="w-[100%] lg:w-auto">
            <li>
              <a
                href="#"
                style={{
                  color: path == "/contact" ? "#fff548" : "whitesmoke",
                  // fontSize: "1.2rem",
                }}
              >
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
