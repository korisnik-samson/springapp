import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { NextFont } from "next/dist/compiled/@next/font";

const outfit: NextFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Intelli",
    description: "Project Management app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={outfit.className}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
