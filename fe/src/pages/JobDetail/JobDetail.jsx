import React from 'react';
import './JobDetail.css';

export default function JobDetail() {
  return (
    <main className="main-container">
      <div className="content">
        <div className="company-header">
          <img src="rose.png" alt="Logo" />
          <h1>Tên Công Việc</h1>
        </div>
        <div className="job-info-section">
          <div className="company">Công Ty</div>
          <div className="job-details-grid">
            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <div className="detail-text">Vị trí</div>
                <div className="detail-value">Nhật Bản</div>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">💰</div>
              <div>
                <div className="detail-text">Thưởng lương</div>
                <div className="detail-value">Thương lượng</div>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">👥</div>
              <div>
                <div className="detail-text">Kinh nghiệm</div>
                <div className="detail-value">0 - 1 năm kinh nghiệm</div>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">📅</div>
              <div>
                <div className="detail-text">Ngày đăng tuyển</div>
                <div className="detail-value">12-06-2025 | Hết hạn trong: 8 Ngày nữa</div>
              </div>
            </div>
          </div>
          <div className="job-actions">
            <button className="apply-btn">Nộp đơn ngay</button>
            <button className="save-btn">❤️ Lưu</button>
          </div>
          <div className="job-tabs">
            <div className="tab active">Mô tả</div>
            <div className="tab">Quyền lợi</div>
            <div className="tab">Kỹ năng yêu cầu</div>
            <div className="tab">Chi tiết công việc</div>
            <div className="tab">Liên hệ</div>
            <div className="tab">Về công ty</div>
          </div>
          <div className="job-description">
            Mô tả công việc
          </div>
        </div>
      </div>
    </main>
  );
}
