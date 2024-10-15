import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "Intelli",
    description: "Project Management app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={GeistSans.className}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
