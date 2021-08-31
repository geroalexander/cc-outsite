import React, { useState } from 'react';

const QuantityMenu = () => {
  const [showList, setShowList] = useState(false);
  const [guestQuantity, setGuestQuantity] = useState('One Guest');

  const handleClickOne = () => {
    setShowList(!showList);
    setGuestQuantity('One Guest');
  };
  const handleClickTwo = () => {
    setShowList(!showList);
    setGuestQuantity('Two Guest');
  };

  return (
    <div className="flex flex-col flex-1 p-1">
      <span className="text-sm leading-5 font-medium text-gray-700">
        Guests
      </span>
      <div className="justify-between flex flex-col flex-1 h-10 relative">
        <button
          onClick={() => setShowList(!showList)}
          className="h-10 mr-0.5 my-1 relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm"
        >
          {guestQuantity}
        </button>
        <div className="w-full">
          <ul
            className={
              !showList
                ? 'hidden'
                : 'absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 border focus:outline-none sm:text-sm'
            }
          >
            <li className="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 flex-1 hover:bg-gray-200">
              <button onClick={handleClickOne} value="One Guest">
                One Guest
              </button>
            </li>
            <li className="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 flex-1 hover:bg-gray-200">
              <button onClick={handleClickTwo} value="Two Guest">
                Two Guest
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuantityMenu;
