import { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "A modern single-page portfolio",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
