package com.nhom6.backend.service;

import com.nhom6.backend.entity.JobDetail;
import com.nhom6.backend.repository.JobDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobDetailService {

    private final JobDetailRepository jobDetailRepository;

    @Autowired
    public JobDetailService(JobDetailRepository jobDetailRepository) {
        this.jobDetailRepository = jobDetailRepository;
    }

    public List<JobDetail> getAll() {
        return jobDetailRepository.findAll();
    }

    public Optional<JobDetail> getById(Long id) {
        return jobDetailRepository.findById(id);
    }

    public JobDetail create(JobDetail job) {
        return jobDetailRepository.save(job);
    }

    public JobDetail update(Long id, JobDetail updated) {
        return jobDetailRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(updated.getTitle());
                    existing.setCompany(updated.getCompany());
                    existing.setLocation(updated.getLocation());
                    existing.setSalary(updated.getSalary());
                    existing.setExperience(updated.getExperience());
                    existing.setPostDate(updated.getPostDate());
                    existing.setDeadline(updated.getDeadline());
                    existing.setDescription(updated.getDescription());
                    existing.setBenefits(updated.getBenefits());
                    existing.setRequiredSkills(updated.getRequiredSkills());
                    existing.setJobDetails(updated.getJobDetails());
                    existing.setContact(updated.getContact());
                    return jobDetailRepository.save(existing);
                }).orElseThrow(() -> new RuntimeException("Job detail not found with id " + id));
    }

    public void delete(Long id) {
        jobDetailRepository.deleteById(id);
    }
}
