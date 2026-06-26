"use client";

import { Star, Quote } from "lucide-react";

export default function PremiumReviewsSection() {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "JLPT N3 Student",
      review:
        "The structured Japanese learning path completely changed my speaking confidence. Best decision ever!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      name: "Emily Johnson",
      role: "IELTS 7.5 Achiever",
      review:
        "I improved from 6.0 to 7.5 in just 2 months. The live feedback sessions are insanely effective.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    },
    {
      name: "Luis Hernandez",
      role: "Spanish Learner",
      review:
        "Feels like real immersion. I can finally speak naturally without translating in my head.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    },
    {
      name: "Priya Verma",
      role: "English Fluency Program",
      review:
        "The speaking practice system is next level. I gained real confidence in interviews.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200",
    },
  ];

  return (
    <section className="relative w-full bg-[#05060a] py-24 px-6 overflow-hidden font-[Inter,system-ui]">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What Our{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Students Say
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Real feedback from learners who transformed their speaking skills and
          confidence through structured learning.
        </p>
      </div>

      {/* grid */}
      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="
              group
              relative
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-6
              hover:scale-[1.04]
              transition-all
              duration-300
              shadow-lg
            "
          >
            {/* quote icon */}
            <Quote className="text-cyan-400 mb-4 opacity-60" />

            {/* review text */}
            <p className="text-gray-300 text-sm leading-relaxed">{r.review}</p>

            {/* rating */}
            <div className="flex gap-1 mt-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* user */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src={r.image}
                className="w-10 h-10 rounded-full object-cover border border-white/10"
              />

              <div>
                <h4 className="text-white text-sm font-semibold">{r.name}</h4>
                <p className="text-gray-400 text-xs">{r.role}</p>
              </div>
            </div>

            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
