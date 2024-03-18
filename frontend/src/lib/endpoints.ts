import { Project } from "@/types";

export const getUsers = async () => {
    const response: Response = await fetch('http://localhost:8080/api/user', { cache: 'force-cache' })
    if (!response.ok) throw new Error('Error fetching users');

    return response.json();
}

// This is for the purpose of eliminating redundant code
export const getUserByQuery = async (query: string | number) => {
    if (typeof query === 'number') {
        const response: Response = await fetch(
            `http://localhost:8080/api/user?id=${query.toString()}`,
            { cache: 'force-cache' }
        )

        if (!response.ok) throw new Error('Error fetching user');
        return response.json();

    } else {
        const response = await fetch(`http://localhost:8080/api/user/${query}`, {cache: 'force-cache'})
        if (!response.ok) throw new Error('Error fetching user');

        return response.json();
    }
}

export const getTasks = async () => {
    const response: Response = await fetch('http://localhost:8080/api/task', { cache: 'force-cache' })
    if (!response.ok) throw new Error('Error fetching tasks');

    return response.json();
}

export const getTaskByQuery = async (query: string | number) => {
    if (typeof query === 'number') {
        const response: Response = await fetch(
            `http://localhost:8080/api/task?id=${query.toString()}`,
            { cache: 'force-cache' }
        )

        if (!response.ok) throw new Error('Error fetching task');
        return response.json();

    } else {
        const response = await fetch(`http://localhost:8080/api/task/${query}`, {cache: 'force-cache'})
        if (!response.ok) throw new Error('Error fetching task');

        return response.json();
    }
}

export const getProjects = async () => {
    const response: Response = await fetch('http://localhost:8080/api/project', { cache: 'force-cache' })
    if (!response.ok) throw new Error('Error fetching projects');

    const data: Promise<Project> = response.json();

    return { props: { data } };
}
