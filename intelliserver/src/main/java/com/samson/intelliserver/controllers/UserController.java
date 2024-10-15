package com.samson.intelliserver.controllers;

import com.samson.intelliserver.models.User;
import com.samson.intelliserver.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    private final UserService userService;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /* -- ALL GET MAPPINGS -- */
    // note that csrf will only allow GET requests to be made without a csrf token

    @GetMapping(path = "api/user")
    @ResponseBody
    public ResponseEntity<?> getUsers(@RequestParam(value = "id", required = false) Integer id) {
        if (id != null) {
            Optional<User> user = userService.getUserById(id);
            return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

        } else {
            List<User> allUsers = userService.getUsers();
            return ResponseEntity.ok(allUsers);
        }
    }

    @GetMapping(path = "api/user/name={userName}")
    public Optional<User> getUserByUserName(@PathVariable("userName") String userName) {
        return this.userService.getUserByUserName(userName);
    }

    @GetMapping(path = "api/user/email={userEmail}")
    public Optional<User> getUserByEmail(@PathVariable("userEmail") String userEmail) {
        return this.userService.getUserByEmail(userEmail);
    }

    /* -- CSRF Token -- */

    @GetMapping(path = "/csrf-token")
    public CsrfToken getCsrfToken(HttpServletRequest request) {
        // return csrf token if it exists
        return request.getAttribute("_csrf") != null ? (CsrfToken) request.getAttribute("_csrf") : null;
    }

    /* -- ALL POST MAPPINGS -- */

    @PostMapping (path = "/register")
    public User addUser(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));

        return this.userService.addUser(user);
    }

    @PostMapping(path = "/login")
    public String login(@RequestBody User user) {
        return userService.verifyUser(user);
    }


}
