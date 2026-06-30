import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  labelBefore?: string;
  labelAfter?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  labelBefore = "Before",
  labelAfter = "After"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isResizing) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      tabIndex={0}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-col-resize select-none shadow-xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={`${labelAfter} - Pool after our service`}
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-10 uppercase tracking-wider">
        {labelAfter}
      </div>

      {/* Before Image (Foreground with Clip) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${labelBefore} - Pool before our service`}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-slate-800/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-10 uppercase tracking-wider">
          {labelBefore}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-brand-blue/20">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-brand-blue rounded-full"></div>
            <div className="w-1 h-4 bg-brand-blue rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
