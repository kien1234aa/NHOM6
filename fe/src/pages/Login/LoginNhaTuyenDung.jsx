import { useState } from "react";
import logo from "../../assets/logo.png";
import co from "../../assets/co.png";
import chat from "../../assets/chat.png";
const DangNhapNhaTuyenDung = () => {
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    header: {
      background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
      display: "flex",
      justifyContent: "space-between",
      padding: "14px 36px",
      alignItems: "center",
      borderBottom: "1px solid #eee",
      fontFamily: "Arial, sans-serif",
      color: "#fff",
      boxShadow: "0 2px 12px rgba(25, 118, 210, 0.08)",
      position: "relative",
      zIndex: 10,
    },
    headerRight: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      fontSize: "15px",
      color: "#fff",
    },
    dangKyTopBtn: {
      backgroundColor: "#ffd600",
      border: "none",
      padding: "7px 22px",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "bold",
      color: "#222",
      fontSize: "15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      transition: "background 0.2s",
    },
    wrapper: {
      display: "flex",
      maxWidth: "900px",
      margin: "40px auto",
      backgroundColor: "#d0f0ec",
      borderRadius: "12px",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      padding: "30px",
    },
    left: {
      flex: 1,
      paddingRight: "20px",
      borderRight: "1px solid #ccc",
    },
    right: {
      flex: 1,
      paddingLeft: "20px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "10px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#0066ff",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "15px",
    },
    forgotLink: {
      marginTop: "10px",
      display: "inline-block",
      color: "#0066ff",
      textDecoration: "none",
      fontSize: "14px",
    },
    dangKyBtn: {
      backgroundColor: "#ffea00",
      border: "none",
      borderRadius: "8px",
      padding: "10px 20px",
      margin: "15px 0",
      fontWeight: "bold",
      cursor: "pointer",
    },
    divider: {
      margin: "20px 0",
      borderTop: "1px solid #ccc",
    },
  };

  return (
    <>
      {}
      <div style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="Duy Tân"
            style={{
              height: "40px",
              width: "auto",
              display: "block",
              background: "#fff",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              padding: "2px 8px",
              marginRight: "8px",
            }}
          />
          <span
            style={{ fontWeight: "bold", fontSize: "18px", color: "#222" }}
          ></span>
        </div>
        <div style={styles.headerRight}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img
              src={co}
              alt="VN flag"
              style={{
                height: "20px",
                width: "30px",
                objectFit: "cover",
                borderRadius: "3px",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img
              src={chat}
              alt="chat"
              style={{
                height: "20px",
                width: "30px",
                objectFit: "cover",
                borderRadius: "3px",
              }}
            />
          </div>

          <button style={styles.dangKyTopBtn}>Đăng ký</button>
          <span>Cho Người tìm việc</span>
        </div>
      </div>

      {}
      <div style={styles.wrapper}>
        <div style={styles.left}>
          <h2>Nhà tuyển dụng đăng nhập</h2>
          <input type="email" placeholder="Email" style={styles.input} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            style={styles.input}
          />

          <label style={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Hiển thị mật khẩu
          </label>

          <button style={styles.button}>Đăng nhập</button>

          <a href="#" style={styles.forgotLink}>
            Quên mật khẩu?
          </a>
        </div>

        <div style={styles.right}>
          <h3>Bạn chưa có tài khoản?</h3>
          <button style={styles.dangKyBtn}>Đăng ký</button>
          <p>
            Tham gia ngay hôm nay và truy cập hàng ngàn ứng cử viên sáng giá!
          </p>

          <div style={styles.divider}></div>

          <h4>Tại sao đăng ký?</h4>
          <ul style={{ textAlign: "left", marginTop: "10px" }}>
            <li>Đăng công việc để nhận được những hồ sơ phù hợp</li>
            <li>Nhận thông báo hồ sơ qua email</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DangNhapNhaTuyenDung;
