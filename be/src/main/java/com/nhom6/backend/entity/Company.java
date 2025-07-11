// src/main/java/com/nhom6/backend/entity/Company.java
package com.nhom6.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "companies")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {
    @Id
    private Integer userId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    private String companyName;
    private String description;
    private String phone;
    private String address;
    private String avatar;
    private String website;

    @Column(name = "is_featured")
    private Boolean isFeatured = false; // Thêm trường isFeatured
}