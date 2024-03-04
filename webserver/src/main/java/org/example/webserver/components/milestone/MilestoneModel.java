package org.example.webserver.components.milestone;

import jakarta.persistence.*;
import org.example.webserver.components.project.ProjectModel;

import java.util.Set;

@Entity(name = "milestone")
public class MilestoneModel {
    private enum MilestoneStatus { IN_PROGRESS, COMPLETED, AT_RISK, }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "milestone_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectModel project;

    @Column(name = "milestone_name")
    private String milestoneName;

    @Column(name = "due_date")
    private String milestoneDueDate;

    @Column(name = "milestone_status")
    @Enumerated(EnumType.STRING)
    private MilestoneStatus milestoneStatus;

    public MilestoneModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getMilestoneName() { return milestoneName; }
    public void setMilestoneName(String milestoneName) { this.milestoneName = milestoneName; }

    public String getMilestoneDueDate() { return milestoneDueDate; }
    public void setMilestoneDueDate(String milestoneDueDate) { this.milestoneDueDate = milestoneDueDate; }

    public MilestoneStatus getMilestoneStatus() { return milestoneStatus; }
    public void setMilestoneStatus(String milestoneStatus) { this.milestoneStatus = MilestoneStatus.valueOf(milestoneStatus); }

    @Override
    public String toString() {
        return "MilestoneModel{" + "id=" + id + ", milestoneName='" + milestoneName + '\'' +
                ", milestoneDueDate='" + milestoneDueDate + '\'' + ", milestoneStatus='" + milestoneStatus + '\'' + '}';
    }


}
