package com.nhom6.backend.dto;

import com.nhom6.backend.entity.Candidate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CandidateResponse {
    private Integer userId;
    private String email;
    private String fullname;
    private String phone;
    private LocalDate birthday;
    private String address;
    private String avatar;
    private String gender;
    private String summary;
    private String skills;
    private String experience;
    private String education;
    private String cvUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public CandidateResponse(Candidate candidate) {
        this.userId = candidate.getUserId();
        this.fullname = candidate.getFullname();
        this.phone = candidate.getPhone();
        this.birthday = candidate.getBirthday();
        this.address = candidate.getAddress();
        this.avatar = candidate.getAvatar();
        this.gender = candidate.getGender();
        this.summary = candidate.getSummary();
        this.skills = candidate.getSkills();
        this.experience = candidate.getExperience();
        this.education = candidate.getEducation();
        this.cvUrl = candidate.getCvUrl();
        this.createdAt = candidate.getCreatedAt();
        this.updatedAt = candidate.getUpdatedAt();

        if (candidate.getUser() != null) {
            this.email = candidate.getUser().getEmail();
        }
    }
}