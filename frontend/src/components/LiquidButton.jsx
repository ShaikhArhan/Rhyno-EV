import React, { useEffect, useRef } from 'react';
import "../LiquidButton.css"
export const LiquidButton = () => {
  const canvasRef = useRef(null);
  const pointsA = useRef([]);
  const pointsB = useRef([]);
  const points = 8;
  const viscosity = 20;
  const mouseDist = 70;
  const damping = 0.05;
  const showIndicators = false;
  let mouseX = 0;
  let mouseY = 0;
  let relMouseX = 0;
  let relMouseY = 0;
  let mouseLastX = 0;
  let mouseLastY = 0;
  let mouseDirectionX = 0;
  let mouseDirectionY = 0;
  let mouseSpeedX = 0;
  let mouseSpeedY = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mouseX < e.pageX) mouseDirectionX = 1;
      else if (mouseX > e.pageX) mouseDirectionX = -1;
      else mouseDirectionX = 0;

      if (mouseY < e.pageY) mouseDirectionY = 1;
      else if (mouseY > e.pageY) mouseDirectionY = -1;
      else mouseDirectionY = 0;

      mouseX = e.pageX;
      mouseY = e.pageY;

      relMouseX = mouseX - canvasRef.current.offsetLeft;
      relMouseY = mouseY - canvasRef.current.offsetTop;
    };

    const handleMouseSpeed = () => {
      mouseSpeedX = mouseX - mouseLastX;
      mouseSpeedY = mouseY - mouseLastY;

      mouseLastX = mouseX;
      mouseLastY = mouseY;

      setTimeout(handleMouseSpeed, 50);
    };

    const addPoints = (x, y) => {
      pointsA.current.push(new Point(x, y, 1));
      pointsB.current.push(new Point(x, y, 2));
    };

    const Point = function (x, y, level) {
      this.x = this.ix = 50 + x;
      this.y = this.iy = 50 + y;
      this.vx = 0;
      this.vy = 0;
      this.cx1 = 0;
      this.cy1 = 0;
      this.cx2 = 0;
      this.cy2 = 0;
      this.level = level;
    };

    Point.prototype.move = function () {
      this.vx += (this.ix - this.x) / (viscosity * this.level);
      this.vy += (this.iy - this.y) / (viscosity * this.level);

      const dx = this.ix - relMouseX;
      const dy = this.iy - relMouseY;
      const relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

      if ((mouseDirectionX > 0 && relMouseX > this.x) || (mouseDirectionX < 0 && relMouseX < this.x)) {
        if (relDist > 0 && relDist < 1) {
          this.vx = (mouseSpeedX / 4) * relDist;
        }
      }
      this.vx *= 1 - damping;
      this.x += this.vx;

      if ((mouseDirectionY > 0 && relMouseY > this.y) || (mouseDirectionY < 0 && relMouseY < this.y)) {
        if (relDist > 0 && relDist < 1) {
          this.vy = (mouseSpeedY / 4) * relDist;
        }
      }
      this.vy *= 1 - damping;
      this.y += this.vy;
    };

    const renderCanvas = () => {
      const context = canvasRef.current.getContext('2d');
      const canvas = canvasRef.current;

      const animate = () => {
        requestAnimationFrame(animate);

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < pointsA.current.length; i++) {
          pointsA.current[i].move();
          pointsB.current[i].move();
        }

        const gradientX = Math.min(Math.max(mouseX - canvas.offsetLeft, 0), canvas.width);
        const gradientY = Math.min(Math.max(mouseY - canvas.offsetTop, 0), canvas.height);
        const distance = Math.sqrt((gradientX - canvas.width / 2) ** 2 + (gradientY - canvas.height / 2) ** 2) /
          Math.sqrt((canvas.width / 2) ** 2 + (canvas.height / 2) ** 2);

        const gradient = context.createRadialGradient(gradientX, gradientY, 300 + 300 * distance, gradientX, gradientY, 0);
        gradient.addColorStop(0, '#102ce5');
        gradient.addColorStop(1, '#E406D6');

        const groups = [pointsA.current, pointsB.current];

        groups.forEach((points, j) => {
          context.fillStyle = j === 0 ? '#1CE2D8' : gradient;

          context.beginPath();
          context.moveTo(points[0].x, points[0].y);

          for (let i = 0; i < points.length; i++) {
            const p = points[i];
            const nextP = points[i + 1] || points[0];
            p.cx1 = (p.x + nextP.x) / 2;
            p.cy1 = (p.y + nextP.y) / 2;

            context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
          }

          context.fill();
        });

        if (showIndicators) {
          context.fillStyle = '#000';
          context.beginPath();
          pointsA.current.forEach(p => context.rect(p.x - 1, p.y - 1, 2, 2));
          context.fill();

          context.fillStyle = '#f00';
          context.beginPath();
          pointsA.current.forEach(p => {
            context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
            context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
          });
          context.fill();
        }
      };

      animate();
    };

    const initButton = () => {
      const button = document.querySelector('.btn-liquid');
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      const canvas = canvasRef.current;
      canvas.width = buttonWidth + 100;
      canvas.height = buttonHeight + 100;

      let x = buttonHeight / 2;
      for (let j = 1; j < points; j++) {
        addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
      }
      addPoints(buttonWidth - buttonHeight / 5, 0);
      addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
      addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
      for (let j = points - 1; j > 0; j--) {
        addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
      }
      addPoints(buttonHeight / 5, buttonHeight);
      addPoints(-buttonHeight / 10, buttonHeight / 2);
      addPoints(buttonHeight / 5, 0);

      renderCanvas();
    };

    document.addEventListener('mousemove', handleMouseMove);
    handleMouseSpeed();
    initButton();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="btn-liquid">
        <button type="button">
      <span className="inner">Liquid button ?</span>
      <canvas ref={canvasRef}></canvas>
      </button>
    </div>
  );
};

// export default LiquidButton;
