package org.example.webserver.components.dependency;

import jakarta.persistence.*;
import org.example.webserver.components.task.TaskModel;
import org.example.webserver.lib.types.DependencyType;

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
    @Enumerated(EnumType.STRING)
    private DependencyType dependencyType;

    public DependencyModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public TaskModel getTask() { return task; }
    public void setTask(TaskModel task) { this.task = task; }

    public DependencyType getDependencyType() { return dependencyType; }
    public void setDependencyType(DependencyType dependencyType) { this.dependencyType = dependencyType; }

    @Override
    public String toString() {
        return "DependencyModel{" + "id=" + id +
                ", task=" + task + ", dependencyType='" + dependencyType + '\'' + '}';
    }
}
