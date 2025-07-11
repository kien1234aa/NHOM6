package com.nhom6.backend.entity;

import jakarta.persistence.*; // hoặc javax.persistence.* nếu dự án của bạn dùng javax
// Nếu dùng javax thì thay dòng trên thành:
// import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Entity
@Table(name = "admin_reports")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String reportType;

    @Column(name = "generated_at")
    private LocalDateTime generatedAt;

    private String content;
}
