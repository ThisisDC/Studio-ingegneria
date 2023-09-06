import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import HeaderMenu from "../components/HeaderMenu";
import LoadingOverlay from "../components/LoadingOverlay";
import { useContext } from "react";
import { globalContext } from "../App";

function RootLayout() {
  const context = useContext(globalContext);
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimerCompleted(true), 2000);
  }, []);

  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const onMenuClickHandler = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const isAppReady = context.value.ready && timerCompleted;

  return (
    <>
      <LoadingOverlay isAppReady={isAppReady} />
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
