
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Hero from "./components/Hero";

import MarqueeText from "./components/Scroller";
import PremiumInfiniteScroller from "./components/SectionScroller";

import NewsletterCoursesSection from "./components/NewsLetter";
import PremiumCoursesSection from "./components/Courses";
import PremiumSplitSection from "./components/Drop";

import PremiumReviewsSection from "./components/Reviews";
import HeroSection from "./components/HeroSection";
import PremiumFAQSection from "./components/F&Q";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#05060a] overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* FLOATING UI (GLOBAL OVERLAY) */}
      <FloatingWhatsApp />

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* TRUST / SCROLL STRIP */}
      <section>
        <MarqueeText />
      </section>

      {/* COURSES INTRO / VALUE */}
      <section id="courses">
        <NewsletterCoursesSection />
      </section>

      <section>
        <PremiumCoursesSection />
      </section>

      {/* FEATURE SPLIT SECTION */}
      <section>
        <PremiumSplitSection />
      </section>

      {/* SOCIAL PROOF SCROLLER */}
      <section>
        <PremiumInfiniteScroller />
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <PremiumReviewsSection />
      </section>

      {/* SECOND HERO / CTA BOOST */}
      <section>
        <HeroSection />
      </section>

      {/* FAQ */}
      <section id="faq">
        <PremiumFAQSection />
      </section>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
