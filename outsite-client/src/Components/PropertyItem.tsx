import React from 'react';

const PropertyItem = ({ property }) => {
  return (
    <div className="flex flex-col">
      <div className="aspect-w-4 aspect-h-3 bg-cover bg-no-repeat bg-cover">
        <img className="rounded-md" src={property.wfContent.heroImage} alt="" />
      </div>
      <div className="py-2">
        <h4 className="text-lg leading-6 font-medium text-gray-900">
          {property.wfContent.name}
        </h4>
        <p className="text-sm leading-5 text-gray-600">
          {property.wfContent.houseName}
        </p>
      </div>
    </div>
  );
};

export default PropertyItem;
