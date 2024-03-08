package org.example.webserver.components.user;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserModel> getUsers() {
        return this.userRepository.findAll();
    }

    public Optional<UserModel> getUserById(int id) {
        return this.userRepository.findById(id);
    }

    public Optional<UserModel> getUserByUserName(String userName) {
        return this.userRepository.findByUserName(userName);
    }

    public List<UserModel> getUsersByRole(String role) {
        return this.userRepository.findByRole(role);
    }

    public UserModel addUser(UserModel user) {
        return this.userRepository.save(user);
    }

    public List<UserModel> getMembers() {
        return this.userRepository.findMembers();
    }

    public List<UserModel> getManagers() {
        return this.userRepository.findManagers();
    }

    @Transactional
    public void updateUser(int id, UserModel updatedUser) {
        Optional<UserModel> currentUser = this.userRepository.findById(id);
        UserModel finalUser = new UserModel();

        finalUser.setId(id);

        if (updatedUser.getFirstName() != null)
            finalUser.setFirstName(updatedUser.getFirstName());
        else finalUser.setFirstName(currentUser.get().getFirstName());

        if (updatedUser.getLastName() != null)
            finalUser.setLastName(updatedUser.getLastName());
        else finalUser.setLastName(currentUser.get().getLastName());

        if (updatedUser.getUserName() != null)
            finalUser.setUserName(updatedUser.getUserName());
        else finalUser.setUserName(currentUser.get().getUserName());

        if (updatedUser.getEmail() != null)
            finalUser.setEmail(updatedUser.getEmail());
        else finalUser.setEmail(currentUser.get().getEmail());

        if (updatedUser.getPassword() != null)
            finalUser.setPassword(updatedUser.getPassword());
        else finalUser.setPassword(currentUser.get().getPassword());

        if (updatedUser.getRole() != null)
            finalUser.setRole(updatedUser.getRole());
        else finalUser.setRole(currentUser.get().getRole());

        this.userRepository.updateUser(finalUser.getId(), finalUser.getFirstName(), finalUser.getLastName(),
                finalUser.getEmail(), finalUser.getUserName(), finalUser.getPassword(), finalUser.getRole(true));
    }

    // TODO: soft delete method
    public void invalidateUser(int id) {
        this.userRepository.invalidateUser(id);
    }

    public Optional<List<UserModel>> findUsersByTask(int taskId) {
        return this.userRepository.findUsersByTask(taskId);
    }
}
