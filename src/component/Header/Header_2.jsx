import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Menu, User, Bookmark, Briefcase, GraduationCap } from 'lucide-react';

const Header_2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const styles = {
        header: {
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        topBar: {
            borderBottom: '1px solid #e5e5e5',
            padding: '0 20px'
        },
        topContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px'
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        logoIcon: {
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
        },
        logoIconBlue: {
            backgroundColor: '#3b82f6'
        },
        logoIconOrange: {
            backgroundColor: '#f97316'
        },
        logoText: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            marginLeft: '4px'
        },
        searchContainer: {
            flex: 1,
            maxWidth: '600px',
            margin: '0 32px'
        },
        searchBar: {
            display: 'flex',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            overflow: 'hidden'
        },
        searchInputWrapper: {
            flex: 1,
            position: 'relative'
        },
        searchInput: {
            width: '100%',
            padding: '10px 12px 10px 40px',
            border: 'none',
            outline: 'none',
            fontSize: '14px'
        },
        locationInputWrapper: {
            position: 'relative',
            width: '200px'
        },
        locationInput: {
            width: '100%',
            padding: '10px 12px 10px 40px',
            border: 'none',
            borderLeft: '1px solid #d1d5db',
            outline: 'none',
            fontSize: '14px'
        },
        searchIcon: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            width: '16px',
            height: '16px'
        },
        locationIcon: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            width: '16px',
            height: '16px'
        },
        searchButton: {
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '10px 24px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s'
        },
        rightSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        flags: {
            display: 'flex',
            gap: '8px'
        },
        flag: {
            width: '24px',
            height: '16px',
            borderRadius: '2px'
        },
        flagVietnam: {
            background: 'linear-gradient(to bottom, #da020e 50%, #ffff00 50%)'
        },
        flagEnglish: {
            background: 'linear-gradient(45deg, #012169 25%, transparent 25%), linear-gradient(-45deg, #012169 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #012169 75%), linear-gradient(-45deg, transparent 75%, #012169 75%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
        },
        iconButton: {
            padding: '8px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'background-color 0.2s'
        },
        userSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '14px',
            color: '#374151',
            cursor: 'pointer'
        },
        employerLink: {
            fontSize: '14px',
            color: '#6b7280',
            textDecoration: 'none'
        },
        navBar: {
            borderBottom: '1px solid #e5e5e5',
            padding: '0 20px'
        },
        navContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            height: '48px',
            gap: '32px'
        },
        navItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            color: '#4b5563',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'color 0.2s'
        },
        navIcon: {
            width: '16px',
            height: '16px',
            backgroundColor: '#dbeafe',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        },
        navIconDot: {
            width: '8px',
            height: '8px',
            backgroundColor: '#2563eb',
            borderRadius: '50%'
        }
    };

    const handleSearchButtonHover = (e) => {
        e.target.style.backgroundColor = '#1d4ed8';
    };

    const handleSearchButtonLeave = (e) => {
        e.target.style.backgroundColor = '#2563eb';
    };

    const handleIconButtonHover = (e) => {
        e.target.style.backgroundColor = '#f3f4f6';
    };

    const handleIconButtonLeave = (e) => {
        e.target.style.backgroundColor = 'transparent';
    };

    const handleNavItemHover = (e) => {
        e.target.style.color = '#2563eb';
    };

    const handleNavItemLeave = (e) => {
        e.target.style.color = '#4b5563';
    };

    return (
        <header style={styles.header}>
            {/* Top Bar */}
            <div style={styles.topBar}>
                <div style={styles.topContainer}>
                    {/* Logo */}
                    <div style={styles.logo}>
                        <div style={{ ...styles.logoIcon, ...styles.logoIconBlue }}>C</div>
                        <div style={{ ...styles.logoIcon, ...styles.logoIconOrange }}>L</div>
                        <span style={styles.logoText}>CareerLink</span>
                    </div>

                    {/* Search Bar */}
                    <div style={styles.searchContainer}>
                        <div style={styles.searchBar}>
                            <div style={styles.searchInputWrapper}>
                                <Search style={styles.searchIcon} />
                                <input
                                    type="text"
                                    style={styles.searchInput}
                                    placeholder="Nhập tên vị trí, công ty, từ khóa"
                                />
                            </div>
                            <div style={styles.locationInputWrapper}>
                                <MapPin style={styles.locationIcon} />
                                <input
                                    type="text"
                                    style={styles.locationInput}
                                    placeholder="Nhập tỉnh, thành phố"
                                />
                            </div>
                            <button
                                style={styles.searchButton}
                                onMouseEnter={handleSearchButtonHover}
                                onMouseLeave={handleSearchButtonLeave}
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div style={styles.rightSection}>
                        <div style={styles.flags}>
                            <div style={{ ...styles.flag, ...styles.flagVietnam }}></div>
                            <div style={{ ...styles.flag, ...styles.flagEnglish }}></div>
                        </div>

                        <button
                            style={styles.iconButton}
                            onMouseEnter={handleIconButtonHover}
                            onMouseLeave={handleIconButtonLeave}
                        >
                            <Menu size={20} />
                        </button>

                        <button
                            style={styles.iconButton}
                            onMouseEnter={handleIconButtonHover}
                            onMouseLeave={handleIconButtonLeave}
                        >
                            <Bookmark size={20} />
                        </button>

                        <div style={styles.userSection}>
                            <User size={16} />
                            <span>Đăng ký</span>
                            <ChevronDown size={16} />
                        </div>

                        <a href="#" style={styles.employerLink}>Nhà tuyển dụng</a>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div style={styles.navBar}>
                <div style={styles.navContainer}>
                    <div
                        style={styles.navItem}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                    >
                        <div style={styles.navIcon}>
                            <div style={styles.navIconDot}></div>
                        </div>
                        <span>Ngành nghề</span>
                        <ChevronDown size={16} />
                    </div>

                    <div
                        style={styles.navItem}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                    >
                        <GraduationCap size={16} />
                        <span>Cấp bậc</span>
                        <ChevronDown size={16} />
                    </div>

                    <div
                        style={styles.navItem}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                    >
                        <Briefcase size={16} />
                        <span>Kinh nghiệm</span>
                        <ChevronDown size={16} />
                    </div>

                    <div
                        style={styles.navItem}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                    >
                        <MapPin size={16} />
                        <span>Mức lương</span>
                        <ChevronDown size={16} />
                    </div>

                    <div
                        style={styles.navItem}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                    >
                        <GraduationCap size={16} />
                        <span>Học vấn</span>
                        <ChevronDown size={16} />
                    </div>

                    <div
                        style={styles.navItem}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                    >
                        <Briefcase size={16} />
                        <span>Loại công việc</span>
                        <ChevronDown size={16} />
                    </div>

                    <div
                        style={styles.navItem}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                    >
                        <Bookmark size={16} />
                        <span>Đăng trong</span>
                        <ChevronDown size={16} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header_2;