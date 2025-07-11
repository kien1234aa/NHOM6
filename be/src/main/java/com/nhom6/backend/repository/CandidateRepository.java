package com.nhom6.backend.repository;

import com.nhom6.backend.entity.Candidate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {

    @Query("SELECT c FROM Candidate c WHERE " +
            "LOWER(c.fullname) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "c.phone LIKE CONCAT('%', :keyword, '%')")
    Page<Candidate> searchCandidates(@Param("keyword") String keyword, Pageable pageable);

    List<Candidate> findByGender(String gender);

    @Query("SELECT c FROM Candidate c WHERE LOWER(c.skills) LIKE LOWER(CONCAT('%', :skill, '%'))")
    List<Candidate> findBySkillsContaining(@Param("skill") String skill);

    @Query("SELECT c FROM Candidate c WHERE c.user.email = :email")
    Optional<Candidate> findByUserEmail(@Param("email") String email);

    @Query("SELECT c FROM Candidate c WHERE c.cvUrl IS NOT NULL")
    List<Candidate> findCandidatesWithCV();

    long countByGender(String gender);
}