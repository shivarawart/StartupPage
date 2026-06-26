"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Globe, BookOpen, Sparkles } from "lucide-react";

/**
 * 💎 PREMIUM INFINITE SCROLLER (GOOGLE-LEVEL UI)
 * No config needed
 */

export default function PremiumInfiniteScroller() {
  return (
    <section className="relative w-full bg-[#05060a] py-20 overflow-hidden font-[Inter,system-ui]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-cyan-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Learn Like a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Global Student
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Premium language courses designed with structured learning paths,
            real-world fluency, and live mentorship.
          </p>
        </div>

        {/* SCROLLER WRAPPER */}
        <ScrollerRow direction="left" />
        <div className="h-8" />
        <ScrollerRow direction="right" />
      </div>
    </section>
  );
}

/* =========================
   SCROLLER ROW COMPONENT
========================= */

function ScrollerRow({ direction }: { direction: "left" | "right" }) {
  const rowRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      icon: Globe,
      title: "Global English Mastery",
      desc: "Speak fluently with real-world confidence",
    },
    {
      icon: BookOpen,
      title: "JLPT Japanese Track",
      desc: "N5 → N1 structured learning path",
    },
    {
      icon: Sparkles,
      title: "IELTS 7+ Strategy",
      desc: "Exam-focused coaching system",
    },
    {
      icon: Globe,
      title: "Business Communication",
      desc: "Corporate-level speaking skills",
    },
  ];

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let speed = direction === "left" ? -0.6 : 0.6;
    let raf: number;

    const animate = () => {
      if (!el) return;

      el.scrollLeft += speed;

      // loop reset logic
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      if (el.scrollLeft <= 0) {
        el.scrollLeft = el.scrollWidth / 2;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(raf);
  }, [direction]);

  return (
    <div className="relative overflow-hidden" onMouseEnter={() => {}}>
      {/* FADE EDGES */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#05060a] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#05060a] to-transparent z-10" />

      <div
        ref={rowRef}
        className="
          flex gap-6
          overflow-x-hidden
          whitespace-nowrap
          py-4
        "
        style={{ scrollBehavior: "auto" }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="
              min-w-[280px]
              md:min-w-[320px]
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-5
              hover:scale-[1.05]
              transition
              duration-300
              group
            "
          >
            <item.icon className="text-cyan-400 mb-4" />

            <h3 className="text-white font-semibold text-lg">{item.title}</h3>

            <p className="text-gray-400 text-sm mt-2">{item.desc}</p>

            <div className="mt-4 flex items-center gap-2 text-sm text-white/70 group-hover:text-white">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
