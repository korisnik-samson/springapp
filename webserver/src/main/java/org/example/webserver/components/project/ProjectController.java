package org.example.webserver.components.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public Optional<ProjectModel> getProjectById(@PathVariable("id") int id) {
        return this.projectService.getProjectById(id);
    }
}
