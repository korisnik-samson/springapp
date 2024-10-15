package com.samson.intelliserver.services;

import com.samson.intelliserver.models.User;
import com.samson.intelliserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    // use @Autowired to inject the UserRepository into the UserService
    private final UserRepository userRepository;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JWTService jwtService;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    public User addUser(User user) {
        return this.userRepository.save(user);
    }

    public Optional<User> getUserById(Integer id) {
        return this.userRepository.findById(id);
    }

    public Optional<User> getUserByUserName(String userName) {
        return this.userRepository.findByUserName(userName);
    }

    public Optional<User> getUserByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    public String verifyUser(@NonNull User user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword())
        );

        return authentication.isAuthenticated() ?
                jwtService.generateToken(user.getUserName()) : "Invalid username or password";
    }
}
