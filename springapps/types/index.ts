import React, { Dispatch, SetStateAction } from "react";

export interface IWorkspaceListProps {
    userId?: IUser | string;
    projects?: IProject[];
}

interface IUser {
    id: number | { [key: string]: string };
    name: string;
    email: string;
    password: string;
}

interface IProject {
    id: string;
    projectName: string;
    projectDescription: string;
    projectStartDate: string | Date;
    projectEndDate: string | Date;
    projectStatus: string | Date;
}

export type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    role: string,
    tasks: Task[],
    subtasks: Subtask[],
    createdProjects: Project[],
    password: string,
    avatar: string,
}

export type Project = {
    projectName: string;
    projectDesc: string;
    projectStatus: string;
    projectStartDate: Date | string;
    projectEndDate: Date | string;
    projectMilestones: string[];
    projectTasks: Task[];
    members: User[];
}

export type Task = {
    taskId: string | number;
    taskTitle: string;
    taskDescription: string;
    taskStatus: Status;
    taskStartDate: React.ReactNode;
    taskDueDate: React.ReactNode;
    subTasks: Subtask[];
    assignee: User[];
    parentProject: Project[];
    taskPriority: Priority;
}

export type Status = 'Not Started' | 'In Progress' | 'Completed' | 'Blocked'

export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent'

export type Subtask = {
    subtask: any,
}

export interface IProjectCard {
    projectName: string;
    projectDesc: string;
    projectStatus: string;
    projectStartDate: Date | string;
    projectEndDate: Date | string;
    projectMilestones: string[];
    members: User[];
    user_id?: string | IUser | undefined;
}

export interface ProjectFormProps {
    renderText: string,
    isDialogOpen: boolean,
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface TaskFormProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (isOpen: boolean) => void;
}