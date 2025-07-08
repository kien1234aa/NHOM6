import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();

  const hiddenFooterPaths = [
    "/loginnhatuyendung",
    "/loginnguoitimviec",
    "/nhatuyendungdangky",
    "/nguoitimviecdangky"
  ];

  const hideFooter = hiddenFooterPaths.includes(location.pathname);

  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Outlet />
      </div>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;