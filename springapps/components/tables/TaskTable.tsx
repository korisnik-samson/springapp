import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CalendarIcon, MoreHorizontalIcon } from "lucide-react"
import React from "react";
import { Priority, Status, Task } from "@/types";

const statusColors: Record<Status, string> = {
    'Not Started': 'bg-gray-500',
    'In Progress': 'bg-blue-500',
    'Completed': 'bg-green-500',
    'Blocked': 'bg-red-500'
}

const priorityColors: Record<Priority, string> = {
    'Low': 'bg-yellow-500',
    'Medium': 'bg-orange-500',
    'High': 'bg-red-500',
    'Urgent': 'bg-red-700'
}

const TaskTable = ({ tasks }: { tasks: Task[] }) => {
    console.log({ tasks });

    return (
        <div className="container mx-auto py-10">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Task ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tasks?.map((task) => (
                        <TableRow key={task.taskId}>
                            <TableCell className="font-medium">{task.taskId}</TableCell>
                            <TableCell>
                                <div>{task.taskTitle}</div>
                                <div className="text-sm text-gray-500">{task.taskDescription}</div>
                            </TableCell>
                            <TableCell>
                                <Badge className={`${statusColors[task.taskStatus]} text-white`}>
                                    {task.taskStatus}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                                    <span>{task.taskStartDate}</span>
                                </div>
                            </TableCell>

                            <TableCell>
                                <div className="flex items-center">
                                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                                    <span>{task.taskDueDate}</span>
                                </div>
                            </TableCell>

                            <TableCell>
                                <div className="flex -space-x-2">
                                    {task.assignee?.map((user) => (
                                        <Avatar key={user.id} className="h-8 w-8 border-2 border-background">
                                            <AvatarImage src={user.avatar} alt={user.firstName}/>
                                            <AvatarFallback>{user.firstName.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                            </TableCell>

                            <TableCell>
                                <Badge className={`${priorityColors[task.taskPriority]} text-white`}>
                                    {task.taskPriority}
                                </Badge>
                            </TableCell>

                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontalIcon className="h-4 w-4"/>
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Edit Task</DropdownMenuItem>
                                        <DropdownMenuItem>View Details</DropdownMenuItem>

                                        <DropdownMenuSeparator/>

                                        <DropdownMenuItem className='bg-red-100 text-red-800'>Delete Task</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TaskTable;