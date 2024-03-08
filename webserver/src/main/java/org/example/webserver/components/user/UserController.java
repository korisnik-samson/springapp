package org.example.webserver.components.user;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    private final UserService userService;

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

    @GetMapping(path = "api/user/username/{userName}")
    public Optional<UserModel> getUserByUserName(@PathVariable("userName") String userName) {
        return this.userService.getUserByUserName(userName);
    }

    @GetMapping(path = "api/user/role/{role}")
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
}
