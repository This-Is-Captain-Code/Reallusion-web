import * as React from 'react';
import { useState } from 'react';
import { GridIcon, ListIcon } from 'lucide-react';

const Grid = ({ agents }) => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setViewMode('grid')}
          className={`button ${viewMode === 'grid' ? 'active' : ''} mr-4`}
        >
          <GridIcon className="w-5 h-5" /> {/* Icon */}
          Grid View
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`button ${viewMode === 'list' ? 'active' : ''}`}
        >
          <ListIcon className="w-5 h-5" /> {/* Icon */}
          List View
        </button>
      </div>
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' : 'flex flex-col space-y-4'}>
        {agents.map((agent, index) => (
          <div key={index} className={`bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-4 rounded-md shadow-md flex ${viewMode === 'grid' ? 'h-auto' : 'flex-row'}`}>
            <img src="/assets/walle.png" alt="Agent" className="w-16 h-16 mr-4" />
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-center space-x-4">
                <h2 className="text-lg font-bold text">{agent.name}</h2>
                <p className="label">Type: {agent.type}</p>
              </div>
              {viewMode === 'list' ? (
                <div className="flex justify-between space-x-4 mt-2">
                  <p className="label">TVL: {agent.tvl}</p>
                  <p className="label">Market Cap: {agent.marketCap}</p>
                  <p className="label">24h Change: {agent.change24h}</p>
                  <p className="label">24h Volume: {agent.volume24h}</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between space-x-4 mt-2">
                    <div className='flex-1'>
                      <p className="label">TVL</p> 
                      <p className='text'>{agent.tvl}</p>
                    </div>
                    <div className='flex-1'>
                      <p className="label">Market Cap</p>
                      <p className='text'>{agent.marketCap}</p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-4 mt-2">
                    <div className='flex-1'>
                      <p className="label">24h Change</p>
                      <p className='text'>{agent.change24h}</p>
                    </div>
                    <div className='flex-1'>
                      <p className="label">24h Volume</p>
                      <p className='text'>{agent.volume24h}</p>
                    </div>
                  </div>
                </>
              )}
              <div className="pt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;