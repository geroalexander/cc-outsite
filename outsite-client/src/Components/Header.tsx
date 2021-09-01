import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo-outsite.jpeg';

const Header = () => {
  const tabs: String[] = [
    'Book',
    'Trips',
    'Rewards',
    'Refer a Friend',
    'Membership',
  ];

  return (
    <div className="flex flex-row justify-between p-2 items-center">
      <div className="flex flex-row items-center">
        <div className="p-4 px-6 flex-shrink-0">
          <img className="max-h-5" src={logo} alt="outsite" />
        </div>
        <div className="flex flex-row justify-around">
          {tabs.map((tab) => (
            <p className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
              {tab}
            </p>
          ))}
        </div>
      </div>
      <div className="px-6">
        <FaUserCircle size={40} />
      </div>
    </div>
  );
};

export default Header;
