import React, { useEffect } from 'react';
import './LoaderComponent.css';

const LoaderComponent = () => {
  useEffect(() => {
    const loaderContainer = document.querySelector('.loader-container');
    for (let i = 0; i < 4; i++) {
      const div = document.createElement('div');
      div.className = 'loader';
      loaderContainer.appendChild(div);
    }
  }, []);

  return (
    <div className="loader-container">
      {/* Loader elements will be dynamically created here */}
    </div>
  );
};

export default LoaderComponent;
