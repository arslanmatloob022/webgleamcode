import React, { useEffect, useState } from 'react';
import './Loader.css'; // Import the styles (you can name it Loader.css)

const Loader = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    createCircles();
    const intervalId = setInterval(updateCircles, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  const createCircles = () => {
    const newCircles = [];
    for (let i = 0; i < 6; i++) {
      newCircles.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random()}s`,
      });
    }
    setCircles(newCircles);
  };

  const updateCircles = () => {
    const updatedCircles = circles.map((circle) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random()}s`,
    }));
    setCircles(updatedCircles);
  };

  return (
    <div className="loader-container">
      <div className="loader">
        {circles.map((circle, index) => (
          <div key={index} style={{ ...circle }}></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
