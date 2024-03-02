package org.example.webserver.components.dependency;

import jakarta.persistence.*;
import org.example.webserver.components.task.TaskModel;

@Entity(name = "dependency")
public class DependencyModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dependency_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "task_id")
    private TaskModel task;

    // TODO: Implement relationship field for dependent_task_id

    @Column(name = "dependency_type")
    private String dependencyType;

}
