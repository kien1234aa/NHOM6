// src/main/java/com/nhom6/backend/entity/Job.java
package com.nhom6.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "jobs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    private String title;
    private String description;
    private String location;
    private Integer salaryMin;
    private Integer salaryMax;
    private String jobType;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    private String status;

    @Column(name = "is_hot")
    private Boolean isHot = false; // Thêm trường isHot
}