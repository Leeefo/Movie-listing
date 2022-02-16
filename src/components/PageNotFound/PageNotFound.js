import React from "react";
import pnf from "../../images/pnf.jpg";

const PageNotFound = () => {
  return <div
    style={{
      "textAlign": "center",
      "height": "79vh",
      "fontSize": "8vw",
      "color": "white"
    }}
  >
    <img src={pnf} style={{
      "max-height": "79vh",
      "margin": "0px",
      "max-width": "100%"
    }} />
  </div>;
};

export default PageNotFound;
