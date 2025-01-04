import React from "react";

const ColourSelector = ({ config, selectNextBackground }) => {
  const handleClick = () => {
    selectNextBackground({ background: config.background });
  };

  return (
    <button
      className={config.classname}
      onClick={handleClick}
      style={{
        background: config.background,
        color: "white",
        padding: "10px 20px",
        margin: "5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {config.label}
    </button>
  );
};

export default ColourSelector;
