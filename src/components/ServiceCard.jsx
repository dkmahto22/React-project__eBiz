import React from 'react';

const ServiceCard = ({ title, price, link }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg border border-gray-200 text-center">
      <div className="bg-blue-900 text-white p-6">
        <h3 className="text-2xl font-bold mb-2 h-16">{title}</h3>
        <p className="text-1xl font-bold mb-4 mt-8">Packages starting from</p>
        <div>
          <h3 className="text-5xl font-bold text-orange-500">₹ {price}/-</h3>
          <p className="mt-8">(All Inclusive)</p>
        </div>
      </div>
      <div className="clear-both"></div>
      <div className="py-4">
        <a href={link} className="px-6 py-2 hover:text-blue-700">Know More</a>
      </div>
    </div>
  );
};

export default ServiceCard;





