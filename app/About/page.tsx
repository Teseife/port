// app/about/page.tsx
"use client";

import React, {useState} from "react";
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
import {router} from "next/client";

export default function AboutPage() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme } = useTheme();

    const navItems = [
        { name: "Home", link: "https://teseife.github.io/port/" },
        { name: "About", link: "https://teseife.github.io/port/About" },
        { name: "Contact", link: "#footer"},
        { name:"Gallery", link: "https://teseife.github.io/port/Gallery" },
    ];
    const handleMenuClick = (href: string) => {
        // Internal Next.js routes now pushed as relative paths
        if (href.startsWith("/")) {
            router.push(`.${href}`);
        }
        // Hash links (e.g. "#footer")
        else if (href.startsWith("#")) {
            const id = href.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
        // External URLs
        else {
            window.location.href = href;
        }

        setMobileOpen(false);
    };
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
                        onItemClick={handleMenuClick}
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
                            onClickAction={() => setMobileOpen((o) => !o)}


                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMenuOpen}
                    >
                        <NavItems
                            items={navItems}
                            className={`flex flex-col gap-4 w-full ${textColorClass}`}
                            onItemClick={() => setMobileOpen(false)}
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