package org.example.webserver.components.subtask;

import jakarta.persistence.*;
import org.example.webserver.components.task.TaskModel;

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

    // TODO: Resolve operation for creating assignee_id field

    @Column(name = "status")
    private String status;

    public SubtaskModel() {}
}
