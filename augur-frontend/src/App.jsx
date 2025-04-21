import React from 'react';
import DistributorCard from './components/DistributorCard';
import distributors from './data/distributors';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Augur Dashboard</h1>
      <div className="cards">
        {distributors.map((dist, index) => (
          <DistributorCard key={index} {...dist} />
        ))}
      </div>
    </div>
  );
}

export default App;
