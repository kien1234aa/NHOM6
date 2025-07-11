// src/main/java/com/nhom6/backend/controller/HomeController.java
package com.nhom6.backend.controller;

import com.nhom6.backend.entity.Job;
import com.nhom6.backend.entity.Company;
import com.nhom6.backend.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home")
public class HomeController {

    @Autowired
    private HomeService homeService;

    @GetMapping("/jobs/hot")
    public List<Job> hotJobs(@RequestParam(defaultValue = "5") int limit) {
        return homeService.getHotJobs(limit);
    }

    @GetMapping("/jobs/latest")
    public Page<Job> latestJobs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return homeService.getLatestJobs(page, size);
    }

    @GetMapping("/companies/featured")
    public List<Company> featuredCompanies(@RequestParam(defaultValue = "5") int limit) {
        return homeService.getFeaturedCompanies(limit);
    }

}
