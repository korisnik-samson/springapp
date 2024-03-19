import React, { ReactNode } from "react";
import { TEnumType } from "ts-interface-checker";
import { Card } from "@/components/ui/card";

export type MaxWidthWrapperProps = {
    className?: string;
    children: ReactNode;
}

export enum UserRole {
    Manager = 'MANAGER',
    Member = 'MEMBER',
}

export enum TaskStatus {
    NotStarted = 'NOT_STARTED',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED',
    Blocked = 'BLOCKED',
}

export enum TaskPriority {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH',
    Urgent = 'URGENT',
}

export enum SubTaskStatus {
    NotStarted = 'NOT_STARTED',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED',
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    assignee: User;
    subtasks?: Subtask[];
    project: Project;
    taskPriority: TaskPriority.Low | TaskPriority.Medium | TaskPriority.High | TaskPriority.Urgent;
    taskStartDate: Date;
    taskEndDate: Date;
    taskEstimatedTime: number;
    taskLoggedTime: number;
}

export interface Subtask {
    id: number;
    task: Task;
    title: string;
    description: string;
    status: SubTaskStatus.NotStarted | SubTaskStatus.InProgress | SubTaskStatus.Completed;
    assignee: User;
}

export interface Project {
    id: number;
    projectName: string;
    projectDescription: string;
    projectManager: User;
    projectMembers: User[];
    projectTasks: Task[];
    projectStartDate: Date;
    projectEndDate: Date;
    projectStatus: TaskStatus.Blocked | TaskStatus.Completed | TaskStatus.InProgress | TaskStatus.NotStarted;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole.Manager | UserRole.Member;
    tasks?: Task[];
    subtasks?: Subtask[];
    createdProjects?: Project[];
}

export type ProjectCardProps = {
    projectName: string;
    projectTasks: Array<Task> | Task[];
    className?: React.ComponentProps<typeof Card>;
}

export type ProjectPageProps = {
    params: { projectId: string | number; };
}

export type ProjectProps = {
    params: { projects: string | number; };
}
