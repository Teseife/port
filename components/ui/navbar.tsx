// components/ui/navbar.tsx (Example)
"use client"

import React from "react"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"

interface NavbarProps {
    onNavSelect: (hash: string) => void
}

export function Navbar({ onNavSelect }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 border-b bg-background text-foreground">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-xl font-bold">My Portfolio</div>

                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Menu</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={() => onNavSelect("#about")}>About</MenubarItem>
                            <MenubarItem onClick={() => onNavSelect("#projects")}>Projects</MenubarItem>
                            <MenubarItem onClick={() => onNavSelect("#contact")}>Contact</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    )
}
