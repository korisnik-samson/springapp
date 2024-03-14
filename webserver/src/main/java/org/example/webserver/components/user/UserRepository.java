package org.example.webserver.components.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Integer> {
    @Query(value = "SELECT * FROM user WHERE user_name = :userName", nativeQuery = true)
    Optional<UserModel> findByUserName(@Param("userName") String userName);

    @Query(value = "SELECT * FROM user WHERE user_role = :role", nativeQuery = true)
    List<UserModel> findByRole(@Param("role") String role);

    @Modifying
    @Query(value = "UPDATE user SET first_name = :firstName, last_name = :lastName, user_name = :userName, " +
            "user_email = :email, user_password = :password, user_role = :role WHERE user_id = :id", nativeQuery = true)
    int updateUser(@Param("id")int id, @Param("firstName")String firstName, @Param("lastName")String lastName, @Param("userName")String userName,
                    @Param("email")String email, @Param("password")String password, @Param("role")String role);

    // Verify this shit works bro
    @Query(value = "SELECT * FROM user WHERE user_id IN (SELECT user_id FROM user_task WHERE task_id = :id)", nativeQuery = true)
    Optional<List<UserModel>> findUsersByTask(@Param("id") int taskId);
    
    @Query(value = "SELECT * FROM user WHERE user_role = 'MEMBER'", nativeQuery = true)
    List<UserModel> findMembers();

    @Query(value = "SELECT * FROM user WHERE user_role = 'MANAGER'", nativeQuery = true)
    List<UserModel> findManagers();

    @Modifying
    @Query(value = "UPDATE user SET user.is_deleted = :isObjectDeleted WHERE user.user_id = :id", nativeQuery = true)
    int softDelete(@Param("id") Integer id, @Param("isObjectDeleted") String isObjectDeleted);

    @Modifying
    @Query(value = "INSERT INTO user_task (user_id, task_id) VALUES (:userId, :taskId)", nativeQuery = true)
    void assignTask(@Param("userId") int userId, @Param("taskId") int taskId);
}
