"use client"

import React, { useEffect, useState } from 'react'
import ProjectCard from "@/components/ProjectCard";
import CreateProjectButton from "@/components/CreateProjectButton";
import { Skeleton } from "@/components/ui/skeleton";
import { Ghost } from "lucide-react";

const ProjectPage = () => {
    const projectApiUrl = 'http://localhost:8080/api/project';

    const [projects, setProjects] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProjects = async(): Promise<any> => {
            setLoading(true);

            try {
                const response = await fetch(projectApiUrl, {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'GET'
                })

                const data = await response.json();
                setProjects(data);

            } catch (error) {
                throw new Error('Error fetching projects');
            }

            setLoading(false);
        };

        fetchProjects();
    }, []);

    return (
        <main className="mx-auto max-w-7xl md:p-10">
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row
            sm:items-center sm:gap-0">
                <h1 className="mb-3 font-bold text-5xl">My Projects</h1>
                <CreateProjectButton />
            </div>
            {projects && !loading? (
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {!loading && projects.map((project: any) => (
                        <li key={project.id} className="col-span-1">
                            <ProjectCard projectName={project.projectName!} projectTasks={project.projectTasks!} />
                        </li>
                    ))}
                </ul>
            ) : loading ? (
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Skeleton className="h-4 w-[250px]" />
                </ul>
            ) : (
                <div className="mt-16 flex flex-col items-center gap-2">
                    <Ghost className="h-8 w-8 text-zinc-800" />
                    <h3 className="font-semibold text-xl">
                        Pretty empty around here don&apos;t you think?
                    </h3>
                    <p>Let&apos;s create your first project!</p>
                </div>
            )}
        </main>
    );
}

export default ProjectPage;