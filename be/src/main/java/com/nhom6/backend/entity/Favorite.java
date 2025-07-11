package com.nhom6.backend.entity;

import jakarta.persistence.*; // hoặc javax.persistence.* nếu bạn dùng Spring Boot 2.x
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "favorites")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(FavoriteId.class)
public class Favorite {

    @Id
    @Column(name = "candidate_id")
    private Integer candidateId;

    @Id
    @Column(name = "job_id")
    private Integer jobId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
