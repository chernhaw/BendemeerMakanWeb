import React from 'react';

interface StallProps {
  image: string;
  unit: string;
  name: string;
}

const Stall: React.FC<StallProps> = ({ image, unit, name }) => {
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