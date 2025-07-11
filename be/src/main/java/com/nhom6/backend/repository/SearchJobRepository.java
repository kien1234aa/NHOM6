package com.nhom6.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nhom6.backend.entity.Job;

@Repository
public interface SearchJobRepository extends JpaRepository<Job, Integer> {

    @Query("""
                SELECT j FROM Job j
                WHERE
                    (:keyword IS NULL OR LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%'))
                        OR LOWER(j.description) LIKE LOWER(CONCAT('%', :keyword, '%')))
                    AND (:location IS NULL OR LOWER(j.location) = LOWER(:location))
                    AND (:jobType IS NULL OR LOWER(j.jobType) = LOWER(:jobType))
                    AND (:salaryMin IS NULL OR j.salaryMin >= :salaryMin)
                    AND (:isHot IS NULL OR j.isHot = :isHot)
            """)
    List<Job> searchJobs(
            @Param("keyword") String keyword,
            @Param("location") String location,
            @Param("jobType") String jobType,
            @Param("salaryMin") Integer salaryMin,
            @Param("isHot") Boolean isHot);
}
