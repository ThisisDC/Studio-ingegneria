import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import HeaderMenu from "../components/HeaderMenu";

function RootLayout() {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  const onMenuClickHandler = () =>{
    setIsNavBarOpen(!isNavBarOpen)
  }
  return (
    <>
      {isNavBarOpen && <HeaderMenu onLinkClick={onMenuClickHandler}/>}
      <MainHeader onMenuButtonClick={onMenuClickHandler} isNavOpen={isNavBarOpen}/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default RootLayout;
