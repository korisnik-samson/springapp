package org.example.webserver.components.project;

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

    public Optional<ProjectModel> getProjectByName(@PathVariable String project_name) {
        return this.projectRepository.findProjectByName(project_name);
    }

    public ProjectModel createProject(ProjectModel projectModel) {
        return this.projectRepository.save(projectModel);
    }
}
