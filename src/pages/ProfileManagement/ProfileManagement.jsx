
import React, { useState } from "react";
import Header from "../../component/Header/Header"; 
import "./ProfileManagement.css";


const ProfileManagement = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="profile-management">
      
      {}
      <div className="search-section">
        <div className="search-container">
          <div className="search-inputs">
            <input
              type="text"
              placeholder="Nhập tên vị trí, công ty, từ khóa"
              className="search-input position-input"
            />
            <input
              type="text"
              placeholder="Nhập tỉnh, thành phố"
              className="search-input location-input"
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
              <span>Tìm kiếm</span>
            </button>
          </div>
          
          <div className="header-actions">
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="fas fa-bars"></i>
            </button>
            
            <div className="desktop-actions">
              <button className="heart-btn">
                <i className="fas fa-heart"></i>
              </button>
              <button className="user-btn">
                <i className="fas fa-user"></i>
                <span>Ứng viên</span>
              </button>
              <button className="employer-btn">
                Nhà tuyển dụng
              </button>
            </div>
            
            <button className="close-btn">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <button className="mobile-menu-item">Quản lí hồ sơ</button>
            <button className="mobile-menu-item">Việc nhẹ lương cao của tôi</button>
            <button className="mobile-menu-item">Việc đã lưu</button>
            <button className="mobile-menu-item">Việc đã ứng tuyển</button>
            <button className="mobile-menu-item">Thông báo việc làm</button>
            <button className="mobile-menu-item">Tài khoản</button>
          </div>
        </div>
      )}

      <nav className="nav-tabs">
        <div className="nav-tabs-container">
          <button className="nav-tab active">Quản lí hồ sơ</button>
          <button className="nav-tab">Việc nhẹ lương cao của tôi</button>
          <button className="nav-tab">Việc đã lưu</button>
          <button className="nav-tab">Việc đã ứng tuyển</button>
          <button className="nav-tab">Thông báo việc làm</button>
          <button className="nav-tab">Tài khoản</button>
        </div>
      </nav>

      {}
      <main className="main-content">
        <div className="content-container">
          {}
          <div className="left-column">
            {}
            <div className="card">
              <h2 className="card-title">Hồ sơ xin việc</h2>
              <div className="empty-state">
                <p className="empty-text">
                  Muốn xin việc thì bước đầu phải tạo hồ sơ bạn ơi.
                </p>
                <button className="create-btn">
                  + TẠO MỚI
                </button>
              </div>
            </div>

            {}
            <div className="card">
              <h2 className="card-title">Thư xin việc</h2>
              <div className="empty-state">
                <p className="empty-text">
                  Chưa có thư xin việc nào nè.
                </p>
                <button className="create-btn">
                  + TẠO MỚI
                </button>
              </div>
            </div>
          </div>

          {}
          <div className="right-column">
            {}
            <div className="card">
              <h3 className="card-title">CV tại VIỆC NHẸ LƯƠNG CAO</h3>
              <p className="card-text">
                Ở đây bạn sẽ thấy những CV của bạn đã tạo. Hãy dùng những CV này mà tìm việc nhẹ lương cao
              </p>
            </div>

            {}
            <div className="card tips-card">
              <h4 className="tips-title">Mẹo tìm việc</h4>
              <p className="tips-text">
                Cập nhật hồ sơ thường xuyên để tăng cơ hội được nhà tuyển dụng chú ý.
              </p>
            </div>

            {}
            <div className="card hot-jobs-card">
              <h4 className="hot-jobs-title">Việc làm HOT</h4>
              <p className="hot-jobs-text">
                Khám phá những vị trí việc làm được quan tâm nhất tuần này.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileManagement;