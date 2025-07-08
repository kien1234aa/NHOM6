import React from 'react';
import './HomeBanner.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeBanner = () => {
    return (
        <section className="home-banner">
            <div className="banner-background"></div>
            <div className="banner-content">
                <div className="input-group">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Nhập tên vị trí, công ty, từ khóa" />
                </div>
                <div className="input-group">
                    <i className="fas fa-map-marker-alt"></i>
                    <input type="text" placeholder="Nhập tỉnh, thành phố" />
                </div>
                <button>Tìm kiếm</button>
            </div>
        </section>
    );
};

export default HomeBanner;
