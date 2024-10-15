'use client';

import React, { useEffect, useState } from 'react'
import { IWorkspaceListProps, Project, User } from "@/types";
import api from "@/lib/api";
import { AxiosResponse } from "axios";
import { Button } from "@/components/ui/button";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import BlankCard from "@/components/BlankCard";

const WorkspaceList = ({ userId }: IWorkspaceListProps) => {
    const [user, setUser] = useState<User>(Object);
    const [projects, setProjects] = useState<Project>(Object);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response: AxiosResponse<any, any> = await api.get(`/api/user?id=${userId}`);
                setUser(response.data);

            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        fetchUser();
    }, []);

    return (
        <div className='my-10 p-10 md:px-24 lg:px-36 xl:px-52'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>Hi {user?.firstName}</h2>
                <Button>Create Project</Button>
            </div>

            <div className='mt-12 flex justify-between'>
                <div>
                    <h1 className='text-primary text-4xl font-bold'>
                        Workspace - Ongoing Projects
                    </h1>
                </div>
                <div className='flex gap-2'>
                    <LayoutGrid />
                    <AlignLeft />
                </div>
            </div>

            {/* TODO: Change logic for later*/}

            {user.createdProjects?.length > 0 ? (
                <div className='flex justify-items-start items-center my-12 gap-4'>
                    {user.createdProjects.map((project, index) => (
                        <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc}
                                     projectStatus={project.projectStatus} projectStartDate={project.projectStartDate}
                                     projectEndDate={project.projectEndDate} projectMilestones={project.projectMilestones}
                                     members={project.members} user_id={userId} />
                    ))}
                    <BlankCard />
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center my-12'>
                    <Image src='/images/workspace.png' alt='workspace' width={200} height={200}/>

                    <h2 className='font-semibold text-2xl mt-10'>
                        Create a new project
                    </h2>

                    <Button variant='outline' className='my-3'>+ Create Project</Button>
                </div>)
            }
        </div>
    );
}

export default WorkspaceList;