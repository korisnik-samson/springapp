package org.example.webserver.components.task;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    public final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<TaskModel> getTasks() {
        return this.taskRepository.findAll();
    }

    public Optional<TaskModel> getTaskById(int id) {
        return this.taskRepository.findById(id);
    }
}
