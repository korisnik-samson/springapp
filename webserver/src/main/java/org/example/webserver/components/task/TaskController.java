package org.example.webserver.components.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TaskController {
    public final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("api/task")
    public List<TaskModel> getTasks() {
        return this.taskService.getTasks();
    }

    @GetMapping("api/task/{id}")
    public Optional<TaskModel> getTaskById(@PathVariable("id") int id) {
        return this.taskService.getTaskById(id);
    }

}
