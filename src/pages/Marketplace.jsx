import React from 'react';
import Navbar from '../components/ui/Navbar';
import Grid from '../components/ui/Grid';

const agentsData = [
  { name: 'Agent 1', type: 'Type A', tvl: '100M', marketCap: '1B', change24h: '+5%', volume24h: '50M' },
  { name: 'Agent 2', type: 'Type B', tvl: '200M', marketCap: '2B', change24h: '-3%', volume24h: '30M' },
  // Add more agent data as needed
];

const Marketplace = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-8">
        <Grid agents={agentsData} />
      </div>
    </div>
  );
};

export default Marketplace;
