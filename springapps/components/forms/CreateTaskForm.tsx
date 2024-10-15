'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import * as z from "zod";
import { taskFormSchema } from "@/schema";
import { addTask } from "@/lib/endpoints";
import { TaskFormProps } from "@/types";


// Define the props for the CreateTaskForm component


const CreateTaskForm = ({ isDialogOpen, setIsDialogOpen }: TaskFormProps) => {
    type TaskFormValues = z.infer<typeof taskFormSchema>;

    const form = useForm<TaskFormValues>({
        resolver: zodResolver(taskFormSchema),
        defaultValues: {
            title: "",
            description: "",
            status: "NOT_STARTED",
            priority: "MEDIUM",
            startDate: new Date(),
            dueDate: new Date(),
            estimatedHours: 0,
            actualHours: 0,
            isDeleted: false,
        },
    });

    const onSubmit = async(values: TaskFormValues) => {
        console.log('New task data:', values);

        try {
            await addTask(values.title, values.description, values.status, values.priority, values.startDate, values.dueDate,
                values.estimatedHours, values.actualHours, values.isDeleted);

            toast({
                description: `${values.title} has been created successfully.`,
                variant: "default",
                className: "bg-green-200 text-green-700",
            });

            setIsDialogOpen(false);

        } catch (error) {
            toast({
                description: `Error creating task ${values.title}`,
                variant: "destructive",
                className: "bg-red-200 text-red-700",
            });
        }
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon className="mr-2 h-4 w-4"/> Add Task
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control} name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status"/>
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="NOT_STARTED">Not Started</SelectItem>
                                            <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                                            <SelectItem value="COMPLETED">Completed</SelectItem>
                                            <SelectItem value="ON_HOLD">On Hold</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Priority</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select priority"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="LOW">Low</SelectItem>
                                            <SelectItem value="MEDIUM">Medium</SelectItem>
                                            <SelectItem value="HIGH">High</SelectItem>
                                            <SelectItem value="URGENT">Urgent</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="startDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="dueDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Due Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="estimatedHours"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Estimated Hours</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field}
                                               onChange={e => field.onChange(parseFloat(e.target.value))}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="actualHours"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Actual Hours</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field}
                                               onChange={e => field.onChange(parseFloat(e.target.value))}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">Add Task</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default CreateTaskForm;