package com.samson.intelliserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.samson.intelliserver.types.UserRole;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "_user")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer user_id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_password")
    @JsonIgnore
    private String password;

    @Column(name = "user_role")
    @Enumerated(EnumType.STRING)
    private UserRole role;
}
