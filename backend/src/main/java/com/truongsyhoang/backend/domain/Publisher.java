package com.truongsyhoang.backend.domain;

// import org.springframework.data.annotation.Id;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "publisher")
public class Publisher extends AbtractEntity {

    @ManyToOne
    @JoinColumn(name = "parent_id", referencedColumnName = "id")
    private Publisher parentId;
    
    @Column(name = "name", nullable = false, length = 100)
    private String name;
    @Column(name = "slug", nullable = false, length = 100)
    private String slug;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "phone", nullable = false, length = 12)
    private String phone;
    @Column(name = "address", nullable = false)
    private String address;
    @Enumerated
    @Column(name = "status", nullable = false)
    private Status status;

}
