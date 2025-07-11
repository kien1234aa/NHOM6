package com.nhom6.backend.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Data
public class FavoriteId implements Serializable {
    private Integer candidateId;
    private Integer jobId;

    public FavoriteId() {
    }

    public FavoriteId(Integer candidateId, Integer jobId) {
        this.candidateId = candidateId;
        this.jobId = jobId;
    }

    // equals và hashCode là BẮT BUỘC khi dùng @IdClass
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof FavoriteId))
            return false;
        FavoriteId that = (FavoriteId) o;
        return Objects.equals(candidateId, that.candidateId) &&
                Objects.equals(jobId, that.jobId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(candidateId, jobId);
    }
}
