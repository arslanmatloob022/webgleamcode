//JSX
import React, { useEffect, useState } from 'react';
import './FireAnimation.css';

const FireAnimation = () => {
  const [flames, setFlames] = useState([]);

  useEffect(() => {
    createFlames();
  }, []);

  const createFlames = () => {
    const numberOfFlames = 50;
    const newFlames = [];

    for (let i = 0; i < numberOfFlames; i++) {
      newFlames.push({
        size: Math.random() * 50 + 20,
        sway: Math.random() * 40 - 20,
        flicker: Math.random() * 10 + 5,
      });
    }

    setFlames(newFlames);
  };

  return (
    <div className="fire-animation">
      <h3>Candle Light Animation</h3>
      <div className="fire">
        {flames.map((flame, index) => (
          <div
            className="flame"
            key={index}
            style={{
              top: `${flame.sway}px`,
              height: `${flame.size}px`,
              animationDuration: `${flame.flicker / 10}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FireAnimation;

//CSS
.fire-animation {
  position: relative;
  width: 100%;
  height: 93vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: #000;
  overflow: hidden;
}

.fire {
  position: relative;
  width: 100px;
  height: 200px;
  background: linear-gradient(to top, #ff8f00, transparent);
  border-radius: 10% 10% 0 0;
  animation: flicker 1s infinite alternate;
}

.flame {
  top: -50px;
  width: 12px;
  height: 100px;
  background-color: #ff8f00;
  box-shadow: 1px 1px 6px 2px #ff8f00;
  border-radius: 50% 50% 0 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
  mix-blend-mode: lighten;
}
.fire-animation h3 {
  z-index: 1;
  position: absolute;
  color: #fff;
}
@keyframes flicker {
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1.1);
  }
}

@media screen and (max-width: 678px) {
  .fire {
    width: 100px;
    height: 120px;
  }
  .flame {
    width: 12px;
    height: 80px;
  }
}