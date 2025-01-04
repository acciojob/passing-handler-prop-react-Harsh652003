import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { classname, label, background } = config;

  return (
    <button
      className={classname} // Use classname from config
      onClick={() => selectNextBackground({ background })}
    >
      {label} {/* Use label from config */}
    </button>
  );
};

export default ColourSelector;
