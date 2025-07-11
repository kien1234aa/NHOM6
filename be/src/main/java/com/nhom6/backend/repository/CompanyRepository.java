// src/main/java/com/nhom6/backend/repository/CompanyRepository.java
package com.nhom6.backend.repository;

import com.nhom6.backend.entity.Company;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    // Lấy công ty nổi bật
    List<Company> findByIsFeaturedTrue(Pageable pageable);
}