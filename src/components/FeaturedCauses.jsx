import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedCauses = () => {
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   const getCauses = async () => {
  //     const res = await axios.get("http://localhost:8000/causes");
  //     console.log(res.data);
  //     setdata(res.data);
  //   };
  //   getCauses();
  // }, []);
  return (
    <>
      {/* <p>
        FEATURED <span style={{ color: "maroon" }}>CAUSES</span>
      </p> */}

      <div
        className="m-div-1"
        style={{ backgroundImage: "none", transform: "none" }}
      >
        <div
          className="div-1-img"
          style={{ height: "40vh", width: "30vw", backgroundColor: "aqua" }}
        ></div>
        <p style={{ width: "50%", color: "black" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse
          provident asperiores veritatis est minima saepe minus quia adipisci
          illum repudiandae eaque error quaerat laborum aspernatur, dolorum ut
          doloribus? Corrupti?
        </p>
      </div>
    </>
  );
};

export default FeaturedCauses;
