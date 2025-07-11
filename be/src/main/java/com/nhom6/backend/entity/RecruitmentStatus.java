package com.nhom6.backend.entity;

import jakarta.persistence.*; // hoặc javax.persistence.* nếu dự án của bạn dùng javax
// Nếu dùng javax thì thay dòng trên thành:
// import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "recruitment_status")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecruitmentStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
}
