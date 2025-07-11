package com.nhom6.backend.controller;

import com.nhom6.backend.dto.*;
import com.nhom6.backend.service.CandidateService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidates")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CandidateController {

    private final CandidateService candidateService;

    @GetMapping
    public ResponseEntity<Page<CandidateResponse>> getAllCandidates(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "userId") String sortBy,
            @RequestParam(defaultValue = "DESC") String sortDirection) {

        Sort.Direction direction = sortDirection.equalsIgnoreCase("ASC")
                ? Sort.Direction.ASC
                : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));

        Page<CandidateResponse> candidates = candidateService.getAllCandidates(pageable);
        return ResponseEntity.ok(candidates);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<CandidateResponse> getCandidateById(@PathVariable Integer userId) {
        CandidateResponse candidate = candidateService.getCandidateById(userId);
        return ResponseEntity.ok(candidate);
    }

    @PostMapping
    public ResponseEntity<CandidateResponse> createCandidate(@Valid @RequestBody CreateCandidateRequest request) {
        CandidateResponse candidate = candidateService.createCandidate(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(candidate);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<CandidateResponse> updateCandidate(
            @PathVariable Integer userId,
            @Valid @RequestBody UpdateCandidateRequest request) {
        CandidateResponse candidate = candidateService.updateCandidate(userId, request);
        return ResponseEntity.ok(candidate);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteCandidate(@PathVariable Integer userId) {
        candidateService.deleteCandidate(userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<Page<CandidateResponse>> searchCandidates(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<CandidateResponse> candidates = candidateService.searchCandidates(keyword, pageable);
        return ResponseEntity.ok(candidates);
    }

    @GetMapping("/user/email/{email}")
    public ResponseEntity<CandidateResponse> getCandidateByUserEmail(@PathVariable String email) {
        CandidateResponse candidate = candidateService.getCandidateByUserEmail(email);
        return ResponseEntity.ok(candidate);
    }

    @GetMapping("/skill/{skill}")
    public ResponseEntity<List<CandidateResponse>> getCandidatesBySkill(@PathVariable String skill) {
        List<CandidateResponse> candidates = candidateService.getCandidatesBySkill(skill);
        return ResponseEntity.ok(candidates);
    }

    @GetMapping("/gender/{gender}")
    public ResponseEntity<List<CandidateResponse>> getCandidatesByGender(@PathVariable String gender) {
        List<CandidateResponse> candidates = candidateService.getCandidatesByGender(gender);
        return ResponseEntity.ok(candidates);
    }

    @GetMapping("/with-cv")
    public ResponseEntity<List<CandidateResponse>> getCandidatesWithCV() {
        List<CandidateResponse> candidates = candidateService.getCandidatesWithCV();
        return ResponseEntity.ok(candidates);
    }
}