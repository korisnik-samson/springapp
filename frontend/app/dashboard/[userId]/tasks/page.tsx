'use client';

import React, { useEffect, useState } from 'react'
import TaskTables from "@/components/TaskTables";
import { Project, SearchParamProps, Task, User } from "@/types";
import { AxiosResponse } from "axios";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { AlignLeft, LayoutGrid } from "lucide-react";

const Page = ({ params: { userId } }: SearchParamProps) => {
    // careful of this line, it's not the same as the one in the snippet
    const [tasks, setTasks] = useState<Task[]>(Array<Task>());
    const [user, setUser] = useState<User>();

    useEffect(() => {
        async function extractUserTasks(): Promise<void> {
            try {
                const response: AxiosResponse<any, any> = await api.get(`/api/user?id=${userId}`);

                // extract tasks and projects from user object
                setTasks(response.data.createdProjects[0].projectTasks);
                setUser(response.data);

            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        extractUserTasks();
    }, []);

    return (
        <div className='my-10 p-10 md:px-24 lg:px-36 xl:px-52'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>Hi again {user?.firstName}</h2>
                <Button>Create Task</Button>
            </div>

            <div className='mt-12 flex justify-between'>
                <div>
                    <h1 className='text-primary text-4xl font-bold'>
                        Workspace - Current Tasks
                    </h1>
                </div>
                <div className='flex gap-2'>
                    <Button variant='outline'><LayoutGrid/></Button>
                    <Button variant='outline'><AlignLeft/></Button>

                </div>
            </div>

            <div className='my-12 gap-4'>
                <TaskTables taskDetails={tasks} />
            </div>
        </div>
    );
}

export default Page;