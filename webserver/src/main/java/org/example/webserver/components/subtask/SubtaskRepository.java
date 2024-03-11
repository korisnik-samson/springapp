package org.example.webserver.components.subtask;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SubtaskRepository extends JpaRepository<SubtaskModel, Integer> {
}
