import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './HomeJobList.css'
const HomeJobList = () => {
    return (
        <>
            <div className="home-job-list">
                <div className="home-job-card">
                    <div className="home-job-card-logo">
                        <img
                            src="https://blob-careerlinkvn.careerlink.vn/company_logos/fb6bcbccd1dd38b5600934af7b2fe87d.png"
                            alt="Logo"
                        />
                    </div>
                    <div className="home-job-card-info">
                        <div className="home-job-card-title">Operations Manager (Ngành F&amp;B)</div>
                        <div className="home-job-card-company">Cà Phê Muối Chú Long</div>
                        <div className="home-job-card-meta">
                            <i className="fas fa-map-marker-alt"></i>
                            Hồ Chí Minh
                        </div>
                    </div>
                    <div className="home-job-card-actions">
                        <div className="home-job-card-salary">
                            <i className="fas fa-wallet"></i>
                            Thương lượng
                        </div>
                        <div className="home-job-card-time">5 giờ trước</div>
                        <div className="home-job-card-favorite">
                            <i className="far fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-zalo-widget">
                <img src="zalo-icon.png" alt="Zalo" />
            </div>
        </>
    );
};

export default HomeJobList;
