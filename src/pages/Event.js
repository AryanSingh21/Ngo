import Card from "../components/Card";
import EventsCards from "../components/EventsCards";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Events = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);

  const [data, setdata] = useState([
    {
      title: "Football league",
      photo_url: "assets/football-1.jpg",
      date: "12/07/24",
      address: "Brtish School, sector 75",
      city: "pune",
    },
  ]);
  const [Ldata, setLdata] = useState([
    {
      title: "Football league",
      photo_url: "/assets/football-1.jpg",
      date: "12/07/24",
      address: "Brtish School, sector 75",
      city: "pune",
    },
  ]);
  // useEffect(() => {
  //   const getEvents = async () => {
  //     const res = await axios.get("http://localhost:8000/events");
  //     console.log(res.data);
  //     setdata(res.data);
  //   };
  //   getEvents();
  //   const getEventLatest = async () => {
  //     const res = await axios.get("http://localhost:8000/events/latest");
  //     console.log(res.data);
  //     setLdata(res.data);
  //   };
  //   getEventLatest();
  // }, []);
  return (
    <div className="w-full mb-[120px]">
      <div className="w-full h-20 bg-yellow-500 flex items-center justify-center">
        <h1
          className="text-white font-sans text-5xl"
          style={{ fontWeight: "bold" }}
        >
          Events
        </h1>
      </div>
      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center relative">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906969727!2d73.69815309340441!3d18.524870610788827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719377051405!5m2!1sen!2sin"
        ></iframe>
        <div className="absolute m-auto left-3 md:top-21 md:left-5">
          <div className="w-[120px] bg-white border-2 border-black  flex flex-col">
            <img src={Ldata[0].photo_url} className="w-full" />
            <h3
              className="text-center  font-bold mt-2"
              style={{ color: "maroon" }}
            >
              Upcoming Event
            </h3>

            <p className="text-center p-1">
              {Ldata[0].title}
              <br /> {Ldata[0].date.slice(0, 10)} {Ldata[0].date.slice(11, 16)}{" "}
              <br /> {Ldata[0].address}
              <br />
              {Ldata[0].city}
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-5xl mt-5">
        Upcoming{" "}
        <span className="text-center text-5xl mt-5" style={{ color: "maroon" }}>
          Events
        </span>
      </h1>
      <EventsCards data={data} />
    </div>
  );
};

export default Events;
