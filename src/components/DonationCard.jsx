import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationCard = ({ User }) => {
  const [Donation, setDonation] = useState("");
  const navigate = useNavigate();
  console.log(User, "don");
  const currentDate = () => {
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString().split("T")[0];

    console.log(formattedDate);
    return formattedDate;
  };
  // const donate = async () => {
  //   const res = await axios.post(
  //     "http://localhost:8000/donations/add",
  //     {
  //       username: User.username,
  //       Amount: Donation,
  //       Donation_Date: currentDate(),
  //     },
  //     { withCredentials: true }
  //   );
  //   alert("thanks for donating");
  //   setDonation("");
  // };
  return (
    <>
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
    </>
  );
};

export default DonationCard;
