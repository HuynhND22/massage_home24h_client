import React from 'react';
import './FullScreenSpinner.css';
import { HashLoader } from 'react-spinners';

const FullScreenSpinner = () => {
  return (
    <div className="spinner-overlay">
      <HashLoader color="#fff" size={100} />
    </div>
  );
};

export default FullScreenSpinner;
