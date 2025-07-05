import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Layout from "./component/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Candidate from "./pages/Candidate/Candidate";
import JobDetail from "./pages/JobDetail/JobDetail";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
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
      ]
    },
    {
      path: "/Search",
      Component: Search,
    },

  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
