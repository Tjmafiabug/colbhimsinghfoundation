"use client";

// ============================================================================
// CUSTOMIZATION — edit values here to adapt the hero for your needs
// ============================================================================

const COLORS = {
  primaryBtnBg: "#FDFAF5",
  primaryBtnText: "#0F0C08",
  primaryBtnHoverBg: "#FFFFFF",
  secondaryBtnBg: "rgba(255,255,255,0.08)",
  secondaryBtnHoverBg: "rgba(255,255,255,0.18)",
} as const;

const VIDEO = {
  src: "/Videos/Hero.mp4",
  poster: "",
} as const;

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const INITIATIVES = [
  { label: "Anti-Drug Campaign", href: "/initiatives#anti-drug" },
  { label: "Free Eye Camps", href: "/initiatives#eye-camps" },
  { label: "Gurdwara Sahib Construction", href: "/initiatives#gurdwara" },
  { label: "CHRS Equestrian Championship", href: "/initiatives#equestrian" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  logoText?: string;
  navLinks?: readonly { label: string; href: string }[];
  title?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  initiatives?: readonly { label: string; href: string }[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  videoSrc?: string;
  videoPoster?: string;
}

export function Hero({
  logoText = "Col. Bhim Singh Foundation",
  navLinks = NAV_LINKS,
  title = "Serving the Nation,\nOne Village at a Time",
  primaryButtonText = "Explore Initiatives",
  primaryButtonHref = "/initiatives",
  secondaryButtonText = "Our Story",
  secondaryButtonHref = "/about",
  initiatives = INITIATIVES,
  ctaButtonText = "Get Involved",
  ctaButtonHref = "/contact",
  videoSrc = VIDEO.src,
  videoPoster = VIDEO.poster,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const fadingOut = useRef(false);
  const FADE_DURATION = 1.5; // seconds before end to start fade

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const timeLeft = video.duration - video.currentTime;

      if (timeLeft < FADE_DURATION && !fadingOut.current) {
        fadingOut.current = true;
        setVideoOpacity(0);
      }
      if (video.currentTime < 0.3 && fadingOut.current) {
        fadingOut.current = false;
        setVideoOpacity(1);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="bg-cream pb-6 relative pt-0">
      {/* Navigation */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white"
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="/"
              className="font-display text-lg font-semibold text-void tracking-tight flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {logoText}
              <span className="w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0" aria-hidden="true" />
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-void/80 hover:text-void transition-colors uppercase tracking-wide"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href={ctaButtonHref}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-saffron rounded-full hover:bg-saffron-dark transition-colors cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {ctaButtonText}
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex lg:aspect-[2] flex-col items-center justify-center text-white relative lg:max-h-[900px] w-full mx-auto overflow-hidden h-[90vh] max-h-[660px] min-h-[500px]">
        {/* Video background */}
        <div className="absolute inset-0 z-0 mt-0 lg:mt-16">
          <div className="px-0 lg:px-4 w-full h-full max-w-[1600px] mx-auto">
            <div className="h-full w-full lg:rounded-xl rounded-none relative overflow-hidden">
              <video
                ref={videoRef}
                className="absolute inset-0 object-cover w-full h-full scale-[1.08] object-[center_40%]"
                style={{ opacity: videoOpacity, transition: `opacity ${FADE_DURATION}s ease` }}
                playsInline
                loop
                muted
                autoPlay
                poster={videoPoster || undefined}
                preload="auto"
                aria-hidden="true"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-void/50" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-0 lg:px-4 w-full h-full flex max-w-[1600px] mx-auto">
          <div className="px-4 lg:px-0 w-11/12 md:w-full lg:w-[87.5%] mx-auto relative mt-auto mb-16 flex flex-col md:flex-row">
            {/* Left — headline + buttons */}
            <div className="-mt-3">
              <motion.h1
                className="font-display text-5xl lg:text-6xl !leading-[1.05] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {title.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                className="flex gap-2.5 items-center flex-wrap"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <a
                  href={primaryButtonHref}
                  className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-saffron px-4 py-2.5 text-sm leading-6 rounded-full cursor-pointer"
                  style={{ backgroundColor: COLORS.primaryBtnBg, color: COLORS.primaryBtnText }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.primaryBtnHoverBg)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.primaryBtnBg)}
                >
                  {primaryButtonText}
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={secondaryButtonHref}
                  className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50 px-4 py-2.5 text-sm leading-6 rounded-full backdrop-blur text-white outline outline-1 outline-white/50 -outline-offset-1 cursor-pointer"
                  style={{ backgroundColor: COLORS.secondaryBtnBg }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.secondaryBtnHoverBg)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.secondaryBtnBg)}
                >
                  {secondaryButtonText}
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Right — initiative links */}
            <motion.div
              className="md:ml-[6.25%] mt-8 md:mt-0 md:self-end"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-3.5">
                {initiatives.map((item, index) => (
                  <a key={item.label} href={item.href} className="group">
                    <p className="text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center opacity-50 group-hover:opacity-100 text-white">
                      {item.label}
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 ml-2 -translate-x-1 group-hover:translate-x-0">
                        ↗
                      </span>
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
