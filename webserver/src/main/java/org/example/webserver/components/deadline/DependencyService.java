package org.example.webserver.components.deadline;

import org.springframework.stereotype.Service;

@Service
public class DependencyService {

    private final DependencyRepository dependencyRepository;

    public DependencyService(DependencyRepository dependencyRepository) {
        this.dependencyRepository = dependencyRepository;
    }

}
