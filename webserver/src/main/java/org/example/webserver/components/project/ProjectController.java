package org.example.webserver.components.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ProjectController {
    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping(path = "api/project")
    public List<ProjectModel> getProjects() {
        return this.projectService.getProjects();
    }

    @GetMapping(path = "api/project/{id}")
    public Optional<ProjectModel> getProjectById(@PathVariable("id") Integer id) {
        return this.projectService.getProjectById(id);
    }

    @GetMapping(path = "api/project/{projectName}")
    public Optional<ProjectModel> getProjectByName(@PathVariable("projectName") String projectName) {
        return this.projectService.getProjectByName(projectName);
    }

    @PostMapping(path = "api/project")
    public ProjectModel createProject(ProjectModel projectModel) {
        return this.projectService.createProject(projectModel);
    }
}
