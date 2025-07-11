// src/main/java/com/nhom6/backend/repository/JobRepository.java
package com.nhom6.backend.repository;

import com.nhom6.backend.entity.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {
    // Lấy job HOT
    List<Job> findByIsHotTrue(Pageable pageable);

    // Lấy job mới nhất (sắp xếp theo ngày tạo giảm dần)
    Page<Job> findAllByOrderByCreatedAtDesc(Pageable pageable);
}