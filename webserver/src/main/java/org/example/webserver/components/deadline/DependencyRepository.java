package org.example.webserver.components.deadline;

import org.example.webserver.components.dependency.DependencyModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DependencyRepository extends JpaRepository<DependencyModel, Integer> {
}
