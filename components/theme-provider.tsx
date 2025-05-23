// "use client"
//
// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"
//
// export function ThemeProvider({
//                                   children,
//                                   ...props
//                               }: React.ComponentProps<typeof NextThemesProvider>) {
//     return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }
// components/ui/theme-provider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
                                  children,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider
            {...props}
            attribute="class"       // use class strategy
            defaultTheme="dark"    // or "dark", whichever you prefer as initial
            enableSystem={false}    // ← disable system-based theming
            storageKey="theme"
        >
            {children}
        </NextThemesProvider>
    );
}
