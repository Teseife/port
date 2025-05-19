// app/about/page.tsx
"use client";

import React from "react";
import { useTheme } from "next-themes";
import TimelineDemo from "@/components/about-timeline";
import {
    Navbar,
    NavBody,
    NavItems,
    NavbarLogo,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle
} from "@/components/ui/resizable-navbar";
import { Footer } from "@/components/ui/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function AboutPage() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { theme } = useTheme();

    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/About" },
        { name: "Contact", link: "#footer" },
        { name:"Gallery", link: "/Gallery" },
    ];

    // Dynamic text color based on theme
    const textColorClass = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <div className="w-full min-h-screen">
            <Navbar>
                {/* Desktop Nav */}
                <NavBody className="backdrop-blur-md bg-white/80 dark:bg-neutral-900/80">
                    <NavbarLogo  />
                    <NavItems
                        items={navItems}
                        className={textColorClass}
                    />
                    <ThemeToggle />
                </NavBody>

                {/* Mobile Nav */}
                <MobileNav className="backdrop-blur-md bg-white/80 dark:bg-neutral-900/80">
                    <MobileNavHeader>
                        <NavbarLogo  />
                        <ThemeToggle />
                        <MobileNavToggle
                            isOpen={isMenuOpen}
                            onClickAction={() => setIsMenuOpen(!isMenuOpen)}

                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMenuOpen}
                    >
                        <NavItems
                            items={navItems}
                            className={`flex flex-col gap-4 w-full ${textColorClass}`}
                            onItemClick={() => setIsMenuOpen(false)}
                        />
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            <main className="pt-32">
                <TimelineDemo />
            </main>

            <Footer />
        </div>
    );
}