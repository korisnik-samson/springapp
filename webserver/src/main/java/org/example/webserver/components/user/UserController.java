package org.example.webserver.components.user;

import org.example.webserver.lib.types.IsObjectDeleted;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    @ResponseBody
    public ResponseEntity<?> getUsers(@RequestParam(value = "id", required = false) Integer id) {
        if (id != null) {
            Optional<UserModel> user = userService.getUserById(id);
            return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

        } else {
            List<UserModel> allUsers = userService.getUsers();
            return ResponseEntity.ok(allUsers);
        }
    }

    @GetMapping(path = "api/user/{userName}")
    public Optional<UserModel> getUserByUserName(@PathVariable("userName") String userName) {
        return this.userService.getUserByUserName(userName);
    }

    @GetMapping(path = "api/user/roles")
    @ResponseBody
    public ResponseEntity<?> getUsersByRole(@RequestParam(value = "role", required = false) String role) {
        if (role != null) {
            List<UserModel> users = userService.getUsersByRole(role);
            return users.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(users);

        } else {
            List<UserModel> allUsers = userService.getUsers();
            return ResponseEntity.ok(allUsers);
        }
    }

    @PostMapping (path = "api/user")
    public UserModel addUser(@RequestBody UserModel user) {
        return this.userService.addUser(user);
    }

    @PutMapping(path = "api/user/{id}")
    public ResponseEntity<String> updateUser(@PathVariable("id") int id, @RequestBody UserModel user) {
        return ResponseEntity.ok(this.userService.updateUser(id, user));
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

    // TODO: Verify this
    @PutMapping(path = "api/user/{id}/is_deleted={is_deleted}")
    public ResponseEntity<String> softDelete(@PathVariable("id") Integer id, @PathVariable("is_deleted") IsObjectDeleted isDeleted) {
        return ResponseEntity.ok(this.userService.softDelete(id, isDeleted));
    }
}
