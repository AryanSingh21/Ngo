import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Contact, setContact] = useState(false);
  return (
    <footer>
      <section class="contact">
        <div class="contact-1">
          <i class="fa fa-phone" id="call" aria-hidden="true"></i>
          <p class="question">DO YOU HAVE A QUESTION?</p>
          <p class="number">+91-99206 14314</p>
        </div>
        <div class="contact-2">
          <div>
            <i class="fa fa-envelope-o" id="mail" aria-hidden="true"></i>
            <input
              type="search"
              placeholder="Enter email"
              className="text-black"
            />
          </div>
          <button
            onClick={() => {
              alert("subscribed!!!");
            }}
          >
            Subscribe
          </button>
        </div>
      </section>

      <section class="footer">
        <div class="footer-content">
          <div class="footer-about">
            <h1>OUR MISSION</h1>
            <p>
              We believe in the power of football to transform lives, unite
              communities, and inspire future generations. Our mission is to
              support and develop young talent, provide access to quality
              training facilities, and promote the values of teamwork,
              discipline, and fair play
            </p>
            <br />
            <p>
              We believe in the power of football to transform lives, unite
              communities, and inspire future generations. Our mission is to
              support and develop young talent, provide access to quality
              training facilities, and promote the values of teamwork,
              discipline, and fair play
            </p>
            <SocialIcon
              url="https://x.com/snigmayfc?s=11"
              style={{ marginTop: "4vh", marginRight: "1vw" }}
            />
            <SocialIcon
              url="https://www.facebook.com/snigmayfc?mibextid=uzlsIk"
              style={{ marginTop: "4vh", marginRight: "1vw" }}
            />
            <SocialIcon
              url=" https://youtube.com/@snigmaypunefc?si=mNsbgBePBG3VODCW"
              style={{ marginTop: "4vh", marginRight: "1vw" }}
            />
            <SocialIcon
              url=" https:// www.instagram.com/snigmaypunefc?igsh=MXQ2dTRyYzNyYXhldw=="
              style={{ marginTop: "4vh", marginRight: "1vw" }}
            />
          </div>

          <div class="footer-links">
            <h2
              class="links"
              onClick={() => {
                setLinks(!Links);
              }}
            >
              QUICK LINKS
            </h2>
            <br />
            <ul class={"footer-links-ul " + (Links && "active-links")}>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="about">About</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="causes">Causes</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="event">Events</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="news">News</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div class="gallery">
            <h2
              class="gal-btn"
              onClick={() => {
                setGallery(!Gallery);
              }}
            >
              GALLERY
            </h2>
            <div class={"gal-container " + (Gallery && "gal-container-active")}>
              <div>
                <img src="assets/foot-team-1.jpeg" />
                <img src="assets/football-2.jpeg" />
              </div>
              <div>
                <img src="assets/football-3.jpeg" />
                <img src="assets/football-4.jpeg" />
              </div>
              <div>
                <img src="assets/football-5.jpeg" />
                <img src="assets/main-football.jpg" />
              </div>
            </div>
          </div>

          <div class="contact-footer">
            <h2
              class="contact-btn"
              onClick={() => {
                setContact(!Contact);
              }}
            >
              CONTACT US
            </h2>

            <div
              class={
                "contact-container " + (Contact && "contact-container-active")
              }
            >
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-map-marker one" aria-hidden="true"></i>
                  </div>
                  <h3>Head Office</h3>
                </div>
                <div class="contact-ad">
                  <p>Krushna Colony, Rahatani, Pune</p>
                  <p>Maharashtra 411017</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-phone two" aria-hidden="true"></i>
                  </div>
                  <h3>Phone Number</h3>
                </div>
                <div class="contact-ad">
                  <p>+91 83800 02233</p>
                  <p>+91 99206 14314</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-envelope three" aria-hidden="true"></i>
                  </div>
                  <h3>Email</h3>
                </div>
                <div class="contact-ad">
                  <p>tanaya@snigmaypunefc.com</p>
                  <p>+91-99206 14314</p>
                </div>
              </div>
            </div>
          </div>
          <p class="copyright">Copyright @ 2024. Developed by Aryan Singh.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
