import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">&copy; 2024 Samson. All rights reserved.</p>

            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs transition-colors" href="#">
                    Terms of Service
                </Link>
                <Link className="text-xs transition-colors" href="#">
                    Privacy
                </Link>
            </nav>
        </footer>
    );
}

export default Footer;