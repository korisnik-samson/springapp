import type { Metadata } from "next";
import { Inter, Inter as FontSans } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";

const fontSans: NextFontWithVariable = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TaskHive",
    description: "Modern project management system",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={cn(fontSans.className, inter)}>
                <ThemeProvider attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
                    <Toaster />
                    <NavBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
