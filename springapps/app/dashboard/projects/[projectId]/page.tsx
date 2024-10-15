'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { PlusIcon } from 'lucide-react'
import { useParams } from "next/navigation";
import { getProjectById } from "@/lib/endpoints";
import { Task } from "@/types";

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{task.taskTitle}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Status: {task.taskStatus}</p>
            </CardContent>
            <CardFooter>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">View Details</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{task.taskStatus}</DialogTitle>
                            <DialogDescription>{task.taskDescription}</DialogDescription>
                        </DialogHeader>
                        <p className="mt-2">Status: {task.taskStatus}</p>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    )
}

const Page = () => {
    const params = useParams()
    const projectId = params?.projectId as string
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        async function fetchProjectTasks(projectId: any) {
            try {
                setTasks(await getProjectById(projectId as string))

            } catch (error: any) {
                console.error('Error fetching project tasks', error.message)
            }
        }

        fetchProjectTasks(projectId)
    }, [projectId])

    console.log({ tasks })

    const addTask = () => {}

    if (!projectId) return <div>No project ID found</div>

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Task Dashboard</h1>
                <Button variant='default'>
                    <PlusIcon className="mr-2 h-4 w-4"/> Add Task
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks?.map((task) => (
                    <TaskCard key={task.taskId} task={task}/>
                ))}
            </div>
        </div>
    )
}

export default Page;