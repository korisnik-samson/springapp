package org.example.webserver.components.task;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import org.example.webserver.components.project.ProjectModel;
import org.example.webserver.components.subtask.SubtaskModel;
import org.example.webserver.components.user.UserModel;
import org.example.webserver.lib.types.TaskPriority;
import org.example.webserver.lib.types.TaskStatus;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "task")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class TaskModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private int id;

    @Column(name = "task_title")
    private String title;

    @Column(name = "task_description")
    private String description;

    @Column(name = "task_status")
    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Column(name = "task_start_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date startDate;

    @Column(name = "task_due_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dueDate;

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

    public TaskStatus getStatus() { return status; }
    public void setStatus(TaskStatus status) { this.status = TaskStatus.valueOf(String.valueOf(status)); }

    public String getStartDate() { return startDate.toString(); }
    public void setStartDate(String startDate) { this.startDate = Date.valueOf(startDate); }

    public String getDueDate() { return dueDate.toString(); }
    public void setDueDate(String dueDate) { this.dueDate = Date.valueOf(dueDate); }

    public int getEstimatedHours() { return estimatedHours; }
    public void setEstimatedHours(int estimatedHours) { this.estimatedHours = estimatedHours; }

    public int getActualHours() { return actualHours; }
    public void setActualHours(int actualHours) { this.actualHours = actualHours; }

    public TaskPriority getPriority() { return priority; }
    public void setPriority(TaskPriority priority) { this.priority = TaskPriority.valueOf(String.valueOf(priority)); }

    public Set<SubtaskModel> getSubtasks() { return Set.copyOf(subtasks); }
    public void setSubtasks(Set<SubtaskModel> subtasks) { this.subtasks = subtasks; }

    @Override
    public String toString() {
        return "TaskModel{" + "id=" + id + ", title='" + title + '\'' + ", description='" + description + '\'' +
                ", status=" + status + ", startDate=" + startDate + ", dueDate=" + dueDate + ", estimatedHours=" +
                estimatedHours + ", actualHours=" + actualHours + ", priority=" + priority + '}';
    }

    public Set<UserModel> getUsers() { return Set.copyOf(users); }
    public void setUsers(Set<UserModel> users) { this.users = users; }

    public ProjectModel getProject() { return project; }
    public void setProject(ProjectModel project) { this.project = project; }
}
