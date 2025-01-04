import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState({ background: "white" });

  const handleClick = () => {
    applyColor(setBackground); // Call the parent's applyColor function
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={{
        ...background,
        width: "100px",
        height: "100px",
        margin: "10px",
        border: "1px solid black",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default Selection;
