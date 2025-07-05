import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Layouts
import Layout from "./component/Layout/Layout";
import NoHeaderLayout from "./component/Layout/NoHeaderLayout";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Candidate from "./pages/Candidate/Candidate";
import JobDetail from "./pages/JobDetail/JobDetail";
import Register from "./pages/Register/Register";

import DangKyNguoiTimViec from "./pages/Login/DangKyNguoiTimViec";
import DangKyNhaTuyenDung from "./pages/Login/DangKyNhaTuyenDung";
import LoginNguoiTimViec from "./pages/Login/LoginNguoiTimViec";
import LoginNhaTuyenDung from "./pages/Login/LoginNhaTuyenDung";

import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <Search /> },
      { path: "candidate", element: <Candidate /> },
      { path: "job-detail", element: <JobDetail /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/auth",
    element: <NoHeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "loginnguoitimviec", element: <LoginNguoiTimViec /> },
      { path: "loginnhatuyendung", element: <LoginNhaTuyenDung /> },
      { path: "nguoitimviecdangky", element: <DangKyNguoiTimViec /> },
      { path: "nhatuyendungdangky", element: <DangKyNhaTuyenDung /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
