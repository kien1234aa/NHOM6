package com.nhom6.backend.entity;

import jakarta.persistence.*; // hoặc javax.persistence.* nếu dự án của bạn dùng javax
// Nếu dùng javax thì thay dòng trên thành:
// import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "cvs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CV {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer candidateId;
    private String jobTitle;
    private String careerField;
    private Integer expectedSalary;
    private String educationLevel;
    private String desiredPosition;
    private String currentPosition;
    private String workForm;
    private Integer experienceYears;
    private String desiredLocation;
    private String cvFileUrl;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
