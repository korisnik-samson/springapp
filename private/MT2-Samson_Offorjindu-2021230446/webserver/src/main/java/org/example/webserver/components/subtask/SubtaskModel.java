package org.example.webserver.components.subtask;

import jakarta.persistence.*;
import org.example.webserver.components.task.TaskModel;
import org.example.webserver.components.user.UserModel;
import org.example.webserver.lib.types.SubtaskStatus;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "subtask")
public class SubtaskModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subtask_id")
    private int id;

    // represents the parent task
    @ManyToOne
    @JoinColumn(name = "task_id")
    private TaskModel task;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "subtasks")
    private Set<UserModel> users = new HashSet<>();

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private SubtaskStatus status;

    public SubtaskModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public TaskModel getTask() { return task; }
    public void setTask(TaskModel task) { this.task = task; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Set<UserModel> getUsers() { return Set.copyOf(users); }
    public void setUsers(Set<UserModel> users) { this.users = users; }

    public SubtaskStatus getStatus() { return status; }
    public void setStatus(String status) { this.status = SubtaskStatus.valueOf(status); }

    @Override
    public String toString() {
        return "SubtaskModel{" + "id=" + id + ", task=" + task + ", title='" + title + '\'' +
                ", description='" + description + '\'' + ", users=" + users + ", status='" + status + '\'' + '}';
    }
}
