package com.nhom6.backend.service;

import com.nhom6.backend.entity.JobSeeker;
import com.nhom6.backend.entity.Recruiter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthService {
    private final List<JobSeeker> jobSeekers = new ArrayList<>();
    private final List<Recruiter> recruiters = new ArrayList<>();

    // Người tìm việc
    public String registerJobSeeker(JobSeeker js) {
        jobSeekers.add(js);
        return "Đăng ký người tìm việc thành công!";
    }

    public String loginJobSeeker(String email, String password) {
        return jobSeekers.stream().anyMatch(js -> js.getEmail().equals(email) && js.getPassword().equals(password))
            ? "Đăng nhập người tìm việc thành công!"
            : "Sai email hoặc mật khẩu";
    }

    // Nhà tuyển dụng
    public String registerRecruiter(Recruiter rec) {
        recruiters.add(rec);
        return "Đăng ký nhà tuyển dụng thành công!";
    }

    public String loginRecruiter(String email, String password) {
        return recruiters.stream().anyMatch(r -> r.getEmail().equals(email) && r.getPassword().equals(password))
            ? "Đăng nhập nhà tuyển dụng thành công!"
            : "Sai email hoặc mật khẩu";
    }
}
