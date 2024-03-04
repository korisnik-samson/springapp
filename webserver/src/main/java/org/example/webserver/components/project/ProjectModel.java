package org.example.webserver.components.project;

import jakarta.persistence.*;
import org.example.webserver.components.deadline.DeadlineModel;
import org.example.webserver.components.milestone.MilestoneModel;
import org.example.webserver.components.task.TaskModel;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "project")
public class ProjectModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private int id;

    @Column(name = "project_name")
    private String projectName;

    @Column(name = "project_description")
    private String projectDescription;

    @Column(name = "project_start_date")
    private String projectStartDate;

    @Column(name = "project_end_date")
    private String projectEndDate;

    @Column(name = "project_status")
    private String projectStatus;

    @OneToMany(mappedBy = "project")
    private Set<MilestoneModel> projectMilestones = new HashSet<>();

    @OneToMany(mappedBy = "project")
    private Set<TaskModel> projectTasks = new HashSet<>();

    @OneToOne(mappedBy = "project")
    private DeadlineModel projectDeadline;

    public ProjectModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getProjectName() { return projectName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }

    public String getProjectDescription() { return projectDescription; }
    public void setProjectDescription(String projectDescription) { this.projectDescription = projectDescription; }

    public String getProjectStartDate() { return projectStartDate; }
    public void setProjectStartDate(String projectStartDate) { this.projectStartDate = projectStartDate; }

    public String getProjectEndDate() { return projectEndDate; }
    public void setProjectEndDate(String projectEndDate) { this.projectEndDate = projectEndDate; }

    public String getProjectStatus() { return projectStatus; }
    public void setProjectStatus(String projectStatus) { this.projectStatus = projectStatus; }

    public Set<MilestoneModel> getProjectMilestones() { return Set.copyOf(projectMilestones); }
    public void setProjectMilestones(Set<MilestoneModel> projectMilestones) { this.projectMilestones = projectMilestones; }

    public Set<TaskModel> getProjectTasks() { return Set.copyOf(projectTasks); }
    public void setProjectTasks(Set<TaskModel> projectTasks) { this.projectTasks = projectTasks; }

    public DeadlineModel getProjectDeadline() { return projectDeadline; }
    public void setProjectDeadline(DeadlineModel projectDeadline) { this.projectDeadline = projectDeadline; }

    @Override
    public String toString() {
        return "ProjectModel{" + "id=" + id + ", projectName='" + projectName + '\'' +
                ", projectDescription='" + projectDescription + '\'' + ", projectStartDate='" + projectStartDate + '\'' +
                ", projectEndDate='" + projectEndDate + '\'' + ", projectStatus='" + projectStatus + '\'' + '}';
    }
}
