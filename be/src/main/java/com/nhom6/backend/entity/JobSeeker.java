package com.nhom6.backend.entity;

public class JobSeeker {
    private String fullName;
    private String email;
    private String password;
    private boolean receiveNewsletter;
    private boolean agreeTerms;

    public JobSeeker() {}

    // Getter & Setter
    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isReceiveNewsletter() {
        return receiveNewsletter;
    }
    public void setReceiveNewsletter(boolean receiveNewsletter) {
        this.receiveNewsletter = receiveNewsletter;
    }

    public boolean isAgreeTerms() {
        return agreeTerms;
    }
    public void setAgreeTerms(boolean agreeTerms) {
        this.agreeTerms = agreeTerms;
    }
}
