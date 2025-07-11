package com.nhom6.backend.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom6.backend.entity.Job;
import com.nhom6.backend.repository.SearchJobRepository;

@Service
public class SearchJobService {

    @Autowired
    private SearchJobRepository jobRepository;

    public List<Job> searchJobs(String keyword, String location, String jobType, Integer salaryMin, Boolean isHot) {
        return jobRepository.searchJobs(keyword, location, jobType, salaryMin, isHot);
    }
}
