import React from 'react';
import { SearchIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex justify-between items-center">
      <div className="flex items-center relative">
        <SearchIcon className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="button">Portfolio</button>
        <button className="button button-primary">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
