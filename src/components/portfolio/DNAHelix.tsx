import { useEffect, useRef, useCallback } from "react";

// ─── canvas constants ──────────────────────────────────────────
const W = 460;
const H = 500;
const CX = W / 2;
const AMP = 62;        // strand amplitude (half-width of helix)
const FREQ = 2.5;      // full rotations across height
const STEPS = 240;     // path smoothness
const RUNGS = 28;      // number of base pair rungs

// ─── node data ─────────────────────────────────────────────────
export interface HelixNode {
  t: number;           // 0–1 position along helix
  label: string;
  sub?: string;
  side: 1 | -1;        // which strand (+1 right, -1 left)
  orange?: boolean;
  href?: string;
}

const nodes: HelixNode[] = [
  { t: 0.10, label: "Token Architecture",  side:  1, orange: true },
  { t: 0.24, label: "Semantic Naming",     side: -1 },
  { t: 0.38, label: "Component Variants",  side:  1 },
  { t: 0.52, label: "Accessibility",       side: -1 },
  { t: 0.66, label: "Design–Dev Sync",     side:  1 },
  { t: 0.80, label: "Documentation",       side: -1 },
  { t: 0.93, label: "Governance",          side:  1, orange: true },
];

// ─── helpers ───────────────────────────────────────────────────
function angle(t: number, phase: number) {
  return t * Math.PI * 2 * FREQ + phase;
}
function strandX(t: number, phase: number, side: 1 | -1) {
  return CX + side * AMP * Math.sin(angle(t, phase));
}
function strandY(t: number) {
  return 28 + t * (H - 56);
}
function depth(t: number, phase: number, side: 1 | -1) {
  return side * Math.cos(angle(t, phase));
}

