import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f1f1f1',
      padding: '30px 20px',
      textAlign: 'center',
      color: '#333',
      fontSize: '14px',
      marginTop: '40px',
      borderTop: '1px solid #ccc',
    },
    links: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '15px',
    },
    link: {
      color: '#0066cc',
      textDecoration: 'none',
    },
    copyright: {
      marginTop: '10px',
      color: '#777',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a href="/" style={styles.link}>Trang chủ</a>
        <a href="/search" style={styles.link}>Tìm việc</a>
        <a href="/candidate" style={styles.link}>Ứng viên</a>
        <a href="/login" style={styles.link}>Đăng nhập</a>
        <a href="/register" style={styles.link}>Đăng ký</a>
      </div>

      <p style={styles.copyright}>
        © 2025 - Nền tảng việc làm. Mọi quyền được bảo lưu.
      </p>
    </footer>
  );
};

export default Footer;
