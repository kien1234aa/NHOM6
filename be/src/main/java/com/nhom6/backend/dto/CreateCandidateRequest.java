package com.nhom6.backend.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateCandidateRequest {

    @NotNull(message = "User ID is required")
    private Integer userId;

    @NotBlank(message = "Full name is required")
    @Size(min = 2, max = 100, message = "Full name must be between 2 and 100 characters")
    private String fullname;

    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Phone number should be valid")
    private String phone;

    @Past(message = "Birthday must be in the past")
    private LocalDate birthday;

    @Size(max = 500, message = "Address must not exceed 500 characters")
    private String address;

    private String avatar;

    @Pattern(regexp = "^(Nam|Nữ|Khác)$", message = "Gender must be Nam, Nữ, or Khác")
    private String gender;

    @Size(max = 1000, message = "Summary must not exceed 1000 characters")
    private String summary;

    private String skills;
    private String experience;
    private String education;
    private String cvUrl;
}