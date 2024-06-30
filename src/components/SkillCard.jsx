import React from "react";

const SkillCard = (params) => {
  return (
    <div
      className="skill-div"
      style={{ backgroundImage: `url(${params.img})` }}
    >
      <div className="skill-content">
        <p style={{ fontSize: "1.5rem" }}>{params.title}</p>
        {/* <hr style={{ width: "100%", height: "20%", backgroundColor: "red" }} /> */}
        <h1>{params.desc}</h1>
        <button style={{ marginTop: "1.5vh" }}>Learn more</button>
      </div>
    </div>
  );
};

export default SkillCard;
