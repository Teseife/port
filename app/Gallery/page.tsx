// app/gallery/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
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
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Footer } from "@/components/ui/Footer";

export default function GalleryPage() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/About" },
        { name: "Contact", link: "#footer" },
    ];

    const handleMenuClick = (href: string) => {
        if (href.startsWith("/")) {
            window.location.href = href;
        } else {
            const el = document.getElementById(href.replace("#", ""));
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        setMobileOpen(false);
    };

    const imagePaths = [
        "/images/gallery/photo1.png",
        "/images/gallery/photo2.png",
        "/images/gallery/photo3.png",
        "/images/gallery/photo4.png",
        "/images/gallery/photo5.png",
        "/images/gallery/photo6.png",
        "/images/gallery/photo7.png",
        "/images/gallery/photo8.png",
        "/images/gallery/photo10.png",
        "/images/gallery/photo11.png",
        "/images/gallery/photo12.png",
        "/images/gallery/photo13.png",
        "/images/gallery/photo14.png",
        "/images/gallery/photo15.png",
        "/images/gallery/photo16.png",
        "/images/gallery/photo17.png",
        "/images/gallery/photo18.png",
        "/images/gallery/photo19.png",
        "/images/gallery/photo20.png",
        "/images/gallery/photo21.png",
        "/images/gallery/photo22.png",
        "/images/gallery/photo23.png",
        "/images/gallery/photo24.png",
        "/images/gallery/photo25.png",
        "/images/gallery/photo26.png",
        "/images/gallery/photo27.png",
        "/images/gallery/photo28.png",
        "/images/gallery/photo29.png",
        "/images/gallery/photo30.png",
        "/images/gallery/photo31.png",
        "/images/gallery/photo32.png",
        "/images/gallery/photo33.png",
        "/images/gallery/photo34.png",
        "/images/gallery/photo35.png",
        "/images/gallery/photo36.png",
        "/images/gallery/photo37.png",
        "/images/gallery/photo38.png",
        "/images/gallery/photo39.png",
        "/images/gallery/photo40.png",
        "/images/gallery/photo41.png",
        "/images/gallery/photo42.png",
        "/images/gallery/photo43.png",
        "/images/gallery/photo44.png",
        "/images/gallery/photo45.png",
        "/images/gallery/photo46.png",
        "/images/gallery/photo47.png",
        "/images/gallery/photo48.png",
        "/images/gallery/photo49.png",
        "/images/gallery/photo50.png",
        "/images/gallery/photo51.png",
        "/images/gallery/photo52.png",
        "/images/gallery/photo53.png",
        "/images/gallery/photo54.png",
        "/images/gallery/photo55.png",
        "/images/gallery/photo56.png",
        "/images/gallery/photo57.png",
        "/images/gallery/photo58.png",
        "/images/gallery/photo59.png",
        "/images/gallery/photo60.png",
        "/images/gallery/photo61.png",
    ];

    // Shuffle image order once per render
    const shuffledPaths = useMemo(() => {
        return [...imagePaths].sort(() => Math.random() - 0.5);
    }, [imagePaths]);

    return (
        <div className="min-h-screen flex flex-col">
            <ResizableNavbar className="fixed inset-x-0 top-0 z-40 bg-background">
                <NavBody>
                    <NavbarLogo />
                    <NavItems
                        items={navItems}
                        onItemClick={handleMenuClick}
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
                    <MobileNavMenu
                        isOpen={mobileOpen}
                    >
                        <NavItems
                            items={navItems}
                            onItemClick={() => setMobileOpen(false)}
                        />
                    </MobileNavMenu>
                </MobileNav>
            </ResizableNavbar>

            <main className="flex-1 pt-20 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shuffledPaths.map((src, idx) => (
                        <div key={idx} className="flex justify-center">
                            <Image
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                width={400}
                                height={300}
                                className="w-[80%] h-auto rounded-lg shadow-md object-contain"
                            />
                        </div>
                    ))}
                </div>
            </main>
            <p className="self-center text-gray-400 text-sm">
                * The images shown here are a combination of pictures taken by the author, while others are images shared from friends and also the internet as well.
            </p>

            <Footer />
        </div>
    );
}
