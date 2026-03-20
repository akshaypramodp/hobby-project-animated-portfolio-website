"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 105;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all 105 images to prevent flickering
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // Draw first frame once all are loaded
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx && loadedImages[0]) {
              renderFrame(ctx, loadedImages[0]);
            }
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas internal dimensions to match window logic to prevent stretching
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Implementation of object-fit: cover natively in canvas
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length === FRAME_COUNT && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
        renderFrame(ctx, images[index]);
      }
    }
  });

  // Handle window resize dynamically to adjust object-fit canvas
  useEffect(() => {
    const handleResize = () => {
      if (images.length === FRAME_COUNT && canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          const index = Math.floor(frameIndex.get());
          renderFrame(ctx, images[index]);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
