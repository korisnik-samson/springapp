package org.example.webserver.components.project;

import jakarta.transaction.Transactional;
import org.example.webserver.components.task.TaskModel;
import org.example.webserver.components.task.TaskRepository;
import org.example.webserver.components.user.UserModel;
import org.example.webserver.components.user.UserRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectModel> getProjects() {
        return this.projectRepository.findAll();
    }

    public Optional<ProjectModel> getProjectById(Integer id) {
        return this.projectRepository.findById(id);
    }

    public Optional<ProjectModel> getProjectByName(String project_name) {
        return this.projectRepository.findProjectByName(project_name);
    }

    public ProjectModel createProject(ProjectModel projectModel) {
        return this.projectRepository.save(projectModel);
    }

    @Transactional
    public String updateProject(int id, ProjectModel updatedProject) {
        Optional<ProjectModel> currentProject = this.projectRepository.findById(id);
        ProjectModel finalProject = new ProjectModel();

        finalProject.setId(id);

        if (updatedProject.getProjectName() != null)
            finalProject.setProjectName(updatedProject.getProjectName());
        else finalProject.setProjectName(currentProject.get().getProjectName());

        if (updatedProject.getProjectDescription() != null)
            finalProject.setProjectDescription(updatedProject.getProjectDescription());
        else finalProject.setProjectDescription(currentProject.get().getProjectDescription());

        if (updatedProject.getProjectStartDate() != null)
            finalProject.setProjectStartDate(updatedProject.getProjectStartDate());
        else finalProject.setProjectStartDate(currentProject.get().getProjectStartDate());

        if (updatedProject.getProjectEndDate() != null)
            finalProject.setProjectEndDate(updatedProject.getProjectEndDate());
        else finalProject.setProjectEndDate(currentProject.get().getProjectEndDate());

        if (updatedProject.getProjectStatus() != null)
            finalProject.setProjectStatus(String.valueOf(updatedProject.getProjectStatus()));
        else finalProject.setProjectStatus(String.valueOf(currentProject.get().getProjectStatus()));

        int updatedProjectRow = this.projectRepository.updateProject(finalProject.getId(), finalProject.getProjectName(),
                finalProject.getProjectDescription(), finalProject.getProjectStartDate(), finalProject.getProjectEndDate(),
                String.valueOf(finalProject.getProjectStatus()));

        return updatedProjectRow > 0 ? "PROJECT UPDATED SUCCESSFULLY" : "PROJECT UPDATE FAILED";
    }
}
