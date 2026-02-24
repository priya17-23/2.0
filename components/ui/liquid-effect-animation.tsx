"use client";

import { useEffect, useRef } from "react";

// Transparent blue watercolor–style image for the liquid effect
const LIQUID_IMAGE_URL =
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200";

export function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
const canvas = document.getElementById('liquid-canvas');
if (canvas) {
  const app = LiquidBackground(canvas);
  app.loadImage('${LIQUID_IMAGE_URL}');
  app.liquidPlane.material.metalness = 0.2;
  app.liquidPlane.material.roughness = 0.6;
  app.liquidPlane.uniforms.displacementScale.value = 4;
  app.setRain(false);
  window.__liquidApp = app;
}
`;
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (typeof window !== "undefined" && window.__liquidApp?.dispose) {
        window.__liquidApp.dispose();
        window.__liquidApp = undefined;
      }
      if (scriptRef.current?.parentNode) {
        document.body.removeChild(scriptRef.current);
      }
      scriptRef.current = null;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 m-0 w-full h-full touch-none overflow-hidden"
      style={{ fontFamily: '"Montserrat", serif' }}
    >
      <canvas
        ref={canvasRef}
        id="liquid-canvas"
        className="fixed inset-0 w-full h-full"
      />
      {/* Transparent blue watercolor wash overlay */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(147, 197, 253, 0.15) 50%, rgba(191, 219, 254, 0.2) 100%)",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

declare global {
  interface Window {
    __liquidApp?: { dispose?: () => void };
  }
}
