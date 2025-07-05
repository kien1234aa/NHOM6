import { useState } from "react";
import chat from "../../assets/chat.png";
import co from "../../assets/co.png";
import logo from "../../assets/logo.png";

const JobSeekerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      showPassword: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa" }}
    >
      {}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9999,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #1976d2",
          background:
            "linear-gradient(90deg,rgb(27, 208, 187) 0%, #42a5f5 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo Duy Tân"
            style={{
              height: "44px",
              width: "auto",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              padding: "4px 10px",
              marginRight: "12px",
              display: "block",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}></div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            fontSize: "15px",
            color: "#fff",
          }}
        >
          <span>🔍 Ngành nghề/Địa điểm</span>
          <span>🏢 Công ty</span>
          <span>💼 Cẩm nang việc làm</span>
          <span>📄 Mẫu CV xin việc</span>
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
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              padding: "10px 22px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(25,118,210,0.12)",
            }}
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {}
      <div style={{ display: "flex", minHeight: "100vh" }}>
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
              backgroundColor: "#f5f5f5",
              padding: "40px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "400px",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "30px",
                color: "#333",
                fontSize: "20px",
              }}
            >
              Người tìm việc đăng nhập
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "20px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#e0e0e0",
                  fontSize: "14px",
                }}
                required
              />
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "20px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#e0e0e0",
                  fontSize: "14px",
                }}
                required
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.showPassword}
                    onChange={handleCheckboxChange}
                  />
                  Hiển thị mật khẩu
                </label>
                <a
                  href="#"
                  style={{
                    fontSize: "14px",
                    color: "#4285f4",
                    textDecoration: "none",
                  }}
                >
                  Quên mật khẩu?
                </a>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#4285f4",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "16px",
                  width: "100%",
                }}
              >
                Đăng nhập
              </button>
            </form>

            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <p style={{ color: "#666", marginBottom: "15px" }}>Hoặc</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {}
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "12px 20px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#fff")
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
                  Đăng nhập bằng Google
                </button>

                {}
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "12px 20px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#fff")
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
                  Đăng nhập bằng LinkedIn
                </button>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <span>Chưa có tài khoản? </span>
              <a href="#" style={{ color: "#4285f4", textDecoration: "none" }}>
                Đăng ký
              </a>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#4285f4",
              color: "white",
              padding: "15px 30px",
              borderRadius: "25px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <span>Bạn là nhà tuyển dụng? </span>
            <a href="#" style={{ color: "white", textDecoration: "underline" }}>
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerLogin;
