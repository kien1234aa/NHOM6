package com.nhom6.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;

import com.nhom6.backend.entity.Job;
import com.nhom6.backend.entity.Company;
import com.nhom6.backend.repository.JobRepository;
import com.nhom6.backend.repository.CompanyRepository;

@Service
public class HomeService {
    @Autowired
    private JobRepository jobRepo;

    @Autowired
    private CompanyRepository companyRepo;

    // 1. Lấy công việc HOT
    public List<Job> getHotJobs(int limit) {
        return jobRepo.findByIsHotTrue(PageRequest.of(0, limit));
    }

    // 2. Lấy công việc mới nhất
    public Page<Job> getLatestJobs(int page, int size) {
        return jobRepo.findAllByOrderByCreatedAtDesc(PageRequest.of(page, size));
    }

    // 3. Lấy công ty nổi bật
    public List<Company> getFeaturedCompanies(int limit) {
        return companyRepo.findByIsFeaturedTrue(PageRequest.of(0, limit));
    }

}