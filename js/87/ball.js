(function () {
    'use strict';
    const btn = document.querySelector("#addBallBtn").addEventListener("click",requestAnimationFrame)
    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const RADIUS = 20;
    let x = RADIUS;
    let y = RADIUS;
    let dx = 10;
    let dy = 10;

    function drawBall() {
      context.clearRect(0, 0, canvas.width, canvas.height); 
      context.beginPath();
      context.arc(x, y, RADIUS, 0, Math.PI * 2);
      context.fill();
      x += dx;
      y += dy;

      if (x < RADIUS || x > canvas.width - RADIUS) {
        dx = -dx;
      }

      if (y < RADIUS || y > canvas.height - RADIUS) {
        dy = -dy;
      }

      requestAnimationFrame(drawBall); 
    }
    drawBall()
    
    

  }());
  