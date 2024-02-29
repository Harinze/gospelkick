import React from 'react';
import logo from '../assets/gospel.jpeg';

const Navbar = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm); 
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-2 bg-primary text-secondary w-full">
      <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-lg font-semibold hover:text-custom">Gospelkick Store</span>
      </div>
      <div className="flex w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-3 py-1 rounded border border-gray-400 mr-2 mb-2 sm:mb-0 text-black"
          style={{ width: '100%' }} 
          onChange={handleSearchChange}
        />
        <button className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary text-black rounded cursor-pointer hover:bg-custom">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


