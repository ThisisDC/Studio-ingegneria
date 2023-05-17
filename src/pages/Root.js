import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import HeaderMenu from "../components/HeaderMenu";
import LoadingOverlay from "../components/LoadingOverlay";

function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const onMenuClickHandler = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const animationEndedHandler = () => {
    setIsLoading(false);
  };
  return (
    <>
      <LoadingOverlay
        isLoading={isLoading}
        setAnimationEnded={animationEndedHandler}
      />
      <HeaderMenu onLinkClick={onMenuClickHandler} isNavOpen={isNavBarOpen} />
      <MainHeader
        onMenuButtonClick={onMenuClickHandler}
        isNavOpen={isNavBarOpen}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
