// Test file to check if database connection is working
// Open by URL: http://localhost:5173/fetch-agents
import React, { useEffect, useState } from 'react';

const FetchAgents = () => {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('/api/agents');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAgents();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Agents</h1>
      <h3>Agent Name - Ticket</h3>
      <ul>
        {agents.map((agent, index) => (
          <li key={index}>
            {agent.name} - {agent.ticket}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAgents;