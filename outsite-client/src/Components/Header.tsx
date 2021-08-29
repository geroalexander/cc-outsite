import React from 'react';

const Header = () => {
  const tabs = ['Book', 'Trips', 'Rewards', 'Refer a Friend', 'Membership'];

  return (
    <div className="flex flex-row p-3">
      <h1>OUTSITE</h1>
      {tabs.map((tab) => (
        <p className="p-1">{tab}</p>
      ))}
      <h1>LOGO</h1>
    </div>
  );
};

export default Header;
