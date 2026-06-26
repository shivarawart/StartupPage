"use client";

import React, { useEffect, useRef, useState, useMemo, useId } from "react";

/**
 * 💎 PREMIUM MARQUEE COMPONENT (PRODUCTION READY)
 * - No FC / PointerEvent issues
 * - Stable animation loop
 * - Mobile optimized
 * - High-end UI glow system
 */

export default function MarqueeText() {
  return (
    <div className="w-full overflow-hidden relative bg-[#05060a] py-6">
      <LinearLoop
        marqueeText="
        JAPANESE • ENGLISH • IELTS • JLPT • SPEAK FLUENTLY • GLOBAL CAREER • 1-ON-1 COACHING • STUDY ABROAD • CERTIFICATION READY •
        "
        speed={1.2}
        direction="left"
        interactive={true}
      />
    </div>
  );
}

type Direction = "left" | "right";

interface LinearLoopProps {
  marqueeText: string;
  speed?: number;
  direction?: Direction;
  interactive?: boolean;
}

function LinearLoop({
  marqueeText,
  speed = 1.5,
  direction = "left",
  interactive = true,
}: LinearLoopProps) {
  const id = useId();
  const pathId = `marquee-${id}`;

  const pathRef = useRef<SVGPathElement | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);
  const spansRef = useRef<(SVGTSpanElement | null)[]>([]);

  const [spacing, setSpacing] = useState(0);
  const [ready, setReady] = useState(false);

  const text = useMemo(() => marqueeText.trim() + "   ", [marqueeText]);

  const pathD = "M0,80 L3000,80";

  const drag = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const dirRef = useRef(direction);

  // measure text width
  useEffect(() => {
    if (textRef.current) {
      setSpacing(textRef.current.getComputedTextLength());
    }
  }, [text]);

  // measure path
  useEffect(() => {
    if (pathRef.current && spacing) {
      setReady(true);
    }
  }, [spacing]);

  // animation loop
  useEffect(() => {
    if (!spacing) return;

    let frame: number;

    const animate = () => {
      const items = spansRef.current;

      items.forEach((el) => {
        if (!el) return;

        let x = parseFloat(el.getAttribute("x") || "0");

        if (!drag.current) {
          const delta = dirRef.current === "right" ? speed : -speed;
          x += delta;
        }

        const total = items.length * spacing;

        if (x < -spacing) x += total;
        if (x > total) x -= total;

        el.setAttribute("x", x.toString());
      });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed]);

  const repeats = spacing ? Math.ceil(3000 / spacing) + 2 : 0;

  // pointer control
  const onDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    drag.current = true;
    lastX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onMove = (e: React.PointerEvent) => {
    if (!interactive || !drag.current) return;

    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    velocity.current = dx;

    spansRef.current.forEach((el) => {
      if (!el) return;

      let x = parseFloat(el.getAttribute("x") || "0");
      x += dx;

      const total = spansRef.current.length * spacing;

      if (x < -spacing) x += total;
      if (x > total) x -= total;

      el.setAttribute("x", x.toString());
    });
  };

  const onUp = () => {
    drag.current = false;

    if (Math.abs(velocity.current) > 1) {
      dirRef.current = velocity.current > 0 ? "right" : "left";
    }
  };

  return (
    <div
      className="relative w-full select-none"
      style={{
        cursor: interactive ? (drag.current ? "grabbing" : "grab") : "default",
        visibility: ready ? "visible" : "hidden",
      }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
    >
      {/* PREMIUM GLOW */}
      <div className="absolute inset-0 blur-[120px] opacity-60 bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-blue-500/20" />

      <svg
        className="
          relative w-full block
          text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem]
          font-extrabold tracking-[0.14em]
        "
        viewBox="0 0 1440 160"
      >
        <defs>
          <linearGradient
            id={pathId + "-grad"}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <path ref={pathRef} id={pathId} d={pathD} />
        </defs>

        {/* hidden measure text */}
        <text ref={textRef} className="absolute opacity-0 pointer-events-none">
          {text}
        </text>

        {ready && (
          <text fill={`url(#${pathId}-grad)`}>
            <textPath href={`#${pathId}`}>
              {Array.from({ length: repeats }).map((_, i) => (
                <tspan
                  key={i}
                  ref={(el) => {
                    spansRef.current[i] = el;
                  }}
                  x={i * spacing}
                >
                  {text}
                </tspan>
              ))}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
}
