package com.nhom6.backend.controller;

import com.nhom6.backend.entity.JobDetail;
import com.nhom6.backend.service.JobDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-details")
@CrossOrigin(origins = "*")
public class JobDetailController {

    private final JobDetailService jobDetailService;

    @Autowired
    public JobDetailController(JobDetailService jobDetailService) {
        this.jobDetailService = jobDetailService;
    }

    @GetMapping
    public List<JobDetail> getAll() {
        return jobDetailService.getAll();
    }

    @GetMapping("/{id}")
    public JobDetail getById(@PathVariable Long id) {
        return jobDetailService.getById(id)
                .orElseThrow(() -> new RuntimeException("Job detail not found with id " + id));
    }

    @PostMapping
    public JobDetail create(@RequestBody JobDetail jobDetail) {
        return jobDetailService.create(jobDetail);
    }

    @PutMapping("/{id}")
    public JobDetail update(@PathVariable Long id, @RequestBody JobDetail jobDetail) {
        return jobDetailService.update(id, jobDetail);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        jobDetailService.delete(id);
    }
}
