import React from "react";
import { RotatingSquare } from "react-loader-spinner";

function Spinner() {
  return (
    <RotatingSquare
      height="100"
      width="100"
      color="#46504B"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{ position: "fixed", top: "50%", left: "50%" }}
      visible={true}
    />
  );
}

export default Spinner;
