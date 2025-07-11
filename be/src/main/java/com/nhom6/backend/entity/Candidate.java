package com.nhom6.backend.entity;

import jakarta.persistence.*; // Hoặc javax.persistence.*
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "candidates")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Candidate {

    @Id
    private Integer userId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    private String fullname;
    private String phone;
    private LocalDate birthday;
    private String address;
    private String avatar;
    private String gender;
}
