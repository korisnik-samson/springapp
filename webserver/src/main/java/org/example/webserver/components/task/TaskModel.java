package org.example.webserver.components.task;

import jakarta.persistence.*;
import org.example.webserver.components.subtask.SubtaskModel;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "task")
public class TaskModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private int id;

    // TODO: Create filed for ProjectModel Relationship

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "assignee_id")
    private int assigneeId;

    @Column(name = "status")
    private String status;

    @Column(name = "due_date")
    private String dueDate;

    @Column(name = "estimated_hours")
    private int estimatedHours;

    @Column(name = "actual_hours")
    private int actualHours;

    @OneToMany(mappedBy = "task")
    private Set<SubtaskModel> subtasks = new HashSet<>();

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

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getDueDate() { return dueDate; }
    public void setDueDate(String dueDate) { this.dueDate = dueDate; }

    public int getEstimatedHours() { return estimatedHours; }
    public void setEstimatedHours(int estimatedHours) { this.estimatedHours = estimatedHours; }

    public int getActualHours() { return actualHours; }
    public void setActualHours(int actualHours) { this.actualHours = actualHours; }

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
