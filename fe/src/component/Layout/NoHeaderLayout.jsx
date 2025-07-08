import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const NoHeaderLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default NoHeaderLayout;