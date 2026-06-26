"use client";

import React, { useEffect } from "react";

/**
 * 💎 PREMIUM HERO (TECH + TEAM CONVERSION VERSION)
 * Clean SaaS / Startup level UI
 */

function SocialLink({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="
        bg-white/5 border border-white/10
        backdrop-blur-xl
        p-3 rounded-full
        text-white
        hover:scale-110 hover:bg-white/10
        transition duration-300
      "
    >
      {children}
    </a>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05060a] font-[Inter,system-ui]">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">

        {/* AVATAR */}
        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full p-[3px] bg-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/49/3c/e7/493ce760bc067f2530d73365ace0d66c.jpg"
              className="w-full h-full rounded-full object-cover"
              alt="profile"
            />
          </div>

          <div className="absolute bottom-2 -right-2 text-4xl animate-wave">
            👋
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Rose
          </span>
          , a{" "}
          <span className="font-bold">
            Tech-Focused Frontend Developer
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          I build{" "}
          <span className="text-white font-medium">
            high-performance, animated, and scalable web interfaces
          </span>{" "}
          using React and modern frontend systems.  
          My focus is creating smooth, production-grade user experiences for
          real products.
        </p>

        {/* EXTRA INFO (NEW ADDED CONTENT) */}
        <div className="mt-5 text-gray-500 text-sm md:text-base max-w-xl">
          💡 Open for collaboration on <span className="text-white">SaaS products</span>,  
          startup UI systems, and scalable frontend architecture.  
          <br />
          <span className="text-cyan-400">
            For more information or project discussions, connect with my team.
          </span>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 mt-10 flex-wrap justify-center">

          <a
            href="mailto:example@email.com"
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-full
              bg-gradient-to-r from-purple-600 to-cyan-500
              text-white font-medium
              hover:scale-105 transition
              shadow-lg
            "
          >
            Contact Me
          </a>

          <a
            href="#"
            className="
              px-6 py-3
              rounded-full
              border border-white/10
              bg-white/5
              text-white
              hover:bg-white/10
              transition
            "
          >
            Connect with Team
          </a>

          <SocialLink href="https://linkedin.com" ariaLabel="LinkedIn">
            <LinkedInIcon />
          </SocialLink>

          <SocialLink href="https://github.com" ariaLabel="GitHub">
            <GitHubIcon />
          </SocialLink>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(10deg); }
        }

        .animate-wave {
          transform-origin: 70% 70%;
          display: inline-block;
          animation: wave 2.5s infinite;
        }
      `}</style>
    </section>
  );
}

/* ICONS */
function LinkedInIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5"/>
      <path d="M9 22v-6"/>
    </svg>
  );
}

export default function Portfolio3Page() {
  useEffect(() => {
    document.body.style.background = "#05060a";
  }, []);

  return <HeroSection />;
}