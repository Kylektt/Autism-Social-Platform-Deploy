import React, { useRef, useEffect, useMemo } from 'react';

interface BallProps {
  x: number;
  y: number;
  size: number;
  start: { x: number; y: number; size: number };
  end: { x: number; y: number };
  style: string;
  time: number;
  ttl: number;
}

class Ball {
  x: number;
  y: number;
  size: number;
  start: { x: number; y: number; size: number };
  end: { x: number; y: number };
  style: string;
  time: number;
  ttl: number;

  constructor(mouseX: number, mouseY: number, rgb: string[]) {
    this.start = {
      x: mouseX + getRandomInt(-20, 20),
      y: mouseY + getRandomInt(-20, 20),
      size: getRandomInt(1, 8),
    };
    this.end = {
      x: this.start.x + getRandomInt(-300, 300),
      y: this.start.y + getRandomInt(-300, 300),
    };
    this.x = this.start.x;
    this.y = this.start.y;
    this.size = this.start.size;
    this.style = rgb[getRandomInt(0, rgb.length - 1)];
    this.time = 0;
    this.ttl = 120;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.style;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    if (this.time <= this.ttl) {
      let progress = 1 - (this.ttl - this.time) / this.ttl;
      this.size = this.start.size * (1 - easeOutQuart(progress));
      this.x = this.x + (this.end.x - this.x) * 0.01;
      this.y = this.y + (this.end.y - this.y) * 0.01;
    }
    this.time += 0.1;
  }
}

function getRandomInt(min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

const InteractiveBalls: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const mouse = useRef({
    x: undefined as number | undefined,
    y: undefined as number | undefined,
  });

  const rgb = useMemo(
    () => [
      'rgb(245, 59, 87)',  // Vibrant Red
      'rgb(32, 191, 107)', // Lush Green
      'rgb(255, 196, 0)',  // Bright Yellow
      'rgb(55, 90, 250)',  // Electric Blue
      'rgb(255, 110, 64)', // Vivid Orange
      'rgb(199, 0, 57)',   // Deep Pink
      'rgb(130, 88, 159)', // Muted Purple
      'rgb(41, 50, 65)',   // Dark Navy
      'rgb(255, 177, 66)', // Goldenrod
      'rgb(106, 76, 147)'  // Soft Violet
    ],
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeReset = () => {
      if (!canvasRef.current) return;
      const { width, height } = canvasRef.current.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    };
    window.addEventListener('resize', resizeReset);
    resizeReset();

    const animationLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      ballsRef.current.forEach((ball, index) => {
        ball.update();
        ball.draw(ctx);
      });

      ballsRef.current = ballsRef.current.filter(ball => ball.time <= ball.ttl);
      requestAnimationFrame(animationLoop);
    };

    const mousemove = (e: MouseEvent) => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      for (let i = 0; i < 2; i++) {
        ballsRef.current.push(new Ball(mouseX, mouseY, rgb));
      }
    };

    window.addEventListener('resize', resizeReset);
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseout', () => {
      mouse.current.x = undefined;
      mouse.current.y = undefined;
    });

    animationLoop();

    return () => {
      window.removeEventListener('resize', resizeReset);
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseout', () => {
        mouse.current.x = undefined;
        mouse.current.y = undefined;
      });
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-balls" />;
};

export default InteractiveBalls;
