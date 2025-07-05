import { useState } from "react";
import chat from "../../assets/chat.png";
import co from "../../assets/co.png";
import logo from "../../assets/logo.png";
import "../../component/Header/Header.css";

const DangKyNhaTuyenDung = () => {
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    header: {
      background: "#fff",
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 30px",
      alignItems: "center",
      borderBottom: "1px solid #eee",
      fontFamily: "Arial, sans-serif",
    },
    logo: {
      height: "40px",
    },
    headerRight: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "14px",
    },
    dangKyTopBtn: {
      backgroundColor: "#f1d100",
      border: "none",
      padding: "5px 15px",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    container: {
      maxWidth: "520px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#d6f0ff",
      borderRadius: "12px",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "10px",
    },
    subtext: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    inlineInputs: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "10px",
    },
    sectionTitle: {
      marginTop: "20px",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#444",
    },
    submitBtn: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#0066ff",
      color: "white",
      fontWeight: "bold",
      fontSize: "16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "20px",
    },
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo Duy Tân" />
        </div>
        <div className="headerRight">
          <img
            src={co}
            alt="VN Flag"
            style={{
              height: "20px",
              width: "30px",
              objectFit: "cover",
              borderRadius: "3px",
              boxShadow: "0 0 3px rgba(0,0,0,0.2)",
            }}
          />
          <img
            src={chat}
            alt="VN Flag"
            style={{
              height: "20px",
              width: "30px",
              objectFit: "cover",
              borderRadius: "3px",
              boxShadow: "0 0 3px rgba(0,0,0,0.2)",
            }}
          />
          <button className="dangKyTopBtn">Đăng ký</button>
          <span>Cho Người tìm việc</span>
        </div>
      </div>
      {}
      <div style={styles.container}>
      <h2 style={{
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#d32f2f',
  textTransform: 'uppercase',
  textShadow: '1px 1px 2px #00000055',
  marginBottom: '20px'
}}>
  Nhà tuyển dụng đăng ký
</h2>

        <p style={styles.subtext}>
          Tạo tài khoản để tiếp cận kho ứng viên chất lượng và bắt đầu đăng việc
          ngay
        </p>

        <form>
          <input
            type="email"
            placeholder="Email công việc"
            required
            style={styles.input}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            required
            style={styles.input}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nhập lại mật khẩu"
            required
            style={styles.input}
          />

          <label style={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Hiển thị mật khẩu
          </label>

          <h3 style={styles.sectionTitle}>Thông tin công ty</h3>
          <input
            type="text"
            placeholder="Tên công ty"
            required
            style={styles.input}
          />
          <select required style={styles.input}>
            <option value="">Số nhân viên</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>

          <div style={styles.inlineInputs}>
            <input
              type="text"
              placeholder="Người liên hệ"
              style={{ ...styles.input, marginTop: 0 }}
            />
            <input
              type="tel"
              placeholder="Điện thoại"
              style={{ ...styles.input, marginTop: 0 }}
            />
          </div>

          <h4 style={styles.sectionTitle}>Địa chỉ</h4>
          <div style={styles.inlineInputs}>
            <input
              type="text"
              placeholder="Quốc gia"
              style={{ ...styles.input, marginTop: 0 }}
            />
            <input
              type="text"
              placeholder="Tỉnh/thành"
              style={{ ...styles.input, marginTop: 0 }}
            />
            <input
              type="text"
              placeholder="Quận/huyện"
              style={{ ...styles.input, marginTop: 0 }}
            />
          </div>

          <input type="text" placeholder="Số nhà/phường" style={styles.input} />

          <label style={styles.checkbox}>
            <input type="checkbox" />
            Nhận bảng tin việc làm
          </label>

          <button type="submit" style={styles.submitBtn}>
            Đăng ký ngay
          </button>
        </form>
      </div>
    </>
  );
};

export default DangKyNhaTuyenDung;
