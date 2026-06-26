import { useEffect, useState } from "react";
import { Menu, X, Languages, ArrowRight, Star } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Reviews", href: "#reviews" },
  { label: "Success Stories", href: "#success" },
  { label: "1-on-1 Consult", href: "#consult" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${
          isScrolled
            ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 shadow-lg">
                <Languages className="h-5 w-5 text-white" />
              </div>

              <div>
                <h2 className="font-bold text-white text-lg">Fluento</h2>
                <p className="text-xs text-slate-400">Language Institute</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                  relative
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:text-white
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-gradient-to-r
                  after:from-violet-500
                  after:to-cyan-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className="
                flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/5
                px-4 py-2
                text-sm
                text-slate-300
                backdrop-blur-md
                transition-all
                hover:bg-white/10
              "
              >
                <Star size={16} />
                4.9 Rating
              </button>

              <button
                className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-violet-600
                via-indigo-600
                to-cyan-500
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
              "
              >
                Book Free Consultation
                <ArrowRight
                  size={16}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
              flex lg:hidden
              items-center
              justify-center
              text-white
            "
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
        fixed
        top-0
        right-0
        z-40
        h-screen
        w-[85%]
        max-w-sm
        bg-slate-950
        border-l
        border-white/10
        transition-transform
        duration-500
        lg:hidden
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="pt-28 px-6">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                text-lg
                font-medium
                text-slate-300
                transition-colors
                hover:text-white
              "
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-10">
            <button
              className="
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              via-indigo-600
              to-cyan-500
              px-5
              py-4
              font-semibold
              text-white
            "
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="
          fixed
          inset-0
          z-30
          bg-black/50
          backdrop-blur-sm
          lg:hidden
        "
        />
      )}
    </>
  );
}
