import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer/>
    </>
  );
}

export default RootLayout;
