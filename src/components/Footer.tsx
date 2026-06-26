"use client";


/* ICONS */
const GitHubIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.54-1.39-1.33-1.76-1.33-1.76-1.08-.73.08-.72.08-.72 1.21.08 1.84 1.21 1.84 1.21 1.07 1.84 2.81 1.31 3.49 1 .11-.77.42-1.3.76-1.6-2.66-.31-5.46-1.34-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const TwitterIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M24 4.56c-.89.39-1.84.65-2.83.77 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-3.59 0-6.49 2.9-6.49 6.49 0 .51.06 1.01.17 1.49C5.4 9.2 2.03 7.3.85 4.4c-.56.96-.88 2.08-.88 3.25 0 2.25 1.15 4.24 2.89 5.42-.84-.03-1.65-.26-2.35-.64v.06c0 3.14 2.24 5.77 5.22 6.37-.55.15-1.13.23-1.72.23-.42 0-.83-.04-1.23-.12.83 2.59 3.25 4.47 6.11 4.52C7.55 21.84 3.88 23.2 0 23.2c-.68 0-1.35-.04-2-.12C1.87 25.09 6.27 26 10.91 26 19.25 26 24 18.93 24 12c0-.37-.01-.73-.03-1.09.98-.7 1.83-1.57 2.5-2.56z" />
  </svg>
);

const LinkedInIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-10h3v10zM6.5 7.7c-.97 0-1.75-.79-1.75-1.75S5.53 4.2 6.5 4.2s1.75.79 1.75 1.75S7.47 7.7 6.5 7.7zM20 19h-3v-5.5c0-3.3-4-3.05-4 0V19h-3v-10h3v1.6c1.4-2.4 7-2.6 7 2.4V19z" />
  </svg>
);

/* FOOTER */
const Footer = () => {
  return (
    <footer className="relative bg-[#05060a] text-white overflow-hidden">
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">
            Sera<span className="text-cyan-400">UI</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Building premium UI systems for modern web experiences. Focused on
            performance, animation, and scalability.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[GitHubIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="
                  p-3 rounded-full
                  bg-white/5 border border-white/10
                  hover:scale-110 hover:bg-white/10
                  transition
                "
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          {["Home", "Courses", "Reviews", "1-on-1", "Contact"].map((item) => (
            <p
              key={item}
              className="text-gray-400 hover:text-white cursor-pointer transition mt-2"
            >
              {item}
            </p>
          ))}
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          {["FAQ", "Support", "Privacy Policy", "Terms"].map((item) => (
            <p
              key={item}
              className="text-gray-400 hover:text-white cursor-pointer transition mt-2"
            >
              {item}
            </p>
          ))}
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>

          <p className="text-gray-400 text-sm">India / Remote Worldwide</p>
          <p className="text-gray-400 text-sm mt-2">contact@seraui.dev</p>

          <button
            className="
            mt-6 px-5 py-3 rounded-full
            bg-gradient-to-r from-purple-600 to-cyan-500
            hover:scale-105 transition
            font-medium
          "
          >
            Connect with Team
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SeraUI — Built for premium web experiences.
      </div>
    </footer>
  );
};

export default Footer;
