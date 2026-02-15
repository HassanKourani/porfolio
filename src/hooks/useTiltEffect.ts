import { useRef, useState, useCallback } from "react";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
}

export function useTiltEffect(maxTilt = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setTilt({
        rotateX: (0.5 - y) * maxTilt,
        rotateY: (x - 0.5) * maxTilt,
        glowX: x * 100,
        glowY: y * 100,
      });
    },
    [maxTilt]
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  }, []);

  return {
    ref,
    tilt,
    isHovering,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
