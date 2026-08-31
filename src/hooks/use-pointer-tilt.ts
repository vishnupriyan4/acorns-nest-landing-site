"use client";

import { useCallback, useRef, useState, type PointerEvent } from "react";

type Tilt = { x: number; y: number };

export function usePointerTilt(intensity = 8) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 });

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: -(py * intensity), y: px * intensity });
    },
    [intensity],
  );

  const onPointerLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return { ref, tilt, onPointerMove, onPointerLeave };
}
