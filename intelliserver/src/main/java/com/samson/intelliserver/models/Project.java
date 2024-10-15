package com.samson.intelliserver.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Entity
@Table(name = "_project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Integer project_id;

    @Column(name = "project_name")
    private String project_name;

    @Column(name = "project_description")
    private String project_description;

    @Column(name = "project_start_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date project_start_date;

    @Column(name = "project_end_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date project_end_date;

    @Column(name = "project_status")
    private String project_status;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private Set<Task> projectTasks = new HashSet<>();

    // TODO: Add project milestones
}
