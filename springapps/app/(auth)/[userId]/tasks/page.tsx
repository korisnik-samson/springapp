'use client'

import React, { useEffect, useState } from 'react'
import { Task } from "@/types";
import { getTasks } from "@/lib/endpoints";
import TaskTable from "@/components/tables/TaskTable";

const Page = () => {
    const [tasks, setTasks] = useState<Task[]>();

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
        <TaskTable tasks={tasks} />
    );
}

export default Page;