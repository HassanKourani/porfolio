import { useMousePosition } from "../../hooks/useMousePosition";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: x - 200,
        top: y - 200,
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        opacity: x === 0 && y === 0 ? 0 : 1,
      }}
    />
  );
}
