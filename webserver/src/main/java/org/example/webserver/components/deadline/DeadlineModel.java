package org.example.webserver.components.deadline;

import jakarta.persistence.*;

@Entity(name = "deadline")
public class DeadlineModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "deadline_id")
    private int id;

    /*@ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectModel project;*/

    @Column(name = "deadline_type")
    private String deadlineType;

    @Column(name = "deadline_date")
    private String deadlineDate;
}
