package org.example.webserver.components.user;

import jakarta.persistence.*;
import org.apache.catalina.User;
import org.example.webserver.components.project.ProjectModel;
import org.example.webserver.components.subtask.SubtaskModel;
import org.example.webserver.components.task.TaskModel;
import org.example.webserver.lib.Encoder;
import org.example.webserver.lib.types.IsUserDeleted;
import org.example.webserver.lib.types.UserRole;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "user")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_password")
    private String password;

    @Column(name = "user_role")
    @Enumerated(EnumType.STRING)
    private UserRole role;

    // TODO: Use this field to soft delete a user
    @Column(name = "is_deleted")
    @Enumerated(EnumType.STRING)
    private IsUserDeleted isDeleted;

    @ManyToMany
    @JoinTable(
        name = "user_task",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "task_id")
    )
    private Set<TaskModel> tasks = new HashSet<>();

    @ManyToMany
    @JoinTable(
        name = "user_subtask",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "subtask_id")
    )
    private Set<SubtaskModel> subtasks = new HashSet<>();

    @OneToMany(mappedBy = "projectManager")
    private Set<ProjectModel> createdProjects = new HashSet<>();

    public UserModel() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getUserName() { return name; }
    public void setUserName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }

    // NOTE: The password is hashed before being stored in the database
    public void setPassword(String password) { this.password = Encoder.getMd5(password); }

    public UserRole getRole() { return role; }
    public String getRole(boolean isStr) { if (isStr) return role.toString(); return null; }

    public void setRole(String role) { this.role = UserRole.valueOf(role); }
    public void setRole(UserRole role) { this.role = role; }

    public Set<ProjectModel> getCreatedProjects() { return Set.copyOf(createdProjects); }
    public void setCreatedProjects(Set<ProjectModel> createdProjects) { this.createdProjects = createdProjects; }

    public boolean checkPassword(String password) {
        return this.password.equals(Encoder.getMd5(password));
    }

    @Override
    public String toString() {
        return "UserModel{" + "firstName='" + firstName + '\'' + ", id=" + id +
                ", lastName='" + lastName + '\'' + ", name='" + name + '\'' +
                ", email='" + email + '\'' + ", role='" + role + '\'' + '}';
    }
}
