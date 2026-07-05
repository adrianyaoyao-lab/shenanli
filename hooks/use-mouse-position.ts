"use client";

import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
  rawX: number;
  rawY: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    rawX: 0,
    rawY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
        rawX: event.clientX,
        rawY: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

// Normalized mouse position (0-1)
export function useNormalizedMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0.5,
    y: 0.5,
    rawX: 0,
    rawY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
        rawX: event.clientX,
        rawY: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
