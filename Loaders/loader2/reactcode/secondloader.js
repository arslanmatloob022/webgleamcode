import React, { useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  useEffect(() => {
    const loader = document.getElementById("loader");

    function createBalls() {
      for (let i = 0; i < 5; i++) {
        const ball = document.createElement("div");
        ball.style.width = `${Math.floor(Math.random() * 30) + 20}px`;
        ball.style.height = `${Math.floor(Math.random() * 30) + 20}px`;
        ball.style.borderRadius = "50%";
        ball.style.background =
          "linear-gradient(to right, #ff7e5f, #feb47b, #ffcc6b, #c5d86d)";
        ball.style.position = "absolute";
        ball.style.top = `${Math.random() * 100}vh`;
        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.animationDelay = `${Math.random()}s`;
        ball.style.animation = "bounceBall 2s ease-in-out infinite";
        loader.appendChild(ball);
      }
    }

    function updateBalls() {
      const balls = document.querySelectorAll(".loader div");
      balls.forEach((ball) => {
        ball.style.width = `${Math.floor(Math.random() * 30) + 20}px`;
        ball.style.height = `${Math.floor(Math.random() * 30) + 20}px`;
        ball.style.top = `${Math.random() * 100}vh`;
        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.animationDelay = `${Math.random()}s`;
      });
    }

    createBalls();
    const interval = setInterval(updateBalls, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader" id="loader"></div>
    </div>
  );
};

export default Loader;
