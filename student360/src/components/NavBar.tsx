import React from 'react'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const NavBar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-black/75
        backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between">
                    <Link href='/' className="flex z-40 font-semibold">
                        Student360
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <React.Fragment>
                            <Link href='' className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
                                Sign in
                            </Link>

                            <Link href='' className={buttonVariants({ size: 'sm' })}>
                                Get Started
                                <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>

                            <ModeToggle />
                        </React.Fragment>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}

export default NavBar;