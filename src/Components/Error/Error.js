import React from 'react';
import './Error.css';

const Error = ({ error }) => {
  return (
    <>
      <h2 className="header-text">Error:</h2>
      <h3>Sorry! Unable to get snacks. Please try again.</h3>
    </>
  )
}

export default Error;