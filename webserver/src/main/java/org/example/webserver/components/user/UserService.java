package org.example.webserver.components.user;

import jakarta.transaction.Transactional;
import org.example.webserver.lib.types.IsObjectDeleted;
import org.hibernate.ObjectNotFoundException;
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
        // Get all users and remove the ones that are disabled
        List<UserModel> userList = this.userRepository.findAll();
        userList.removeIf(user -> user.getIsDeleted() == IsObjectDeleted.TRUE);

        return userList;
    }

    public Optional<UserModel> getUserById(int id) {
        Optional<UserModel> foundUser = this.userRepository.findById(id);

        if (foundUser.isPresent() && foundUser.get().getIsDeleted() == IsObjectDeleted.TRUE)
            return Optional.empty();

        return foundUser;
    }

    public Optional<UserModel> getUserByUserName(String userName) {
        Optional<UserModel> foundUser = this.userRepository.findByUserName(userName);

        if (foundUser.isPresent() && foundUser.get().getIsDeleted() == IsObjectDeleted.TRUE)
            return Optional.empty();

        return foundUser;
    }

    public List<UserModel> getUsersByRole(String role) {
        List<UserModel> foundUsers = this.userRepository.findByRole(role);

        foundUsers.removeIf(user -> user.getIsDeleted() == IsObjectDeleted.TRUE);

        return foundUsers;
    }

    public UserModel addUser(UserModel user) {
        return this.userRepository.save(user);
    }

    public List<UserModel> getMembers() {
        List<UserModel> members = this.userRepository.findMembers();
        members.removeIf(user -> user.getIsDeleted() == IsObjectDeleted.TRUE);

        return members;
    }

    public List<UserModel> getManagers() {
        List<UserModel> managers = this.userRepository.findManagers();
        managers.removeIf(user -> user.getIsDeleted() == IsObjectDeleted.TRUE);

        return managers;
    }

    @Transactional
    public String updateUser(int id, UserModel updatedUser) {
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

        int updatedRow = this.userRepository.updateUser(finalUser.getId(), finalUser.getFirstName(), finalUser.getLastName(),
                finalUser.getEmail(), finalUser.getUserName(), finalUser.getPassword(), finalUser.getRole(true));

        return updatedRow == 1 ? "USER UPDATED SUCCESSFULLY" : "ERROR UPDATING USER";
    }

    public Optional<List<UserModel>> findUsersByTask(int taskId) {
        return this.userRepository.findUsersByTask(taskId);
    }

    // Assign Project Tasks to Users only if the user is a manager
    public void assignTask(int userId, int taskId) {
        /* UserRole userRole = this.getUserById(userId).get().getRole();

        if (userRole == MANAGER) this.assignTask(userId, taskId);
        else throw new IllegalArgumentException("Only managers can assign tasks");*/
        this.userRepository.assignTask(userId, taskId);
    }

    // Enable or disable a user - Recommended alternative to deleting a user
    public String softDelete(Integer id, IsObjectDeleted isDeleted) {
        UserModel user = userRepository.findById(id).orElseThrow(
            () -> new ObjectNotFoundException(id, "UserModel")
        );

        int deletedRows = this.userRepository.softDelete(id, isDeleted.toString());

        user.setIsDeleted(isDeleted);
        this.userRepository.save(user);

        return deletedRows == 1 ? "USER DELETED SUCCESSFULLY" : "ERROR DELETING USER";
    }
}
