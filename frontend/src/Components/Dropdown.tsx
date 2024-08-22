import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Edit', 'Delete'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-transparent min-w-full border border-gray-300 text-wheat-700 px-4 py-2 rounded-md shadow-sm focus:outline-none"
        onClick={toggleDropdown}
      >
        :
      </button>
      {isOpen && (
        <ul className="absolute mt-1 min-w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
