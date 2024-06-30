import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Stats = ({ donation, User }) => {
  const [UserDonations, setUserDonations] = useState([]);

  // useEffect(() => {
  //   const getDonations = async () => {
  //     const res = await axios.get(
  //       `http://localhost:8000/donations/${User.session.username}`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     setUserDonations(res.data.reverse());
  //     console.log(User.session.username, "donation");
  //   };
  //   getDonations();
  // });
  return (
    <div className="w-full p-4">
      <div
        className="m-div-1"
        style={{ backgroundImage: "none", transform: "none" }}
      >
        <p style={{ width: "50%", color: "black" }}>
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
    </div>
  );
};

export default Stats;
