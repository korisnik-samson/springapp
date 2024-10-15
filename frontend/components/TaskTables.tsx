'use client';

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ChevronDown, Filter } from "lucide-react"
import { ITaskTable } from "@/types";

const TaskTables = ({ taskDetails }: ITaskTable) => {

    console.log(taskDetails)

    const [filter, setFilter] = useState<string>('')
    const [statusFilter, setStatusFilter] = useState<string | null>(null)
    const [priorityFilter, setPriorityFilter] = useState<string | null>(null)

/*    // 2 usages here
    const filteredTasks = taskDetails?.filter(task => {
        const matchesTitle = task.taskTitle?.toLowerCase().includes(filter.toLowerCase()); // Add title filter
        const matchesStatus = !statusFilter || task.taskStatus === statusFilter;
        const matchesPriority = !priorityFilter || task.taskPriority === priorityFilter;

        return matchesTitle && matchesStatus && matchesPriority;
    });

    console.log(`Filtered: ${{ filteredTasks }}`)

    // 2 usages here
    const uniqueStatuses = Array.from(new Set(taskDetails!.map(task => task.taskStatus)))
    const uniquePriorities = Array.from(new Set(taskDetails!.map(task => task.taskPriority)))

    // debugging
    console.log(taskDetails!.map(task => task.taskStatus))
    //console.log( projectDetails?.projectName)*/

    return (
        <div className="p-4 bg-background text-foreground">
            <h1 className="text-3xl font-bold mb-2">Task list</h1>
            <p className="text-muted-foreground mb-4">Here's a list of your tasks so far</p>

            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <Input placeholder="Filter tasks..." value={filter}
                        onChange={(e) => setFilter(e.target.value)} className="w-[250px]" />

                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>

                    {/* Filter dropdown menus */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Status <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem onSelect={() => setStatusFilter(null)}>
                                All
                            </DropdownMenuItem>
                            {/*{uniqueStatuses.map((status) => (
                                <DropdownMenuItem key={status} onSelect={() => setStatusFilter(status!)}>
                                    {status}
                                </DropdownMenuItem>
                            ))}*/}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Filter dropdown menus */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Priority <ChevronDown className="ml-2 h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem onSelect={() => setPriorityFilter(null)}>All</DropdownMenuItem>
                            {/*{uniquePriorities.map((priority) => (
                                <DropdownMenuItem key={priority} onSelect={() => setPriorityFilter(priority!)}>
                                    {priority}
                                </DropdownMenuItem>
                            ))}*/}
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <Button variant="outline" size="sm">
                    View <ChevronDown className="ml-2 h-4 w-4"/>
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40px]">
                            <Checkbox/>
                        </TableHead>
                        <TableHead>Task</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead className="w-[60px]"></TableHead>
                    </TableRow>
                </TableHeader>

                {/* 1 usage in this code block */}
                <TableBody>
                    {taskDetails && taskDetails.map((task, id) => (
                        <TableRow key={id}>
                            <TableCell>
                                <Checkbox/>
                            </TableCell>

                            <TableCell>
                                <div>
                                    <div className="font-medium">{task.taskTitle}</div>
                                    <div className="text-sm text-muted-foreground">{task.taskDescription}</div>
                                </div>
                            </TableCell>

                            <TableCell>
                                <Badge variant={task.taskPriority === 'LOW' ? 'default' : 'secondary'}>
                                    {task.taskStatus}
                                </Badge>
                            </TableCell>

                            <TableCell>{task.taskPriority}</TableCell>

                            <TableCell>
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TaskTables;