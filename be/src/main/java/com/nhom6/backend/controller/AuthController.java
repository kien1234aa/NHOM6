package com.nhom6.backend.controller;

import com.nhom6.backend.dto.LoginRequest;
import com.nhom6.backend.entity.JobSeeker;
import com.nhom6.backend.entity.Recruiter;
import com.nhom6.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Người tìm việc
    @PostMapping("/nguoitimviec/dangky")
    public String dangKyNguoiTimViec(@RequestBody JobSeeker user) {
        return authService.registerJobSeeker(user);
    }

    @PostMapping("/nguoitimviec/dangnhap")
    public String dangNhapNguoiTimViec(@RequestBody LoginRequest request) {
        return authService.loginJobSeeker(request.getEmail(), request.getPassword());
    }

    // Nhà tuyển dụng
    @PostMapping("/nhatuyendung/dangky")
    public String dangKyNhaTuyenDung(@RequestBody Recruiter recruiter) {
        return authService.registerRecruiter(recruiter);
    }

    @PostMapping("/nhatuyendung/dangnhap")
    public String dangNhapNhaTuyenDung(@RequestBody LoginRequest request) {
        return authService.loginRecruiter(request.getEmail(), request.getPassword());
    }
}
