package com.nhom6.backend.service;

import com.nhom6.backend.dto.*;
import com.nhom6.backend.entity.Candidate;
import com.nhom6.backend.entity.User;
import com.nhom6.backend.repository.CandidateRepository;
import com.nhom6.backend.repository.UserRepository;
import com.nhom6.backend.exception.ResourceNotFoundException;
import com.nhom6.backend.exception.DuplicateResourceException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CandidateService {

    private final CandidateRepository candidateRepository;
    private final UserRepository userRepository;

    public Page<CandidateResponse> getAllCandidates(Pageable pageable) {
        Page<Candidate> candidates = candidateRepository.findAll(pageable);
        return candidates.map(CandidateResponse::new);
    }

    public CandidateResponse getCandidateById(Integer userId) {
        Candidate candidate = candidateRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Candidate not found with userId: " + userId));
        return new CandidateResponse(candidate);
    }

    public CandidateResponse createCandidate(CreateCandidateRequest request) {
        User user = userRepository.findById(Long.valueOf(request.getUserId()))
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + request.getUserId()));

        if (candidateRepository.existsById(request.getUserId())) {
            throw new DuplicateResourceException("Candidate profile already exists for userId: " + request.getUserId());
        }

        Candidate candidate = new Candidate();
        candidate.setUserId(request.getUserId());
        candidate.setUser(user);
        candidate.setFullname(request.getFullname());
        candidate.setPhone(request.getPhone());
        candidate.setBirthday(request.getBirthday());
        candidate.setAddress(request.getAddress());
        candidate.setAvatar(request.getAvatar());
        candidate.setGender(request.getGender());
        candidate.setSummary(request.getSummary());
        candidate.setSkills(request.getSkills());
        candidate.setExperience(request.getExperience());
        candidate.setEducation(request.getEducation());
        candidate.setCvUrl(request.getCvUrl());

        Candidate savedCandidate = candidateRepository.save(candidate);
        return new CandidateResponse(savedCandidate);
    }

    public CandidateResponse updateCandidate(Integer userId, UpdateCandidateRequest request) {
        Candidate candidate = candidateRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Candidate not found with userId: " + userId));

        if (request.getFullname() != null) {
            candidate.setFullname(request.getFullname());
        }
        if (request.getPhone() != null) {
            candidate.setPhone(request.getPhone());
        }
        if (request.getBirthday() != null) {
            candidate.setBirthday(request.getBirthday());
        }
        if (request.getAddress() != null) {
            candidate.setAddress(request.getAddress());
        }
        if (request.getAvatar() != null) {
            candidate.setAvatar(request.getAvatar());
        }
        if (request.getGender() != null) {
            candidate.setGender(request.getGender());
        }
        if (request.getSummary() != null) {
            candidate.setSummary(request.getSummary());
        }
        if (request.getSkills() != null) {
            candidate.setSkills(request.getSkills());
        }
        if (request.getExperience() != null) {
            candidate.setExperience(request.getExperience());
        }
        if (request.getEducation() != null) {
            candidate.setEducation(request.getEducation());
        }
        if (request.getCvUrl() != null) {
            candidate.setCvUrl(request.getCvUrl());
        }

        Candidate updatedCandidate = candidateRepository.save(candidate);
        return new CandidateResponse(updatedCandidate);
    }

    public void deleteCandidate(Integer userId) {
        if (!candidateRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Candidate not found with userId: " + userId);
        }
        candidateRepository.deleteById(userId);
    }

    public Page<CandidateResponse> searchCandidates(String keyword, Pageable pageable) {
        Page<Candidate> candidates = candidateRepository.searchCandidates(keyword, pageable);
        return candidates.map(CandidateResponse::new);
    }

    public CandidateResponse getCandidateByUserEmail(String email) {
        Candidate candidate = candidateRepository.findByUserEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Candidate not found with user email: " + email));
        return new CandidateResponse(candidate);
    }

    public List<CandidateResponse> getCandidatesBySkill(String skill) {
        List<Candidate> candidates = candidateRepository.findBySkillsContaining(skill);
        return candidates.stream()
                .map(CandidateResponse::new)
                .collect(Collectors.toList());
    }

    public List<CandidateResponse> getCandidatesByGender(String gender) {
        List<Candidate> candidates = candidateRepository.findByGender(gender);
        return candidates.stream()
                .map(CandidateResponse::new)
                .collect(Collectors.toList());
    }

    public List<CandidateResponse> getCandidatesWithCV() {
        List<Candidate> candidates = candidateRepository.findCandidatesWithCV();
        return candidates.stream()
                .map(CandidateResponse::new)
                .collect(Collectors.toList());
    }
}