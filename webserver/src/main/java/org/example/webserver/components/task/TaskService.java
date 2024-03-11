package org.example.webserver.components.task;

import jakarta.transaction.Transactional;
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

    public List<TaskModel> getTasksByUser(int userId) {
        return this.taskRepository.findTasksByUser(userId);
    }

    public TaskModel createTask(TaskModel task) {
        return this.taskRepository.save(task);
    }

    @Transactional
    public String updateTask(int id, TaskModel updatedTask) {
        Optional<TaskModel> currentTask = this.taskRepository.findById(id);
        TaskModel finalTask = new TaskModel();

        finalTask.setId(id);

        if (updatedTask.getTitle() != null)
            finalTask.setTitle(updatedTask.getTitle());
        else finalTask.setTitle(currentTask.get().getTitle());

        if (updatedTask.getDescription() != null)
            finalTask.setDescription(updatedTask.getDescription());
        else finalTask.setDescription(currentTask.get().getDescription());

        if (updatedTask.getStatus() != null)
            finalTask.setStatus(updatedTask.getStatus());
        else finalTask.setStatus(currentTask.get().getStatus());

        if (updatedTask.getPriority() != null)
            finalTask.setPriority(updatedTask.getPriority());
        else finalTask.setPriority(currentTask.get().getPriority());

        if (updatedTask.getStartDate() != null)
            finalTask.setStartDate(updatedTask.getStartDate());
        else finalTask.setStartDate(currentTask.get().getStartDate());

        if (updatedTask.getDueDate() != null)
            finalTask.setDueDate(updatedTask.getDueDate());
        else finalTask.setDueDate(currentTask.get().getDueDate());

        if (updatedTask.getEstimatedHours() != 0)
            finalTask.setEstimatedHours(updatedTask.getEstimatedHours());
        else finalTask.setEstimatedHours(currentTask.get().getEstimatedHours());

        if (updatedTask.getActualHours() != 0)
            finalTask.setActualHours(updatedTask.getActualHours());
        else finalTask.setActualHours(currentTask.get().getActualHours());

        int updatedRows = this.taskRepository.updateTask(finalTask.getId(), finalTask.getTitle(), finalTask.getDescription(),
                finalTask.getStatus().toString(), finalTask.getPriority().toString(), finalTask.getStartDate(), finalTask.getDueDate(),
                finalTask.getEstimatedHours(), finalTask.getActualHours());

        return updatedRows > 0 ? "Task updated successfully" : "Error updating task";
    }

    public void deleteTask(int id) {
        this.taskRepository.deleteById(id);
    }


}
