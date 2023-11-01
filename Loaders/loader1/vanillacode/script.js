document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  function createCircles() {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      const circle = document.createElement("div");
      circle.className = "loader";
      circle.style.top = `${Math.random() * 100}%`;
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.animationDelay = `${Math.random()}s`;
      circles.push(circle);
      loader.appendChild(circle);
    }
  }

  function updateCircles() {
    const circles = document.querySelectorAll(".loader");
    circles.forEach((circle) => {
      circle.style.top = `${Math.random() * 100}%`;
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.animationDelay = `${Math.random()}s`;
    });
  }

  createCircles();
  setInterval(updateCircles, 1500);
});
