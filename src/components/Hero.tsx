import {
  ArrowRight,
  Globe,
  Languages,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      bg-[#050816]
      min-h-screen
      flex
      items-center
      pt-32
    "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        grid
        lg:grid-cols-2
        gap-20
        items-center
      "
      >
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            backdrop-blur-xl
          "
          >
            <Award size={16} className="text-violet-400" />
            <span className="text-sm text-slate-300">
              Trusted by 10,000+ students worldwide
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
            mt-8
            font-heading
            text-white
            font-extrabold
            leading-[0.95]
            tracking-tight
            text-5xl
            md:text-6xl
            lg:text-7xl
          "
          >
            Learn Languages
            <span
              className="
              block
              bg-gradient-to-r
              from-violet-400
              via-cyan-400
              to-blue-400
              bg-clip-text
              text-transparent
            "
            >
              With Confidence.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
            mt-8
            max-w-xl
            text-lg
            leading-relaxed
            text-slate-400
          "
          >
            Master Japanese, English, IELTS, JLPT and business communication
            through personalized coaching, structured roadmaps and one-on-one
            mentoring from expert instructors.
          </p>

          {/* CTA */}
          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
          "
          >
            <button
              className="
              group
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-indigo-600
              px-8
              py-4
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
            >
              <span className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  group-hover:translate-x-1
                "
                />
              </span>
            </button>

            <button
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              text-white
              backdrop-blur-xl
              transition-all
              hover:bg-white/10
            "
            >
              Explore Courses
            </button>
          </div>

          {/* Stats */}
          <div
            className="
            mt-12
            grid
            grid-cols-3
            gap-6
          "
          >
            <div>
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="text-slate-400 text-sm">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">95%</h3>
              <p className="text-slate-400 text-sm">Success Rate</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">25+</h3>
              <p className="text-slate-400 text-sm">Countries</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="
                  h-12
                  w-12
                  rounded-full
                  border-2
                  border-[#050816]
                  bg-gradient-to-br
                  from-violet-500
                  to-cyan-500
                "
                />
              ))}
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
              </div>

              <p className="text-sm text-slate-400">Rated 4.9/5 by students</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Main Dashboard */}
          <div
            className="
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-2xl
          "
          >
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Learning Dashboard</h3>

              <Languages className="text-cyan-400" />
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Japanese JLPT N4</span>

                  <span className="text-white">78%</span>
                </div>

                <div className="mt-2 h-3 rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">English Speaking</span>

                  <span className="text-white">92%</span>
                </div>

                <div className="mt-2 h-3 rounded-full bg-white/10">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">IELTS Preparation</span>

                  <span className="text-white">85%</span>
                </div>

                <div className="mt-2 h-3 rounded-full bg-white/10">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div
            className="
            absolute
            -left-8
            top-12
            rounded-3xl
            border
            border-white/10
            bg-white/10
            p-4
            backdrop-blur-xl
          "
          >
            <div className="flex items-center gap-3">
              <Globe className="text-cyan-400" />
              <div>
                <h4 className="text-white font-semibold">25+ Countries</h4>
                <p className="text-xs text-slate-400">Global Students</p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div
            className="
            absolute
            -right-8
            bottom-10
            rounded-3xl
            border
            border-white/10
            bg-white/10
            p-4
            backdrop-blur-xl
          "
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="text-violet-400" />
              <div>
                <h4 className="text-white font-semibold">95% Success</h4>
                <p className="text-xs text-slate-400">Placement Rate</p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div
            className="
            absolute
            left-1/2
            -bottom-8
            -translate-x-1/2
            rounded-3xl
            border
            border-white/10
            bg-white/10
            p-4
            backdrop-blur-xl
          "
          >
            <div className="flex items-center gap-3">
              <Users className="text-green-400" />
              <div>
                <h4 className="text-white font-semibold">10K+ Students</h4>
                <p className="text-xs text-slate-400">Learning Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
