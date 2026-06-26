"use client";

import React from "react";

/**
 * 💎 ABOUT + EXPERIENCE + 1:1 CONSULT PAGE
 * Trust-building SaaS landing section
 */

export default function AboutConsultPage() {
  return (
    <section className="relative bg-[#05060a] text-white overflow-hidden font-[Inter,system-ui]">
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px]" />
      </div>

      {/* HEADER */}
      <div className="relative max-w-5xl mx-auto text-center px-6 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold">
          Building{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Real Learning Systems
          </span>
        </h1>

        <p className="text-gray-400 mt-5 text-sm md:text-base leading-relaxed">
          We don’t just teach languages — we build structured learning systems
          that help students speak confidently, think globally, and grow
          career-ready.
        </p>
      </div>

      {/* ABOUT GRID */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-14">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Who We Are</h3>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            A team of educators, engineers, and mentors focused on building
            modern, structured language learning experiences for global
            learners.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Our Mission</h3>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            To eliminate confusion in language learning by creating a clear,
            step-by-step system that builds real speaking ability.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Our Approach</h3>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            We combine live practice, structured lessons, and personalized
            feedback to ensure consistent progress for every learner.
          </p>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="relative max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Experience & Expertise
        </h2>

        <div className="mt-10 space-y-6">
          {[
            {
              title: "5+ Years Teaching Experience",
              desc: "Helping students from beginner to fluent level across multiple languages including English, Japanese, German, and Spanish.",
            },
            {
              title: "1000+ Students Guided",
              desc: "Students trained through structured learning paths, live practice sessions, and personalized feedback systems.",
            },
            {
              title: "Real Communication Focus",
              desc: "We focus on speaking ability, not just theory — making learners confident in real conversations and interviews.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5 border border-white/10
                rounded-xl p-5
                hover:bg-white/10 transition
              "
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1-ON-1 CONSULT SECTION */}
      <div className="relative max-w-5xl mx-auto px-6 mt-24 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          1-on-1 Live Consultation
        </h2>

        <p className="text-center text-gray-400 mt-4 text-sm md:text-base">
          Personalized mentorship sessions designed to help you overcome
          learning barriers, improve speaking confidence, and build a clear
          roadmap.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            "Personal learning roadmap",
            "Real-time doubt solving",
            "Speaking practice feedback",
          ].map((f, i) => (
            <div
              key={i}
              className="
                bg-white/5 border border-white/10
                rounded-xl p-5 text-sm text-gray-300
              "
            >
              ✔ {f}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="
            px-8 py-4 rounded-full
            bg-gradient-to-r from-purple-600 to-cyan-500
            hover:scale-105 transition
            font-medium
          "
          >
            Book a Consultation
          </button>

          <p className="text-gray-500 text-xs mt-4">
            Connect directly with our mentors for guidance
          </p>
        </div>
      </div>
    </section>
  );
}
