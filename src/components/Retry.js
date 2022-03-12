import React from 'react';
import './components.css';

/**
 * Component to show error message when fail to load data from api service.
 * Show a Retry button to try again
 */
const Retry = ({retry}) => {
  return <div className="retry">Error while loading data <button onClick={() => retry()}>Retry</button></div> 
};

export default Retry;