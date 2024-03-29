import React from 'react'
import { ProjectPageProps } from "@/types";

const Page = async ({ params: { projectId } }: ProjectPageProps) => {

    return (
        <main className="mx-auto max-w-7xl md:p-10">
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row
            sm:items-center sm:gap-0">
                <h1 className="mb-3 font-bold text-5xl">
                    My Project
                </h1>
            </div>
        </main>
    )
}

export default Page;