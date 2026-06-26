"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Mail, ArrowRight, PlayCircle } from "lucide-react";

export default function PremiumCoursesSection() {
  const swiperRef = useRef<any>(null);

  const courses = [
    {
      title: "Japanese JLPT N5 → N1",
      desc: "Master reading, speaking & exam prep with native mentors.",
      tag: "Most Popular",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Spoken English Mastery",
      desc: "Fluency-focused training with real-life conversation practice.",
      tag: "Trending",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "IELTS Crash Course",
      desc: "7+ Band strategy with speaking + writing correction system.",
      tag: "Live",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Business English Pro",
      desc: "Corporate communication, interviews & global confidence.",
      tag: "Premium",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="relative w-full bg-[#05060a] py-24 overflow-hidden font-[Inter,system-ui]">
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Upcoming{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Courses
              </span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-xl">
              Learn with structured paths, live classes, and industry-level
              mentorship designed for global fluency.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl">
            <Mail className="text-gray-300" />
            <input
              placeholder="Enter email for updates"
              className="bg-transparent outline-none text-white placeholder:text-gray-500"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl text-white text-sm hover:scale-105 transition">
              Join
            </button>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          {courses.map((course, i) => (
            <SwiperSlide key={i}>
              <div className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:scale-[1.03] transition duration-300 overflow-hidden">
                {/* gradient glow */}
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-r ${course.color}`}
                />

                {/* tag */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">
                    {course.tag}
                  </span>

                  <PlayCircle className="text-gray-400 group-hover:text-white transition" />
                </div>

                {/* title */}
                <h3 className="text-xl font-semibold text-white">
                  {course.title}
                </h3>

                {/* desc */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {course.desc}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between">
                  <button className="text-sm text-white/80 hover:text-white flex items-center gap-2 group">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>

                  <span className="text-xs text-gray-500">Live classes</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LIVE STRIP */}
        <div className="mt-16 flex items-center justify-center">
          <div className="px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex items-center gap-2 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Live classes running now • Join instantly
          </div>
        </div>
      </div>
    </section>
  );
}
