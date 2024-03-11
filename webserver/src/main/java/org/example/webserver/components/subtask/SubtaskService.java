package org.example.webserver.components.subtask;
import org.springframework.stereotype.Service;

@Service
public class SubtaskService {
    private final SubtaskRepository subtaskRepository;

    public SubtaskService(SubtaskRepository subtaskRepository) {
        this.subtaskRepository = subtaskRepository;
    }

    public void createSubtask(Integer taskId, SubtaskModel subtaskModel) {
        subtaskRepository.save(subtaskModel);
    }
}
