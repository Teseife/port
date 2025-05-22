// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel as AppleCarousel,
  Card as AppleCard,
} from "@/components/ui/apple-cards-carousel";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Footer } from "@/components/ui/Footer";
import { AeroDetails } from "@/components/projects/AeroDetails";
import { PathFinderDetails } from "@/components/projects/PathFinderDetails";
import { PokemonColosseumDetails } from "@/components/projects/PokemonColosseumDetails";
import { StockDetails } from "@/components/projects/StockDetails";
import { MovieRecommenderDetails } from "@/components/projects/MovieRecommenderDetails";
import { CustomYoloV5Details } from "@/components/projects/CustomYoloV5Details";
import Image from "next/image";

type AppleCardData = {
  src: string;
  title: string;
  category: string;
  date: string;
  content: React.ReactNode;
};

export default function Home() {
  const router = useRouter();
  const [timeString, setTimeString] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat("en-US", opts).format(now));
    };
    updateClock();
    const iv = setInterval(updateClock, 1000);
    return () => clearInterval(iv);
  }, []);

  // Routing logic: prefix "." for relative internal routes
  const handleMenuClick = (href: string) => {
    if (href.startsWith("/")) {
      router.push(`.${href}`);
    } else if (href.startsWith("#")) {
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
    setMobileOpen(false);
  };

  // Follow your pages listing pattern exactly
  const navItems = [
    { name: "About",    link: "/About"   },
    { name: "Projects", link: "#projects" },
    { name: "Contact",  link: "#footer"   },
    { name: "Gallery",  link: "/Gallery"  },
  ];

  const appleCardsData: AppleCardData[] = [
    {
      category: "AeroAtlas",
      title: "Dynamic Travel Itineraries",
      date: "May 2025",
      src: "./images/aero-card-images/aero-card.png",
      content: <AeroDetails />,
    },
    {
      category: "StockSeer",
      title: "ML Stock Forecast",
      date: "April 2025",
      src: "./images/stock-predictor-card-images/stock-predictor-card.png",
      content: <StockDetails />,
    },
    {
      category: "Movie Recommender",
      title: "Algorithmic Film Picker",
      date: "March 2025",
      src: "./images/movie-recommender-card-images/movie-recommender-card.png",
      content: <MovieRecommenderDetails />,
    },
    {
      category: "Custom YOLOv5",
      title: "Edge Object Detection",
      date: "February 2025",
      src: "./images/custom-yolov5-card-images/custom-yolov5-card.png",
      content: <CustomYoloV5Details />,
    },
    {
      category: "Path Finder",
      title: "Grid World Route Planner",
      date: "January 2025",
      src: "./images/path-finder-card-images/path-finder-card.png",
      content: <PathFinderDetails />,
    },
    {
      category: "Pokémon Colosseum",
      title: "Turn-Based Battle Simulator",
      date: "December 2024",
      src: "./images/pokemon-colosseum-card-images/pokemon-colosseum-card.png",
      content: <PokemonColosseumDetails />,
    },
  ];

  const appleCards = appleCardsData.map((card, idx) => (
      <AppleCard
          key={card.title}
          card={{ ...card, title: `${card.title} · ${card.date}` }}
          index={idx}
      />
  ));

  return (
      <div className="min-h-screen flex flex-col">
        <ResizableNavbar className="fixed inset-x-0 top-0 z-40">
          <NavBody>
            <NavbarLogo />
            <NavItems
                items={navItems.map((item) => ({
                  name: item.name,
                  link: item.link,
                  onClick: () => handleMenuClick(item.link),
                }))}
            />
            <ThemeToggle />
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <ThemeToggle />
              <MobileNavToggle
                  isOpen={mobileOpen}
                  onClickAction={() => setMobileOpen((o) => !o)}
              />
            </MobileNavHeader>

            <MobileNavMenu isOpen={mobileOpen}>
              <NavItems
                  items={navItems.map((item) => ({
                    ...item,
                    onClick: () => {
                      handleMenuClick(item.link);
                      setMobileOpen(false);
                    },
                  }))}
                  className="flex flex-col gap-4 w-full"
                  onItemClick={() => setMobileOpen(false)}
              />
            </MobileNavMenu>
          </MobileNav>
        </ResizableNavbar>

        <AuroraBackground>
          <motion.div
              id="hero"
              className="relative flex flex-col items-center justify-center h-[100vh] text-center px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute top-16 w-full px-4 text-white">
              <p className="text-xs md:text-base">
                Full-Stack Dev • Jacksonville, <strong>{timeString} EST</strong>{" "}
                <span className="mx-2">|</span> Open to work & relocation
              </p>
              <hr className="my-2 border-white/50" />
            </div>
            <h1 className="mt-24 text-4xl md:text-4xl font-extrabold text-white leading-tight">
              Hello, I’m Thomas.
            </h1>
            <p className="mt-4 max-w-xl text-lg md:text-2xl text-white/80">
              Computer Science Student with a passion for software development!
            </p>
            <div className="flex flex-row items-center gap-4">
              <a
                  href="https://github.com/Teseife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
              >
                <Image src="./icons/github.svg" alt="GitHub" width={20} height={20} />
              </a>
              <a
                  href="https://linkedin.com/in/teseife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
              >
                <Image src="./icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
              <a
                  href="./PDFs/Thomas_resume_Project.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
              >
                <Image src="./icons/resume.svg" alt="Resume" width={30} height={30} />
              </a>
            </div>
          </motion.div>
        </AuroraBackground>

        <main className="flex-1 container mx-auto px-4 py-8 space-y-20">
          <section id="projects" className="space-y-4">
            <div className="pl-32">
              <h2 className="text-3xl font-bold ">My Projects</h2>
              <h5>Click cards for more details</h5>
            </div>
            <AppleCarousel items={appleCards} />
          </section>
          <Separator />
        </main>

        <Footer />
      </div>
  );
}
