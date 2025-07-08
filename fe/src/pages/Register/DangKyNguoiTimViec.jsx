import { useState } from "react";
import chat from "../../assets/chat.png";
import co from "../../assets/co.png";
import logo from "../../assets/logo.png";

const JobSeekerRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    receiveJobAlerts: false,
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9999,
          background: "linear-gradient(90deg, #4285f4 0%, #34a853 100%)",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              background: "#fff",
              padding: "4px 12px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
            }}
          >
            <img
              src={logo}
              alt="Logo Duy Tân"
              style={{
                maxHeight: "40px",
                width: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "14px",
            color: "#222",
          }}
        >
          <span style={{ cursor: "pointer" }}>🔍 Ngành nghề/Địa điểm</span>
          <span style={{ cursor: "pointer" }}>🏢 Công ty</span>
          <span style={{ cursor: "pointer" }}>💼 Cẩm nang việc làm</span>
          <span style={{ cursor: "pointer" }}>📄 Mẫu CV xin việc</span>
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
          <button
            style={{
              backgroundColor: "#4285f4",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Đăng nhập
          </button>
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
        {}
        <div
          style={{
            background: "linear-gradient(135deg, #4285f4 0%, #1a73e8 100%)",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "40px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "48px", margin: 0, fontWeight: "normal" }}>
              Xây dựng{" "}
              <span style={{ color: "#ffeb3b", fontWeight: "bold" }}>
                Sự Nghiệp
              </span>
            </h1>
            <h2
              style={{
                fontSize: "42px",
                margin: "10px 0",
                fontWeight: "normal",
              }}
            >
              <span style={{ color: "#4caf50", fontWeight: "bold" }}>
                thành công
              </span>{" "}
              cùng
            </h2>
            <h2
              style={{
                fontSize: "42px",
                margin: "10px 0",
                fontWeight: "normal",
              }}
            >
              Nhom6.vn
            </h2>
          </div>
        </div>

        {}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "30px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "450px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Người tìm việc đăng ký
            </h2>

            {}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <button
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px",
                    border: "2px solid #4285f4",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#4285f4",
                    boxShadow: "0 2px 8px rgba(66,133,244,0.08)",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#e3f0fd")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#fff")
                  }
                >
                  <span
                    style={{
                      color: "#4285f4",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    G
                  </span>
                  Google
                </button>
                <button
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px",
                    border: "2px solid #0077b5",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#0077b5",
                    boxShadow: "0 2px 8px rgba(0,119,181,0.08)",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#e6f4fa")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#fff")
                  }
                >
                  <span
                    style={{
                      color: "#0077b5",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    in
                  </span>
                  LinkedIn
                </button>
              </div>

              <div
                style={{
                  textAlign: "center",
                  margin: "15px 0",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "0 15px",
                    color: "#666",
                    fontSize: "14px",
                  }}
                >
                  hoặc
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "1px",
                    backgroundColor: "#ddd",
                    zIndex: -1,
                  }}
                ></div>
              </div>
            </div>

            <div>
              {}
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ và tên"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    backgroundColor: "#e9ecef",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                  required
                />
                <small
                  style={{
                    color: "#666",
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  Hãy dùng tên thật. Nhà tuyển dụng có thể thấy tên bạn khi xem
                  hồ sơ
                </small>
              </div>

              {}
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    backgroundColor: "#e9ecef",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </div>

              {}
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <input
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    backgroundColor: "#e9ecef",
                    fontSize: "14px",
                  }}
                  required
                />
                <input
                  type={formData.showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    backgroundColor: "#e9ecef",
                    fontSize: "14px",
                  }}
                  required
                />
              </div>

              {}
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="showPassword"
                    name="showPassword"
                    checked={formData.showPassword}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="showPassword"
                    style={{
                      color: "#333",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Hiển thị mật khẩu
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="receiveJobAlerts"
                    name="receiveJobAlerts"
                    checked={formData.receiveJobAlerts}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="receiveJobAlerts"
                    style={{
                      color: "#333",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Nhận bản tin việc làm
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "15px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleCheckboxChange}
                    style={{ marginTop: "2px" }}
                    required
                  />
                  <label
                    htmlFor="agreeToTerms"
                    style={{
                      color: "#333",
                      fontSize: "14px",
                      cursor: "pointer",
                      lineHeight: "1.4",
                    }}
                  >
                    Tôi đồng ý với{" "}
                    <a
                      href="#"
                      style={{ color: "#4285f4", textDecoration: "none" }}
                    >
                      điều khoản sử dụng
                    </a>{" "}
                    và cung cấp thông tin dữ liệu cá nhân, đồng thời đã đọc và
                    đồng ý với{" "}
                    <a
                      href="#"
                      style={{ color: "#4285f4", textDecoration: "none" }}
                    >
                      Thoả thuận sử dụng
                    </a>{" "}
                    và{" "}
                    <a
                      href="#"
                      style={{ color: "#4285f4", textDecoration: "none" }}
                    >
                      Quy định bảo mật
                    </a>{" "}
                    của Nhom6.
                  </label>
                </div>
              </div>

              {}
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#4285f4",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "100%",
                  marginBottom: "15px",
                }}
              >
                Đăng ký tài khoản người tìm việc
              </button>
            </div>

            {}
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#666", fontSize: "14px" }}>
                Bạn là nhà tuyển dụng?{" "}
              </span>
              <a
                href="#"
                style={{
                  color: "#4285f4",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Đăng ký tài khoản nhà tuyển dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerRegister;
