import React from 'react';

/**
 * Component to show error message when fail to load data from api service.
 * Show a Retry button to try again
 */
const Retry = ({retry}) => {
  return <div>Error while loading data <button onClick={() => retry()}>Retry</button></div> 
};

export default Retry;