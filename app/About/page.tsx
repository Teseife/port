// app/about/page.tsx
"use client";

import React, { useState } from "react";
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
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme } = useTheme();
    const router = useRouter();

    const navItems = [
        { name: "Home", link: "https://teseife.github.io/port/" },
        { name: "About", link: "https://teseife.github.io/port/About" },
        { name: "Contact", link: "#footer"},
        { name: "Gallery", link: "https://teseife.github.io/port/Gallery" },
    ];

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

    const textColorClass = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <div className="w-full min-h-screen">
            <Navbar>
                <NavBody className="backdrop-blur-md bg-white/80 dark:bg-neutral-900/80">
                    <NavbarLogo />
                    <NavItems
                        items={navItems}
                        className={textColorClass}
                        onItemClick={handleMenuClick}
                    />
                    <ThemeToggle />
                </NavBody>

                <MobileNav className="backdrop-blur-md bg-white/80 dark:bg-neutral-900/80">
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
                            items={navItems}
                            className={`flex flex-col gap-4 w-full ${textColorClass}`}
                            onItemClick={handleMenuClick}
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