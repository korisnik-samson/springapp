package org.example.webserver.components.project;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import org.example.webserver.components.deadline.DeadlineModel;
import org.example.webserver.components.milestone.MilestoneModel;
import org.example.webserver.components.task.TaskModel;
import org.example.webserver.components.user.UserModel;
import org.example.webserver.lib.types.ProjectStatus;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "project")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
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
    @Enumerated(EnumType.STRING)
    private ProjectStatus projectStatus;

    @OneToMany(mappedBy = "project")
    private Set<MilestoneModel> projectMilestones = new HashSet<>();

    @OneToMany(mappedBy = "project")
    private Set<TaskModel> projectTasks = new HashSet<>();

    @OneToOne(mappedBy = "project")
    private DeadlineModel projectDeadline;

    @ManyToOne
    @JoinColumn(name = "project_manager_id")
    private UserModel projectManager;

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

    public ProjectStatus getProjectStatus() { return projectStatus; }
    public void setProjectStatus(String projectStatus) { this.projectStatus = ProjectStatus.valueOf(projectStatus); }

    public Set<MilestoneModel> getProjectMilestones() { return Set.copyOf(projectMilestones); }
    public void setProjectMilestones(Set<MilestoneModel> projectMilestones) { this.projectMilestones = projectMilestones; }

    public Set<TaskModel> getProjectTasks() { return Set.copyOf(projectTasks); }
    public void setProjectTasks(Set<TaskModel> projectTasks) { this.projectTasks = projectTasks; }

    public DeadlineModel getProjectDeadline() { return projectDeadline; }
    public void setProjectDeadline(DeadlineModel projectDeadline) { this.projectDeadline = projectDeadline; }

    public UserModel getProjectManager() { return projectManager; }
    public void setProjectManager(UserModel projectManager) { this.projectManager = projectManager; }

    @Override
    public String toString() {
        return "ProjectModel{" + "id=" + id + ", projectName='" + projectName + '\'' +
                ", projectDescription='" + projectDescription + '\'' + ", projectStartDate='" + projectStartDate + '\'' +
                ", projectEndDate='" + projectEndDate + '\'' + ", projectStatus='" + projectStatus + '\'' + '}';
    }
}
