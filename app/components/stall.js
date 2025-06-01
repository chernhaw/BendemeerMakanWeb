import React from 'react';

const Stall = ({ image, unit, name }) => {
  return (
    <div>
      <img
        src={`${image}`}
        alt={name}
        width={500}
        height={300}
      />
      <div>{unit}</div>
      <div>{name}</div>
    </div>
  );
};

export default Stall;
