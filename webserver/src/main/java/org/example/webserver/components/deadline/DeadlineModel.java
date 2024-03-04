package org.example.webserver.components.deadline;

import jakarta.persistence.*;
import org.example.webserver.components.project.ProjectModel;

@Entity(name = "deadline")
public class DeadlineModel {
    private enum DeadlineType {
        PROJECT_START,
        PROJECT_END,
        MAJOR,
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "deadline_id")
    private int id;

    @OneToOne
    @JoinColumn(name = "project_id")
    private ProjectModel project;

    @Column(name = "deadline_type")
    @Enumerated(EnumType.STRING)
    private DeadlineType deadlineType;

    @Column(name = "deadline_date")
    private String deadlineDate;

    public DeadlineModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public DeadlineType getDeadlineType() { return deadlineType; }
    public void setDeadlineType(DeadlineType deadlineType) { this.deadlineType = deadlineType; }

    public String getDeadlineDate() { return deadlineDate; }
    public void setDeadlineDate(String deadlineDate) { this.deadlineDate = deadlineDate; }

    @Override
    public String toString() {
        return "DeadlineModel{" +
                "id=" + id +
                ", deadlineType='" + deadlineType + '\'' +
                ", deadlineDate='" + deadlineDate + '\'' +
                '}';
    }
}

