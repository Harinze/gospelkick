import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-primary text-secondary rounded-lg p-8 md:p-10 lg:p-12 xl:p-14 m-4 md:m-6 lg:m-8 xl:m-10 shadow-md hover:text-black">
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{title}</h2>
    </div>
  );
};

export default Card;
