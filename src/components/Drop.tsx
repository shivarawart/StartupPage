"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PremiumSplitSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".split-image", {
        opacity: 0,
        x: -80,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".split-text", {
        opacity: 0,
        x: 80,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#05060a] py-24 px-6 overflow-hidden font-[Inter,system-ui]"
    >
      {/* glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* IMAGE SIDE */}
        <div className="split-image relative">
          <div className="rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400"
              alt="Learning"
              className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 left-6 bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl text-sm text-gray-300">
            🚀 Live Interactive Learning
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="space-y-6">
          <h2 className="split-text text-4xl md:text-5xl font-bold text-white leading-tight">
            Learn Languages With{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real Immersion
            </span>
          </h2>

          <p className="split-text text-gray-400 text-lg leading-relaxed">
            We don’t teach memorization — we build fluency systems used by top
            global learners. Speak naturally, think faster, and communicate
            confidently in real-world situations.
          </p>

          {/* features */}
          <div className="split-text space-y-3 text-gray-300">
            <p>✔ Live speaking sessions with mentors</p>
            <p>✔ Weekly structured assignments</p>
            <p>✔ Real-world conversation training</p>
            <p>✔ Exam & career focused roadmap</p>
          </div>

          {/* CTA */}
          <div className="split-text flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:scale-105 transition">
              Start Learning
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
              View Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}