package org.example.webserver.components.task;

import org.example.webserver.lib.types.IsObjectDeleted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRepository extends JpaRepository<TaskModel, Integer> {
    @Query(value = "SELECT * FROM task WHERE task_id IN (SELECT task_id FROM user_task WHERE user_id = :id)", nativeQuery = true)
    List<TaskModel> findTasksByUser(@Param("id") int userId);

    @Modifying
    @Query(value = "UPDATE task SET task_title = :title, task_description = :description, task_status = :status, " +
            "task_priority = :priority, task_start_date = :startDate, task_due_date = :dueDate, task_estimated_hours = :estimatedHours, " +
            "task_actual_hours = :actualHours WHERE task_id = :id", nativeQuery = true)
    int updateTask(@Param("id")int id, @Param("title")String title, @Param("description")String description,
            @Param("status")String status, @Param("priority")String priority, @Param("startDate")String startDate,
            @Param("dueDate")String dueDate, @Param("estimatedHours")int estimatedHours, @Param("actualHours")int actualHours);

    @Modifying
    @Query(value = "UPDATE task SET is_deleted = :isDeleted WHERE task_id = :id", nativeQuery = true)
    int softDeleteTask(@Param("id") int id, @Param("isDeleted") String isDeleted);
}
