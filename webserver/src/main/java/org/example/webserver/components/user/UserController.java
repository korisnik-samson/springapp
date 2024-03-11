package org.example.webserver.components.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "api/user")
    public List<UserModel> getUsers() {
        return this.userService.getUsers();
    }

    @GetMapping(path = "api/user/{id}")
    public Optional<UserModel> getUserById(@PathVariable("id") int id) {
        return this.userService.getUserById(id);
    }

    @GetMapping(path = "api/user/{userName}")
    public Optional<UserModel> getUserByUserName(@PathVariable("userName") String userName) {
        return this.userService.getUserByUserName(userName);
    }

    @GetMapping(path = "api/user?user_role={role}")
    public List<UserModel> getUsersByRole(@PathVariable("role") String role) {
        return this.userService.getUsersByRole(role);
    }

    @PostMapping (path = "api/user")
    public UserModel addUser(@RequestBody UserModel user) {
        return this.userService.addUser(user);
    }

    @PutMapping(path = "api/user/{id}")
    public void updateUser(@PathVariable("id") int id, @RequestBody UserModel user) {
        this.userService.updateUser(id, user);
    }

    @GetMapping(path = "api/user/members")
    public List<UserModel> getMembers() {
        return this.userService.getMembers();
    }

    @GetMapping(path = "api/user/managers")
    public List<UserModel> getManagers() {
        return this.userService.getManagers();
    }

    @GetMapping(path = "api/user/task/{id}")
    public Optional<List<UserModel>> getUsersByTask(@PathVariable("id") int taskId) {
        return this.userService.findUsersByTask(taskId);
    }

    @PostMapping(path = "api/user_task/user={userId}/task={taskId}")
    public void assignTask(@PathVariable("userId") int userId, @PathVariable("taskId") int taskId) {
        this.userService.assignTask(userId, taskId);
    }

    @PutMapping(path = "api/user/{id}/action?=enable")
    public void enableUser(@PathVariable("id") int id) {
        this.userService.enableUser(id);
    }

    @PutMapping(path = "api/user/{id}/action?=disable")
    public void disableUser(@PathVariable("id") int id) {
        this.userService.disableUser(id);
    }
}
