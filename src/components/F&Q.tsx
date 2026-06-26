"use client";

import { useState } from "react";

/**
 * 💎 PREMIUM FAQ SECTION
 * Stripe / SaaS style accordion UI
 */

export default function PremiumFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes this language institute different?",
      a: "We focus on real-world fluency, not memorization. Our system includes live speaking sessions, structured roadmaps, and mentor feedback to ensure practical communication skills.",
    },
    {
      q: "Do you provide live classes or recorded content?",
      a: "Yes — we offer a hybrid model. Live interactive classes with mentors plus structured recorded lessons for revision and practice anytime.",
    },
    {
      q: "Can I learn multiple languages together?",
      a: "Absolutely. You can combine courses like English + Japanese or German + Spanish. Our system adapts to multi-track learning efficiently.",
    },
    {
      q: "Is this suitable for beginners?",
      a: "Yes. We have structured paths from absolute beginner (A1 / N5) to advanced levels with guided progression and assessments.",
    },
    {
      q: "How do I get support if I get stuck?",
      a: "You can connect with mentors directly, join doubt sessions, or reach our support team anytime. We ensure no learner is left behind.",
    },
  ];

  return (
    <section className="relative w-full bg-[#05060a] py-24 px-6 overflow-hidden font-[Inter,system-ui]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* HEADER */}
      <div className="relative max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          Everything you need to know about courses, learning system, and
          support.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="relative max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="
                group
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                rounded-2xl
                overflow-hidden
                transition
              "
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="
                  w-full flex justify-between items-center
                  px-6 py-5 text-left
                  hover:bg-white/5
                  transition
                "
              >
                <span className="text-white font-medium text-base md:text-lg">
                  {item.q}
                </span>

                {/* ICON */}
                <div
                  className={`
                    w-6 h-6 flex items-center justify-center
                    transition-transform duration-300
                    ${isOpen ? "rotate-45" : "rotate-0"}
                  `}
                >
                  <span className="text-cyan-400 text-xl">+</span>
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`
                  px-6 overflow-hidden transition-all duration-300
                  text-gray-400 text-sm md:text-base leading-relaxed
                  ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
