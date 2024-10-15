package com.samson.intelliserver.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.samson.intelliserver.types.TaskPriority;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Entity(name = "_task")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "_task", uniqueConstraints = { @UniqueConstraint(columnNames = {"task_id"}) })
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Integer task_id;

    @Column(name = "task_name")
    private String task_name;

    @Column(name = "task_description")
    private String task_description;

    @Column(name = "task_start_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date task_start_date;

    @Column(name = "task_end_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date task_end_date;

    @Column(name = "task_status")
    private String task_status;

    @Column(name = "task_priority")
    @Enumerated(EnumType.STRING)
    private TaskPriority task_priority;

    @ManyToOne
    @JoinColumn(name = "parent_project_id")
    private Project project;

}
