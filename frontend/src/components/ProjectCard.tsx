import React from 'react'
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BellIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ProjectCardProps } from "@/types";

const ProjectCard = ({ projectName, projectTasks, className, ...props  }: ProjectCardProps) => {
    return (
        <Card className={cn("w-[380px] h-auto mt-10", className)} {...props}>
            <CardHeader>
                <CardTitle>{projectName}</CardTitle>
                <CardDescription>{`You have ${projectTasks.length} tasks.`}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">{`Notifications about ${projectName}.`}</p>
                    </div>
                    <Switch />
                </div>
                <div>
                    {projectTasks?.map((task, index) => (
                        <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{task.title}</p>
                                <p className="text-sm text-muted-foreground">{task.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Open Project</Button>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;