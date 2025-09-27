import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {
  const { name, price, info, features } = pricing;

  return (
    <div className='border bg-amber-300 rounded-2xl p-4'>
      {/* Card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h1 className="text-3xl">{price}</h1>
      </div>
      {/* Card body */}
      <div className='bg-amber-500 p-4 rounded-2xl mt-10'>
        <p>{info}</p>
        {
          features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
      </div>
    </div>
  );
};

export default PricingCard;