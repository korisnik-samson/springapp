package org.example.webserver.components.milestone;

import jakarta.persistence.*;

@Entity(name = "milestone")
public class MilestoneModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "milestone_id")
    private int id;

    // TODO: implement relationship for project_id

    @Column(name = "milestone_name")
    private String milestoneName;

    @Column(name = "due_date")
    private String milestoneDueDate;

    @Column(name = "milestone_status")
    private String milestoneStatus;

    public MilestoneModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getMilestoneName() { return milestoneName; }
    public void setMilestoneName(String milestoneName) { this.milestoneName = milestoneName; }

    public String getMilestoneDueDate() { return milestoneDueDate; }
    public void setMilestoneDueDate(String milestoneDueDate) { this.milestoneDueDate = milestoneDueDate; }

    public String getMilestoneStatus() { return milestoneStatus; }
    public void setMilestoneStatus(String milestoneStatus) { this.milestoneStatus = milestoneStatus; }

    @Override
    public String toString() {
        return "MilestoneModel{" + "id=" + id + ", milestoneName='" + milestoneName + '\'' +
                ", milestoneDueDate='" + milestoneDueDate + '\'' + ", milestoneStatus='" + milestoneStatus + '\'' + '}';
    }


}
