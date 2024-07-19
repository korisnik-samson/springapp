export const getUsers = async (): Promise<[]> => {
    try {
        const response = await fetch('https://localhost:8080/api/user', {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        })

        return await response.json();

    } catch (error: any) {
        throw new Error ('Error fetching users', error);
    }
}

export const getUser = async (id: string): Promise<[]> => {
    try {
        const response = await fetch(`https://localhost:8080/api/user/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        })

        return await response.json();

    } catch (error: any) {
        throw new Error ('Error fetching user', error);
    }

}

export const getProjects = async (): Promise<[]> => {
    try {
        const response =  await fetch('https://localhost:8080/api/project', {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        })

        return await response.json();

    } catch (error: any) {
        throw new Error ('Error fetching projects', error);
    }
}

export const getProject = async (id: string): Promise<[]> => {
    try {
        const response = await fetch(`https://localhost:8080/api/project/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        })

        return await response.json();

    } catch (error: any) {
        throw new Error ('Error fetching project', error);
    }
}