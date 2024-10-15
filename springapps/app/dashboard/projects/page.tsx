'use client';

import React, { useEffect, useState } from "react";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/endpoints";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CreateProjectForm from "@/components/forms/CreateProjectForm";

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    useEffect(() => {
        async function fetchProjects() {
            try {
                setIsLoading(true);
                setProjects(await getProjects());

            } catch (error) {
                console.error('Error fetching projects:', error);

            } finally {
                setIsLoading(false);
            }
        }

        fetchProjects();
    }, []);

    console.log({ projects });

    const filteredProjects = projects?.filter(project =>
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newProject = Object.fromEntries(formData.entries());
        console.log('New project data:', newProject);
        // Here you would typically send this data to your backend
        setIsDialogOpen(false);
    };

    return (
        <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-primary">
                        Ongoing Projects
                    </h1>

                    <CreateProjectForm renderText='Project' isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} handleSubmit={handleSubmit} />
                </div>

                <div className="mb-6">
                    <Input type="text" placeholder="Search projects..." value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} className="max-w-sm" />
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2Icon className="h-8 w-8 animate-spin text-primary"/>
                    </div>
                ) : filteredProjects && filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc}
                                 projectStatus={project.projectStatus} projectStartDate={project.projectStartDate}
                                 projectEndDate={project.projectEndDate} projectMilestones={project.projectMilestones}
                                 members={project.members} />
                            )
                        )}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 mt-8">
                        No projects found. {searchTerm && "Try adjusting your search."}
                    </div>
                )}
            </div>
        </div>
    )
}