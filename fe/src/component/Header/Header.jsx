import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://static.careerlink.vn/web/images/logo.png"
          alt="CareerLink"
        />
      </div>
      <nav className="nav">
        <a href="#"><i className="fas fa-search"></i>Ngành nghề/Địa điểm</a>
        <a href="#"><i className="fas fa-building"></i>Công Ty</a>
        <a href="#"><i className="fas fa-book-open"></i>Cẩm nang việc làm</a>
        <a href="#"><i className="fas fa-file-alt"></i>Mẫu CV Xin Việc</a>
        <Link to="/quan-li-ho-so"><i className="fas fa-file-alt"></i>Quản lí hồ sơ</Link>
      </nav>
      <div className="actions">
        <div className="flag">🇻🇳</div>
        <a href="#"><i className="fas fa-comment-alt"></i></a>
        <a href="#"><i className="fas fa-user-circle"></i>Đăng ký</a>
        <a href="#">Nhà tuyển dụng</a>
      </div>
    </header>
  );
};

export default Header;
