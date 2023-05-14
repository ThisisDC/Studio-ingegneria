import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import HeaderMenu from "../components/HeaderMenu";
import LoadingOverlay from "../components/LoadingOverlay";

function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  const onMenuClickHandler = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };
  return (
    <>
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <>
          {isNavBarOpen && <HeaderMenu onLinkClick={onMenuClickHandler} />}
          <MainHeader
            onMenuButtonClick={onMenuClickHandler}
            isNavOpen={isNavBarOpen}
          />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default RootLayout;
