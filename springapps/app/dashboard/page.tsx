'use client';

import { useEffect, useState } from "react";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/endpoints";

export default function Dashboard() {
    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        async function fetchProjects() {
            try {
                setProjects(await getProjects());
                
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        fetchProjects();
    }, []);

    console.log({ projects });

    return (
        <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-primary mb-6">
                    Dashboard - Projects
                </h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects?.map((project, index) => (
                        <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc}
                                 projectStatus={project.projectStatus} projectStartDate={project.projectStartDate}
                                 projectEndDate={project.projectEndDate} projectMilestones={project.projectMilestones}
                                 members={project.members} />
                    ))}
                </div>
            </div>
        </div>
    )
}