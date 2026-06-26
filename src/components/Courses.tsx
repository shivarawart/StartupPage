"use client";

import { ArrowRight, Check } from "lucide-react";

export default function PremiumCoursesSection() {
  const courses = [
    {
      title: "JLPT Japanese Mastery (N5 → N1)",
      desc: "Structured Japanese learning path designed for fluency + exam success.",
      price: "$29/month",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?w=1200",
      highlights: [
        "Live speaking practice sessions",
        "Weekly grammar breakdowns",
        "Mock JLPT exams",
        "Native mentor feedback",
      ],
    },
    {
      title: "English Fluency Accelerator",
      desc: "Speak English confidently in interviews, meetings, and daily life.",
      price: "$19/month",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
      highlights: [
        "Daily speaking challenges",
        "Pronunciation correction",
        "Real-world conversation drills",
        "Confidence building system",
      ],
    },
    {
      title: "German A1 → B2 Program",
      desc: "Master German step-by-step for jobs, study & migration.",
      price: "$24/month",
      image:
        "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=1200",
      highlights: [
        "Grammar foundation building",
        "Speaking fluency sessions",
        "Vocabulary system training",
        "Exam preparation kit",
      ],
    },
    {
      title: "Spanish Conversational Mastery",
      desc: "Learn Spanish naturally through immersive conversation training.",
      price: "$21/month",
      image:
        "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1200",
      highlights: [
        "Real-life dialogues",
        "Accent reduction training",
        "Listening comprehension",
        "Cultural immersion lessons",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#05060a] py-24 px-6 font-[Inter,system-ui] overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* HEADER */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Premium{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Courses
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Learn with structured roadmaps, live mentorship, assignments, and
          real-world speaking practice designed for fluency.
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <div
            key={i}
            className="
              group
              relative
              w-full
              max-w-[420px]
              h-[520px]
              mx-auto
              rounded-3xl
              overflow-hidden
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              hover:scale-[1.03]
              transition-all
              duration-300
              shadow-lg
            "
          >
            {/* IMAGE */}
            <div className="h-[40%] overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition duration-500
                  opacity-80
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col justify-between h-[60%]">
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">{course.desc}</p>

                {/* highlights */}
                <ul className="mt-4 space-y-2">
                  {course.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check className="w-4 h-4 text-cyan-400 mt-1" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* bottom */}
              <div className="flex items-center justify-between mt-5">
                <div>
                  <p className="text-xs text-gray-500">Starting from</p>
                  <p className="text-white font-semibold">{course.price}</p>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm hover:scale-105 transition group">
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>

            {/* glow border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
