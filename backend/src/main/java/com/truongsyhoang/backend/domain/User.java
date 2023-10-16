package com.truongsyhoang.backend.domain;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class User extends AbtractEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone", nullable = true)
    private String phone;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "expires_at", nullable = true)
    private LocalDate expiresAt;

    @Column(name = "address", nullable = true)
    private String address;

    @Column(name = "gender", nullable = true)
    private Integer gender;

    @Column(name = "image", nullable = true)
    private String image;

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;

    @ManyToOne
    @JoinColumn(name = "role_id")
    @JsonIgnoreProperties("users")
    private Role role;
    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties("user")
    private List<Token> tokens;
    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties("user")
    private List<Orders> orders;

}
