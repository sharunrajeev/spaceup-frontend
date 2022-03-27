import React from "react";
import "./style.css";
import bgimage from "../../Assets/earth.png";
import shoot from "../../Assets/shoot.png";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box texture-bg  ">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
