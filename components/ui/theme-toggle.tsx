// components/ui/theme-toggle.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LucideMoon, LucideSun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-white/20 dark:bg-white/20 hover:bg-white/30 dark:hover:bg-black/30 transition"
        >
            {theme === "light" ? (
                <LucideSun className="h-5 w-5 text-yellow-500" />
            ) : (
                <LucideMoon className="h-5 w-5 text-violet-800" />
            )}
        </button>
    );
}
