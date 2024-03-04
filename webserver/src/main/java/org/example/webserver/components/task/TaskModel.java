package org.example.webserver.components.task;

import jakarta.persistence.*;
import org.example.webserver.components.project.ProjectModel;
import org.example.webserver.components.subtask.SubtaskModel;
import org.example.webserver.components.user.UserModel;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "task")
public class TaskModel {
    private enum TaskStatus {
        NOT_STARTED,
        IN_PROGRESS,
        COMPLETED,
        URGENT
    }

    private enum TaskPriority {
        LOW,
        MEDIUM,
        HIGH,
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private int id;

    @Column(name = "task_title")
    private String title;

    @Column(name = "task_description")
    private String description;

    @Column(name = "assignee_id")
    private int assigneeId;

    @Column(name = "task_status")
    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Column(name = "task_due_date")
    private String dueDate;

    @Column(name = "task_estimated_hours")
    private int estimatedHours;

    @Column(name = "task_actual_hours")
    private int actualHours;

    @OneToMany(mappedBy = "task")
    private Set<SubtaskModel> subtasks = new HashSet<>();

    @ManyToMany(mappedBy = "tasks")
    private Set<UserModel> users = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectModel project;

    @Column(name = "task_priority")
    @Enumerated(EnumType.STRING)
    private TaskPriority priority;


    // TODO: Create fields for all existing Relationships

    public TaskModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getAssigneeId() { return assigneeId; }
    public void setAssigneeId(int assigneeId) { this.assigneeId = assigneeId; }

    public TaskStatus getStatus() { return status; }
    public void setStatus(String status) { this.status = TaskStatus.valueOf(status); }

    public String getDueDate() { return dueDate; }
    public void setDueDate(String dueDate) { this.dueDate = dueDate; }

    public int getEstimatedHours() { return estimatedHours; }
    public void setEstimatedHours(int estimatedHours) { this.estimatedHours = estimatedHours; }

    public int getActualHours() { return actualHours; }
    public void setActualHours(int actualHours) { this.actualHours = actualHours; }

    public TaskPriority getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = TaskPriority.valueOf(priority); }

    public Set<SubtaskModel> getSubtasks() { return Set.copyOf(subtasks); }

    @Override
    public String toString() {
        return "TaskModel{" + "title='" + title + '\'' + ", id=" + id +
                ", description='" + description + '\'' + ", assigneeId=" + assigneeId +
                ", status='" + status + '\'' + ", dueDate='" + dueDate + '\'' +
                ", estimatedHours=" + estimatedHours + ", actualHours=" + actualHours + '}';
    }

    // determine if two tasks are equal
    public boolean equals(TaskModel task) {
        return this.id == task.id && this.title.equals(task.title) && this.description.equals(task.description) &&
                this.assigneeId == task.assigneeId && this.status.equals(task.status) && this.dueDate.equals(task.dueDate) &&
                this.estimatedHours == task.estimatedHours && this.actualHours == task.actualHours;
    }
}
