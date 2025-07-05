import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "60px", color: "#dc3545" }}>404</h1>
      <h2 style={{ fontSize: "24px" }}>Không tìm thấy trang</h2>
      <p style={{ color: "#555" }}>
        {error?.statusText || error?.message || "Trang bạn tìm không tồn tại."}
      </p>
      <Link to="/" style={{ color: "#1976d2", textDecoration: "none", marginTop: "20px", display: "inline-block" }}>
        ⬅ Quay về trang chủ
      </Link>
    </div>
  );
};

export default ErrorPage;
