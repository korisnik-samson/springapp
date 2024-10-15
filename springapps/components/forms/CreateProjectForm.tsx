'use client';

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { ProjectFormProps } from "@/types";
import { projectSchema } from "@/schema";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProject } from "@/lib/endpoints";
import { toast } from "@/hooks/use-toast";

const CreateProjectForm = ({ isDialogOpen, setIsDialogOpen, handleSubmit }: ProjectFormProps) => {
    type ProjectFormValues = z.infer<typeof projectSchema>;

    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            projectName: "",
            projectDescription: "",
            projectStartDate: "",
            projectEndDate: "",
            projectStatus: "Not Started",
            projectManagerId: "",
            isDeleted: false,
        },
    });

    const onSubmit = async (values: ProjectFormValues) => {
        console.log('New project data:', values);

        if (await addProject(values.projectName, values.projectDescription, values.projectStartDate,
            values.projectEndDate, values.projectStatus, values.projectManagerId, values.isDeleted)) {

            toast({
                description: `${values.projectName} has been created successfully.`,
                variant: "default",
                className: "bg-green-200 text-green-700",
            });

            setIsDialogOpen(false);

        } else {
            toast({
                description: `Error creating project${values.projectName}`,
                variant: "destructive",
                className: "bg-red-200 text-red-700",
            });
        }
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon className="mr-2 h-4 w-4"/> Add Project
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Project</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="projectName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="projectDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="projectStartDate"
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
                        <FormField
                            control={form.control}
                            name="projectEndDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>End Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="projectStatus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Not Started">Not Started</SelectItem>
                                            <SelectItem value="In Progress">In Progress</SelectItem>
                                            <SelectItem value="Completed">Completed</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="projectManagerId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Manager ID</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Add Project</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default CreateProjectForm;