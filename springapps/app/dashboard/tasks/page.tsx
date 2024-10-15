'use client'

import React, { useEffect, useState } from 'react'
import { Task } from "@/types";
import { getTasks } from "@/lib/endpoints";
import TaskTable from "@/components/tables/TaskTable";
import CreateProjectForm from "@/components/forms/CreateProjectForm";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import CreateTaskForm from "@/components/forms/CreateTaskForm";

const Page = () => {
    const [tasks, setTasks] = useState<Task[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    useEffect(() => {
        async function fetchTasks() {
            try {
                setTasks(await getTasks());

            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        fetchTasks();
    }, []);

    console.log({ tasks });

    // @ts-ignore
    return (
        <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-primary">
                        All Tasks
                    </h1>

                    <CreateTaskForm isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
                </div>

                <div className="mb-6">
                    <Input type="text" placeholder="Search tasks..." value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)} className="max-w-sm"/>
                </div>

                <TaskTable tasks={tasks!} />
            </div>
        </div>
    );
}

export default Page;