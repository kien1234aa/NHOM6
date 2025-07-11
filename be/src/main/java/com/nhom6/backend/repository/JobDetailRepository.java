package com.nhom6.backend.repository;

import com.nhom6.backend.entity.JobDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobDetailRepository extends JpaRepository<JobDetail, Long> {
}
