package com.nhom6.backend.entity;

import jakarta.persistence.*; // hoặc javax.persistence.* nếu dự án của bạn dùng javax
// Nếu dùng javax thì thay dòng trên thành:
// import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Entity
@Table(name = "applications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer candidateId;
    private Integer jobId;
    private String cvUrl;
    private String message;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private RecruitmentStatus status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
