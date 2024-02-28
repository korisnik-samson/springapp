import type { Metadata } from "next";
import { Inter, Inter as FontSans } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";

const fontSans: NextFontWithVariable = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Student360",
    description: "Modern student management system",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={cn(fontSans.className, inter)}>
                {children}
            </body>
        </html>
    );
}
