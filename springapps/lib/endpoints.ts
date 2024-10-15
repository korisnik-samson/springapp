import ApiInstance from "@/lib/api";

export const getUsers = async() => {
    try {
        const response = await ApiInstance.get('/api/user');
        return response.data;

    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

export const getUserById = async(id: string) => {
    try {
        const response = await ApiInstance.get(`/api/user?id=${id}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching user:', error);
        return {};
    }
}

export const getProjects = async() => {
    try {
        const response = await ApiInstance.get('/api/project');
        return response.data;

    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

export const getProjectById = async(id: string) => {
    try {
        const response = await ApiInstance.get(`/api/project?id=${id}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching project:', error);
        return {};
    }
}

export const getUserByEmail = async(email: string) => {
    // bug in spring to be fixed later
    try {
        const response = await ApiInstance.get(`/api/user/email=${email}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching user:', error);
        return {};
    }
}

export const getTasks = async() => {
    try {
        const response = await ApiInstance.get('/api/task');
        return response.data;

    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
}

export const getTaskById = async(id: string) => {
    try {
        const response = await ApiInstance.get(`/api/task?id=${id}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching task:', error);
        return {};
    }
}

export const getSubtasks = async() => {
    try {
        const response = await ApiInstance.get('/api/subtasks');
        return response.data;

    } catch (error) {
        console.error('Error fetching subtasks:', error);
        return [];
    }
}

export const addProject = async(projectName: string, projectDescription: string, projectStartDate: any, projectEndDate: any,
        projectStatus: any, projectManagerId: string, is_deleted: any) => {

    const projectId = Math.floor(Math.random() * 1000);

    const project = {
        projectId,
        projectName,
        projectDescription,
        projectStartDate,
        projectEndDate,
        projectStatus,
        projectManagerId,
        is_deleted
    }

    try {
        const response = await ApiInstance.post('/api/project', project, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 200;

    } catch (error) {
        console.error('Error adding project:', error);
        return {};
    }
}

export const addTask = async(title: string, description: string, status: any, priority: any, startDate: any, dueDate: any,
        estimatedHours: any, actualHours: any, isDeleted: any) => {

    const taskId = Math.floor(Math.random() * 1000);

    const task = {
        taskId,
        title,
        description,
        status,
        priority,
        startDate,
        dueDate,
        estimatedHours,
        actualHours,
        projectId: Math.floor(Math.random() * 1000),
        isDeleted
    }

    try {
        const response = await ApiInstance.post('/api/task', task, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 200;

    } catch (error) {
        console.error('Error adding task:', error);
        return {};
    }
}