import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

import design1 from "@/assets/playground-image/Design 1.png";
import design2 from "@/assets/playground-image/Design 2.png";
import design3 from "@/assets/playground-image/Design 3.png";
import design4 from "@/assets/playground-image/Design 4.png";
import design5 from "@/assets/playground-image/Design 5.png";
import design6 from "@/assets/playground-image/Design 6.png";
import design7 from "@/assets/playground-image/Design 7.png";
import design8 from "@/assets/playground-image/Design 8.png";
import design9 from "@/assets/playground-image/Design 9.png";
import design10 from "@/assets/playground-image/Design 10.png";

const playgroundItems = [
  design1, design2, design3, design4, design5,
  design6, design7, design8, design9, design10,
];

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.5;

function ImageModal({
  src,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  src: string;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const clamp = (s: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));
  const zoomIn = () => setScale((s) => clamp(s + ZOOM_STEP));
  const zoomOut = () => setScale((s) => clamp(s - ZOOM_STEP));
  const reset = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

  useEffect(() => { reset(); }, [src]);
  useEffect(() => { if (scale <= 1) setOffset({ x: 0, y: 0 }); }, [scale]);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => clamp(s + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP)));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.stopPropagation();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart.current) return;
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.x),
      y: dragStart.current.oy + (e.clientY - dragStart.current.y),
    });
  };
  const onMouseUp = () => { setIsDragging(false); dragStart.current = null; };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") reset();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return createPortal(
    /* Single fixed wrapper — flexbox handles centering, no transform tricks */
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Backdrop — absolute inside wrapper, backdropFilter isolated here */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(28,25,22,0.45)",
          backdropFilter: "blur(6px)",
        }}
        onClick={onClose}
      />

      {/* Modal — relative inside flex, centered by parent */}
      <div
        className="flex flex-col bg-[#fafafa] border border-[#e4e4e4] overflow-hidden"
        style={{
          position: "relative",
          width: "min(860px, 90vw)",
          maxHeight: "80vh",
          borderRadius: "6px",
          boxShadow: "0 24px 60px rgba(28,25,22,0.22)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#e4e4e4] shrink-0 bg-[#fafafa]">
          {/* Counter + nav */}
          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              disabled={index === 0}
              className="font-mono text-[0.6rem] text-[#b0aba3] hover:text-[#1c1916] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <span className="font-mono text-[0.58rem] text-[#b0aba3] tracking-[0.1em]">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={onNext}
              disabled={index === total - 1}
              className="font-mono text-[0.6rem] text-[#b0aba3] hover:text-[#1c1916] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>

          {/* Zoom controls + close */}
          <div className="flex items-center gap-1">
            <button
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
              className="p-1.5 rounded text-[#b0aba3] hover:text-[#1c1916] hover:bg-[#f0f0f0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ZoomOut className="w-3 h-3" />
            </button>
            <button
              onClick={reset}
              className="px-2 py-1 rounded font-mono text-[0.58rem] text-[#b0aba3] hover:text-[#1c1916] hover:bg-[#f0f0f0] transition-colors min-w-[2.8rem] text-center"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
              className="p-1.5 rounded text-[#b0aba3] hover:text-[#1c1916] hover:bg-[#f0f0f0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ZoomIn className="w-3 h-3" />
            </button>
            <div className="w-px h-3.5 bg-[#e8e8e8] mx-1.5" />
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#b0aba3] hover:text-[#1c1916] hover:bg-[#f0f0f0] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div
          className="overflow-hidden flex items-center justify-center bg-[#f0f0f0]"
          style={{
            cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <img
            src={src}
            alt={`Design ${index + 1}`}
            draggable={false}
            className="w-full h-auto select-none block"
            style={{
              transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
              transition: isDragging ? "none" : "transform 0.15s ease",
              transformOrigin: "center center",
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}


const PortfolioPlayground = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [activeIndex]);

  const handlePrev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const handleNext = () => setActiveIndex((i) => (i !== null && i < playgroundItems.length - 1 ? i + 1 : i));

  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto pb-28 max-[860px]:pb-16">
        <div
          className="px-6 pt-6 pb-6 max-[860px]:px-4"
          style={{ animation: "fadeUp .4s ease both" }}
        >
          <div className="grid grid-cols-2 gap-3">
            {playgroundItems.map((src, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden bg-[#f0f0f0] border border-[#e4e4e4] hover:border-[#c8622e] transition-colors duration-200"
                style={{
                  animation: "fadeUp .4s ease both",
                  animationDelay: `${index * 40}ms`,
                }}
              >
                <img
                  src={src}
                  alt={`Design ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <ImageModal
          src={playgroundItems[activeIndex]}
          index={activeIndex}
          total={playgroundItems.length}
          onClose={() => setActiveIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default PortfolioPlayground;
