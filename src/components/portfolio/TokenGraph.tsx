import { useEffect, useRef } from "react";

// ─── types ────────────────────────────────────────────────────
export interface GNode {
  label: string;
  bx: number;
  by: number;
  phase: number;
  speed: number;
}

interface Particle {
  edge: number;
  t: number;
  speed: number;
}

interface TokenGraphProps {
  nodes: GNode[];
  edges: number[][];
}

// ─── component ───────────────────────────────────────────────
const TokenGraph = ({ nodes, edges }: TokenGraphProps) => {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const timeRef      = useRef(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = Array.from({ length: 14 }, (_, i) => ({
      edge:  i % edges.length,
      t:     i / 14,
      speed: 0.0012 + Math.random() * 0.0014,
    }));

    let rafId = 0;

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const cw  = canvas.width  / dpr;
      const ch  = canvas.height / dpr;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      timeRef.current += 0.006;
      const time = timeRef.current;

      const pos = nodes.map(n => ({
        x: n.bx * cw + Math.sin(time * n.speed + n.phase) * 10,
        y: n.by * ch + Math.cos(time * n.speed * 0.7 + n.phase + 1) * 7,
      }));

      // edges
      ctx.setLineDash([4, 7]);
      ctx.lineWidth = 0.7;
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(pos[a].x, pos[a].y);
        ctx.lineTo(pos[b].x, pos[b].y);
        ctx.strokeStyle = "rgba(185, 178, 168, 0.30)";
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // particles
      particlesRef.current.forEach(p => {
        p.t += p.speed;
        if (p.t > 1) {
          p.t    = 0;
          p.edge = Math.floor(Math.random() * edges.length);
        }
        const [a, b] = edges[p.edge];
        const px = pos[a].x + (pos[b].x - pos[a].x) * p.t;
        const py = pos[a].y + (pos[b].y - pos[a].y) * p.t;
        const alpha = Math.sin(p.t * Math.PI) * 0.55;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 98, 46, ${alpha})`;
        ctx.fill();
      });

      // nodes
      nodes.forEach((node, i) => {
        const { x, y } = pos[i];
        ctx.beginPath();
        ctx.arc(x, y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle   = "rgba(28, 25, 22, 0.12)";
        ctx.strokeStyle = "rgba(28, 25, 22, 0.22)";
        ctx.lineWidth   = 0.8;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle    = "rgba(110, 106, 98, 0.40)";
        ctx.font         = `300 8.5px "DM Mono", monospace`;
        ctx.textAlign    = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, x + 7, y);
      });

      ctx.restore();
      rafId = requestAnimationFrame(draw);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width  = Math.round(width  * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width  = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();

    document.fonts.ready.then(() => {
      rafId = requestAnimationFrame(draw);
    });

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [nodes, edges]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

// ─── left panel data (token / primitive layer) ───────────────
export const LEFT_NODES: GNode[] = [
  { label: "color",       bx: 0.20, by: 0.10, phase: 0.0,  speed: 0.65 },
  { label: "spacing",     bx: 0.72, by: 0.18, phase: 1.3,  speed: 0.90 },
  { label: "radius",      bx: 0.88, by: 0.42, phase: 0.7,  speed: 1.00 },
  { label: "opacity",     bx: 0.60, by: 0.55, phase: 2.1,  speed: 0.78 },
  { label: "elevation",   bx: 0.18, by: 0.50, phase: 3.5,  speed: 0.62 },
  { label: "motion",      bx: 0.44, by: 0.72, phase: 1.8,  speed: 0.85 },
  { label: "breakpoint",  bx: 0.80, by: 0.80, phase: 4.2,  speed: 0.70 },
  { label: "zIndex",      bx: 0.12, by: 0.82, phase: 2.9,  speed: 0.92 },
];

export const LEFT_EDGES = [
  [0, 1], [0, 4], [0, 3],
  [1, 2], [1, 3],
  [2, 6], [2, 3],
  [3, 5], [3, 4],
  [4, 7], [5, 6],
  [5, 7], [6, 7],
];

// ─── right panel data (component / semantic layer) ───────────
export const RIGHT_NODES: GNode[] = [
  { label: "button",      bx: 0.15, by: 0.12, phase: 0.5,  speed: 0.72 },
  { label: "input",       bx: 0.70, by: 0.08, phase: 2.0,  speed: 0.88 },
  { label: "modal",       bx: 0.85, by: 0.35, phase: 1.1,  speed: 0.66 },
  { label: "toast",       bx: 0.50, by: 0.28, phase: 3.3,  speed: 0.95 },
  { label: "tooltip",     bx: 0.22, by: 0.45, phase: 0.9,  speed: 0.74 },
  { label: "badge",       bx: 0.68, by: 0.60, phase: 2.7,  speed: 0.82 },
  { label: "avatar",      bx: 0.30, by: 0.70, phase: 4.0,  speed: 0.68 },
  { label: "table",       bx: 0.80, by: 0.78, phase: 1.5,  speed: 0.90 },
  { label: "nav",         bx: 0.10, by: 0.86, phase: 3.8,  speed: 0.77 },
];

export const RIGHT_EDGES = [
  [0, 3], [0, 4], [0, 6],
  [1, 2], [1, 3], [1, 5],
  [2, 5], [2, 7],
  [3, 4], [3, 5],
  [4, 6], [4, 8],
  [5, 7], [6, 8],
  [7, 8],
];

export default TokenGraph;
