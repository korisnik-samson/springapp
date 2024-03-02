package org.example.webserver.components.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Optional<ProjectModel> getProjectById(int id) {
        return this.projectRepository.findById(id);
    }
}
