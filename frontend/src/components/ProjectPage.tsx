"use client"

import React, { useEffect, useState } from 'react'
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const ProjectPage = () => {
    const projectApiUrl = 'http://localhost:8080/api/project';

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // Return Promise<any> instead of void
        const fetchProjects = async (): Promise<any> => {
            setLoading(true);
            try {
                const response = await fetch(projectApiUrl, {
                    headers: { 'Content-Type': 'application/json' },
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

    // console.log({ projects })

    const createProject = async () => {
        try {
            const response = await fetch(projectApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ projectName: 'New Project' }),
            })

            const data = await response.json();
            // setProjects([...projects, data]);

        } catch (error) {
            throw new Error('Error creating project');
        }
    }

    return (
        <main className="mx-auto max-w-7xl md:p-10">
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row
            sm:items-center sm:gap-0">
                <h1 className="mb-3 font-bold text-5xl">My Projects</h1>
                <Button className="w-[150]" onClick={() => {}}>Create Project</Button>
            </div>
            {projects && (
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {!loading && projects.map((project: any) => (
                        <li key={project.id} className="col-span-1">
                            <ProjectCard projectName={project.projectName!} projectTasks={project.projectTasks!} />
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}

export default ProjectPage;