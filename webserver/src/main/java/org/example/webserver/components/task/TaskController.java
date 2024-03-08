package org.example.webserver.components.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("api/task/user/{id}")
    public List<TaskModel> getTasksByUser(@PathVariable("id") int userId) {
        return this.taskService.getTasksByUser(userId);
    }

    @PostMapping("api/task")
    public TaskModel addTask(@RequestBody TaskModel task) {
        return this.taskService.addTask(task);
    }

    @PutMapping("api/task/{id}")
    public ResponseEntity<String> updateTask(@PathVariable("id") int id, @RequestBody TaskModel task) {
        String message = taskService.updateTask(id, task);
        return ResponseEntity.ok(message);
    }
}
