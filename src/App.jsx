import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import Layout from "./component/Layout/Layout";
import Header from "./component/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Candidate from "./pages/Candidate/Candidate";
import JobDetail from "./pages/JobDetail/JobDetail";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ProfileManagement from "./pages/ProfileManagement/ProfileManagement";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'candidate', Component: Candidate },
      { path: 'job-detail', Component: JobDetail },
      { path: 'register', Component: Register },
      { path: 'login', Component: Login },
      { path: 'quan-li-ho-so', Component: ProfileManagement }, 
    ]
  },
  {
    path: "/search",
    Component: Search,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
