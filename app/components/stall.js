import React from 'react';
import Image from "next/image";

const Stall = ({image, unit, name})=>{
    return (
      <div>
         < Image
        src = {image}
        alt={name}
        width={500}
        height={300}
      />
      <div>{unit} </div>
      <div>{name} </div>
      </div>
    );
};

export default Stall;