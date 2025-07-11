package com.nhom6.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nhom6.backend.entity.Job;
import com.nhom6.backend.service.SearchJobService;

@RestController
@RequestMapping("/api/jobs")
public class SearchJobController {

    @Autowired
    private SearchJobService jobService;

    @GetMapping("/search")
    public ResponseEntity<List<Job>> searchJobs(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String jobType,
            @RequestParam(required = false) Integer salaryMin,
            @RequestParam(required = false) Boolean isHot) {
        List<Job> jobs = jobService.searchJobs(keyword, location, jobType, salaryMin, isHot);
        return ResponseEntity.ok(jobs);
    }
}