// ─── component ─────────────────────────────────────────────────
const DNAHelix = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const phaseRef     = useRef(0);
  const animRef      = useRef(0);
  const hoveredRef   = useRef<number | null>(null);
  const scaleRef     = useRef(1);
  // ── draw frame ──────────────────────────────────────────────
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr   = window.devicePixelRatio || 1;
    const scale = scaleRef.current;
    const phase = phaseRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr * scale, dpr * scale);

    // ── back strand (strand -1) ──────────────────────────────
    ctx.beginPath();
    for (let i = 0; i <= STEPS; i++) {
      const t = i / STEPS;
      const x = strandX(t, phase, -1);
      const y = strandY(t);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#c0bab2";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // ── back strand (strand +1 when depth < 0) ───────────────
    ctx.beginPath();
    for (let i = 0; i <= STEPS; i++) {
      const t = i / STEPS;
      const d = depth(t, phase, 1);
      if (d >= 0) continue;
      const x = strandX(t, phase, 1);
      const y = strandY(t);
      if (i === 0 || depth((i - 1) / STEPS, phase, 1) >= 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#c0bab2";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // ── rungs ────────────────────────────────────────────────
    for (let i = 0; i <= RUNGS; i++) {
      const t      = i / RUNGS;
      const ang    = angle(t, phase);
      const zDepth = Math.cos(ang);
      const x1     = strandX(t, phase, 1);
      const x2     = strandX(t, phase, -1);
      const y      = strandY(t);
      const alpha  = zDepth > 0 ? 0.55 : 0.22;
      const lw     = zDepth > 0 ? 1.2 : 0.7;
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.strokeStyle = `rgba(176, 171, 163, ${alpha})`;
      ctx.lineWidth = lw;
      ctx.stroke();
    }

    // ── front strands (depth >= 0) ──────────────────────────
    ctx.beginPath();
    let penUp = true;
    for (let i = 0; i <= STEPS; i++) {
      const t = i / STEPS;
      const d = depth(t, phase, 1);
      const x = strandX(t, phase, 1);
      const y = strandY(t);
      if (d < 0) { penUp = true; continue; }
      if (penUp) { ctx.moveTo(x, y); penUp = false; } else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#1c1916";
    ctx.lineWidth = 2.2;
    ctx.stroke();

    ctx.beginPath();
    penUp = true;
    for (let i = 0; i <= STEPS; i++) {
      const t = i / STEPS;
      const d = depth(t, phase, -1);
      const x = strandX(t, phase, -1);
      const y = strandY(t);
      if (d < 0) { penUp = true; continue; }
      if (penUp) { ctx.moveTo(x, y); penUp = false; } else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#1c1916";
    ctx.lineWidth = 2.2;
    ctx.stroke();

    // ── node circles + connector lines + labels ─────────────
    nodes.forEach((node, idx) => {
      const nx       = strandX(node.t, phase, node.side);
      const ny       = strandY(node.t);
      const isHover  = hoveredRef.current === idx;
      const isOrange = node.orange || isHover;

      const labelCol = node.side > 0 ? CX + AMP + 22 : CX - AMP - 22;
      const textX    = node.side > 0 ? labelCol + 4 : labelCol - 4;

      ctx.beginPath();
      ctx.moveTo(nx, ny);
      ctx.lineTo(labelCol, ny);
      ctx.strokeStyle = isHover ? "#c8622e" : "#d5cfc7";
      ctx.lineWidth = 0.8;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);

      const r = isHover ? 6 : 4.5;
      ctx.beginPath();
      ctx.arc(nx, ny, r, 0, Math.PI * 2);
      ctx.fillStyle   = isOrange ? "#c8622e" : "#fafafa";
      ctx.strokeStyle = isOrange ? "#c8622e" : "#1c1916";
      ctx.lineWidth   = isHover ? 2 : 1.5;
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = node.side > 0 ? "left" : "right";
      ctx.fillStyle = isHover ? "#c8622e" : "#1c1916";
      ctx.font = `400 13px "Space Grotesk", sans-serif`;
      ctx.fillText(node.label, textX, ny + 4);

      if (node.sub) {
        ctx.fillStyle = isHover ? "#c8622e" : "#b0aba3";
        ctx.font = `300 9.5px "DM Mono", monospace`;
        ctx.fillText(node.sub, textX, ny + 17);
      }
    });

    ctx.restore();
  }, []);

  // ── resize observer — keeps canvas fitted to container ────
  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    const resize = (containerW: number) => {
      const dpr   = window.devicePixelRatio || 1;
      const scale = Math.min(1, containerW / W);
      scaleRef.current = scale;
      canvas.width  = Math.round(W * dpr * scale);
      canvas.height = Math.round(H * dpr * scale);
      canvas.style.width  = `${W * scale}px`;
      canvas.style.height = `${H * scale}px`;
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        resize(entry.contentRect.width);
      }
    });
    observer.observe(container);
    resize(container.clientWidth);
    return () => observer.disconnect();
  }, []);

  // ── animation loop ────────────────────────────────────────
  useEffect(() => {
    const loop = () => {
      phaseRef.current += 0.006;
      draw();
      animRef.current = requestAnimationFrame(loop);
    };
    document.fonts.ready.then(() => {
      animRef.current = requestAnimationFrame(loop);
    });
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  // ── hit testing (mouse coords → canvas space) ─────────────
  const hitTest = useCallback((mx: number, my: number): number | null => {
    const phase = phaseRef.current;
    const scale = scaleRef.current;
    const sx = mx / scale;
    const sy = my / scale;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      const nx = strandX(node.t, phase, node.side);
      const ny = strandY(node.t);
      if (Math.hypot(sx - nx, sy - ny) < 16) return i;
      const labelCol = node.side > 0 ? CX + AMP + 22 : CX - AMP - 22;
      if (Math.abs(sy - ny) < 14 && Math.abs(sx - labelCol) < 100) return i;
    }
    return null;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    hoveredRef.current = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    canvas.style.cursor = "default";
  }, [hitTest]);

  const handleMouseLeave = useCallback(() => {
    hoveredRef.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "default";
  }, []);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="block"
        aria-label="Interactive DNA helix representing Dhika's work and skills"
      />
    </div>
  );
};

export default DNAHelix;
