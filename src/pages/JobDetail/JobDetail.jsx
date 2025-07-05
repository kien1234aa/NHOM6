import React from 'react';
import './JobDetail.css';

const JobDetail = () => {
    return (
        <main className="job-detail-container">
            <div className="job-detail-content">
                <div className="job-detail-company-header">
                    <img src="rose.png" alt="Logo" className="job-detail-logo" />
                    <h1 className="job-detail-title">Tên Công Việc</h1>
                </div>

                <div className="job-detail-info-section">
                    <div className="job-detail-company">Công Ty</div>

                    <div className="job-detail-details-grid">
                        <div className="job-detail-item">
                            <div className="job-detail-icon">📍</div>
                            <div>
                                <div className="job-detail-text">Vị trí</div>
                                <div className="job-detail-value">Nhật Bản</div>
                            </div>
                        </div>

                        <div className="job-detail-item">
                            <div className="job-detail-icon">💰</div>
                            <div>
                                <div className="job-detail-text">Thưởng lương</div>
                                <div className="job-detail-value">Thương lượng</div>
                            </div>
                        </div>

                        <div className="job-detail-item">
                            <div className="job-detail-icon">👥</div>
                            <div>
                                <div className="job-detail-text">Kinh nghiệm</div>
                                <div className="job-detail-value">0 - 1 năm kinh nghiệm</div>
                            </div>
                        </div>

                        <div className="job-detail-item">
                            <div className="job-detail-icon">📅</div>
                            <div>
                                <div className="job-detail-text">Ngày đăng tuyển</div>
                                <div className="job-detail-value">12-06-2025 | Hết hạn trong: 8 Ngày nữa</div>
                            </div>
                        </div>
                    </div>

                    <div className="job-detail-actions">
                        <button className="job-detail-apply-btn">Nộp đơn ngay</button>
                        <button className="job-detail-save-btn">❤️ Lưu</button>
                    </div>

                    <div className="job-detail-tabs">
                        <div className="job-detail-tab active">Mô tả</div>
                        <div className="job-detail-tab">Quyền lợi</div>
                        <div className="job-detail-tab">Kỹ năng yêu cầu</div>
                        <div className="job-detail-tab">Chi tiết công việc</div>
                        <div className="job-detail-tab">Liên hệ</div>
                        <div className="job-detail-tab">Về công ty</div>
                    </div>

                    <div className="job-detail-description">
                        Mô tả công việc
                    </div>
                </div>
            </div>

            <aside className="job-detail-sidebar">
                <div className="job-detail-suggestion-box">
                    <div className="job-detail-suggestion-header">
                        <h3 className="job-detail-suggestion-title">Việc làm gợi ý</h3>
                    </div>
                    {/* Render suggestions here */}
                </div>
            </aside>
        </main>
    );
};

export default JobDetail;
