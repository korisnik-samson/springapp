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
    createdProjects: Project[]
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
    taskTitle?: string;
    taskDescription?: string;
    taskStatus?: string;
    taskStartDate?: string | Date;
    taskDueDate?: string | Date;
    subTasks?: Subtask[];
    users?: User[];
    parentProject?: Project[];
    taskPriority?: string;
}

export type ITaskTable = {
    taskDetails?: Task[];
    projectName?: string;
}

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