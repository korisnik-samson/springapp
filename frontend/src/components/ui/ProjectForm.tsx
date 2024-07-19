"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProjectSchema } from "@/lib/schema";

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ProjectForm() {
    const { toast } = useToast();

    // 1. Define form schema and setup form
    const form = useForm<z.infer<typeof ProjectSchema>>({
        resolver: zodResolver(ProjectSchema),
        defaultValues: {
            projectName: '',
            projectDescription: '',
            projectManager: {
                id: 0,
                username: '',
                email: '',
            } || null,
            projectStartDate: new Date(),
            projectEndDate: new Date(),
            projectStatus: 'NOT_STARTED',
            projectMembers: [] || null,
        },
    })

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof ProjectSchema>) => {
        console.log("Hello world")

        toast({
            title: 'Project Created',
            description: `Project ${values.projectName} has been created successfully.`,
            variant: 'default',
        })
    }

    return (
        <Form {...form}>
            <h5 className="mb-3 font-bold text-2xl">New Project</h5>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="projectName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="projectDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} rows={5} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="projectStartDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='mr-5'>Project Start Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal",
                                               !field.value && "text-muted-foreground")}>
                                               {field.value ? (format(field.value, "yyyy-MM-dd")) : (
                                                   <span>Pick a start date</span>
                                               )}
                                               <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar mode="single" selected={field.value} onSelect={field.onChange}
                                             disabled={(date: Date) => date < new Date("1900-01-01")}
                                             initialFocus />
                                    </PopoverContent>
                                </Popover>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="projectEndDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='mr-7'>Project Due Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground")}>
                                            {field.value ? (format(field.value, "yyyy-MM-dd")) : (
                                                <span>Pick a due date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar mode="single" selected={field.value} onSelect={field.onChange}
                                        disabled={(date: Date) => date < new Date() || date < new Date("1900-01-01")}
                                        initialFocus />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="projectStatus"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the Porject Status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value='NOT_STARTED'>Not Started</SelectItem>
                                        <SelectItem value='IN_PROGRESS'>In Progress</SelectItem>
                                        <SelectItem value='COMPLETED'>Completed</SelectItem>
                                        <SelectItem value='BLOCKED'>Blocked</SelectItem>
                                    </SelectContent>
                                </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='w-full' type='submit'>
                    Create Project
                </Button>
            </form>
        </Form>
    );
}