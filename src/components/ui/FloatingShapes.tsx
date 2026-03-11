import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  size: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  speedRotX: number;
  speedRotY: number;
  speedRotZ: number;
  type: "cube" | "octahedron" | "ring" | "pyramid";
  opacity: number;
}

function drawCube(ctx: CanvasRenderingContext2D, size: number, rotX: number, rotY: number, rotZ: number) {
  const s = size / 2;
  const vertices = [
    [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
    [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
  ];
  const edges = [
    [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],
  ];
  const projected = vertices.map(([x, y, z]) => {
    let [rx, ry, rz] = [x, y, z];
    // Rotate X
    let ty = ry * Math.cos(rotX) - rz * Math.sin(rotX);
    let tz = ry * Math.sin(rotX) + rz * Math.cos(rotX);
    ry = ty; rz = tz;
    // Rotate Y
    let tx = rx * Math.cos(rotY) + rz * Math.sin(rotY);
    tz = -rx * Math.sin(rotY) + rz * Math.cos(rotY);
    rx = tx; rz = tz;
    // Rotate Z
    tx = rx * Math.cos(rotZ) - ry * Math.sin(rotZ);
    ty = rx * Math.sin(rotZ) + ry * Math.cos(rotZ);
    return [tx, ty];
  });
  edges.forEach(([a, b]) => {
    ctx.beginPath();
    ctx.moveTo(projected[a][0], projected[a][1]);
    ctx.lineTo(projected[b][0], projected[b][1]);
    ctx.stroke();
  });
}

function drawOctahedron(ctx: CanvasRenderingContext2D, size: number, rotX: number, rotY: number, rotZ: number) {
  const s = size / 2;
  const vertices = [[0,-s,0],[s,0,0],[0,0,s],[-s,0,0],[0,0,-s],[0,s,0]];
  const edges = [[0,1],[0,2],[0,3],[0,4],[5,1],[5,2],[5,3],[5,4],[1,2],[2,3],[3,4],[4,1]];
  const projected = vertices.map(([x, y, z]) => {
    let [rx, ry, rz] = [x, y, z];
    let ty = ry * Math.cos(rotX) - rz * Math.sin(rotX);
    let tz = ry * Math.sin(rotX) + rz * Math.cos(rotX);
    ry = ty; rz = tz;
    let tx = rx * Math.cos(rotY) + rz * Math.sin(rotY);
    tz = -rx * Math.sin(rotY) + rz * Math.cos(rotY);
    rx = tx; rz = tz;
    tx = rx * Math.cos(rotZ) - ry * Math.sin(rotZ);
    ty = rx * Math.sin(rotZ) + ry * Math.cos(rotZ);
    return [tx, ty];
  });
  edges.forEach(([a, b]) => {
    ctx.beginPath();
    ctx.moveTo(projected[a][0], projected[a][1]);
    ctx.lineTo(projected[b][0], projected[b][1]);
    ctx.stroke();
  });
}

function drawRing(ctx: CanvasRenderingContext2D, size: number, rotX: number, rotY: number) {
  const segments = 24;
  const r = size / 2;
  const points: [number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    let x = Math.cos(angle) * r;
    let y = Math.sin(angle) * r;
    let z = 0;
    const ty = y * Math.cos(rotX) - z * Math.sin(rotX);
    const tz = y * Math.sin(rotX) + z * Math.cos(rotX);
    y = ty; z = tz;
    const tx = x * Math.cos(rotY) + z * Math.sin(rotY);
    points.push([tx, ty]);
  }
  ctx.beginPath();
  points.forEach(([x, y], i) => {
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function drawPyramid(ctx: CanvasRenderingContext2D, size: number, rotX: number, rotY: number, rotZ: number) {
  const s = size / 2;
  const h = size * 0.7;
  const vertices = [[0,-h,0],[-s,s/2,-s],[s,s/2,-s],[s,s/2,s],[-s,s/2,s]];
  const edges = [[0,1],[0,2],[0,3],[0,4],[1,2],[2,3],[3,4],[4,1]];
  const projected = vertices.map(([x, y, z]) => {
    let [rx, ry, rz] = [x, y, z];
    let ty = ry * Math.cos(rotX) - rz * Math.sin(rotX);
    let tz = ry * Math.sin(rotX) + rz * Math.cos(rotX);
    ry = ty; rz = tz;
    let tx = rx * Math.cos(rotY) + rz * Math.sin(rotY);
    tz = -rx * Math.sin(rotY) + rz * Math.cos(rotY);
    rx = tx;
    tx = rx * Math.cos(rotZ) - ry * Math.sin(rotZ);
    ty = rx * Math.sin(rotZ) + ry * Math.cos(rotZ);
    return [tx, ty];
  });
  edges.forEach(([a, b]) => {
    ctx.beginPath();
    ctx.moveTo(projected[a][0], projected[a][1]);
    ctx.lineTo(projected[b][0], projected[b][1]);
    ctx.stroke();
  });
}

export function FloatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const types: Shape["type"][] = ["cube", "octahedron", "ring", "pyramid"];
    const count = window.innerWidth < 768 ? 5 : 8;
    shapesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 30 + Math.random() * 60,
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      speedRotX: (Math.random() - 0.5) * 0.008,
      speedRotY: (Math.random() - 0.5) * 0.008,
      speedRotZ: (Math.random() - 0.5) * 0.005,
      type: types[Math.floor(Math.random() * types.length)],
      opacity: 0.06 + Math.random() * 0.08,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const shape of shapesRef.current) {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotX += shape.speedRotX;
        shape.rotY += shape.speedRotY;
        shape.rotZ += shape.speedRotZ;

        // Subtle mouse repulsion
        const dx = shape.x - mouseRef.current.x;
        const dy = shape.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.5;
          shape.x += (dx / dist) * force;
          shape.y += (dy / dist) * force;
        }

        // Wrap around
        if (shape.x < -100) shape.x = canvas.width + 100;
        if (shape.x > canvas.width + 100) shape.x = -100;
        if (shape.y < -100) shape.y = canvas.height + 100;
        if (shape.y > canvas.height + 100) shape.y = -100;

        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.strokeStyle = `rgba(191, 255, 0, ${shape.opacity})`;
        ctx.lineWidth = 0.8;

        switch (shape.type) {
          case "cube":
            drawCube(ctx, shape.size, shape.rotX, shape.rotY, shape.rotZ);
            break;
          case "octahedron":
            drawOctahedron(ctx, shape.size, shape.rotX, shape.rotY, shape.rotZ);
            break;
          case "ring":
            drawRing(ctx, shape.size, shape.rotX, shape.rotY);
            break;
          case "pyramid":
            drawPyramid(ctx, shape.size, shape.rotX, shape.rotY, shape.rotZ);
            break;
        }

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
