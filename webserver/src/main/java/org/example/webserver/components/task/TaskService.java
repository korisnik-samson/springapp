package org.example.webserver.components.task;

import org.springframework.stereotype.Service;

@Service
public class TaskService {
    public final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

}
