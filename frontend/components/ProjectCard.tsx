import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, Users2Icon } from "lucide-react"
import { IProjectCard } from "@/types";
import { getInitials, getProjectProgress } from "@/lib/utils";
import Link from "next/link";

const ProjectCard = ({ projectName, projectDesc, projectStatus, projectStartDate, projectEndDate,
                         projectMilestones, members, user_id }: IProjectCard) => {

    const projectProgress = getProjectProgress(projectStartDate.toString(),
                            projectEndDate.toString());

    return (
        <Link href={`/dashboard/${user_id}/tasks`} >
            <Card className="w-[350px] rounded-lg border-grey-400 hover:border-purple-400 transition-colors duration-300">
                <CardHeader>
                    <CardTitle>{projectName}</CardTitle>
                    <CardDescription>{projectDesc}</CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <Badge variant="outline">{projectStatus}</Badge>

                        <span className="text-sm text-muted-foreground">
                            {`${projectProgress}% Complete`}
                        </span>
                    </div>

                    <Progress value={projectProgress} className="w-full" />

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <Users2Icon className="mr-1 h-4 w-4" />
                            <span>{`5 members`}</span>
                        </div>

                        <div className="flex items-center">
                            <CalendarIcon className="mr-1 h-4 w-4"/>
                            <span>{projectEndDate.toString()}</span>
                        </div>
                    </div>

                    <div className="flex -space-x-2">
                        {members && members.map((member, index) => (
                            <Avatar className="border-2 border-background">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                <AvatarFallback>
                                    {getInitials(member.firstName, member.lastName)}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                </CardContent>

                <CardFooter>
                    <p className="text-sm text-muted-foreground">
                        Last updated: 2 days ago
                    </p>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProjectCard;