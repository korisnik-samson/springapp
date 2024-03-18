import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
    return (
        <React.Fragment>
            <MaxWidthWrapper className="mb-12 mt-28 sm:mt-49 flex flex-col items-center justify-center text-center">
                <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full
                 border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
                    <p className="text-sm font-semibold text-gray-700">
                        TaskHive is now public!
                    </p>
                </div>
                <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                    Manage your projects <span className="text-orange-600">TaskHive</span> style
                </h1>
                <p className="mt-5 max-w-prose sm:text-lg">Create your First Project!</p>


                <Link className={buttonVariants({ size: 'lg', className: 'mt-5' })} href='/project' target='_blank'>
                    Get Started
                    <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
            </MaxWidthWrapper>
            {/*<CustomGradient />*/}
        </React.Fragment>
    );
}
