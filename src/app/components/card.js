
import React from 'react';

const Card = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div>
      <p> name:{name}</p>
      <p >Age: {age}</p>
      <p >Roll Number: {rollNumber}</p>
      <p >Class: {studentClass}</p>
    </div>
  );
};

export default Card;
