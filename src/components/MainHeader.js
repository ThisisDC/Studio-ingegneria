import { useState } from "react";
import Classes from "./MainHeader.module.css";
import HeaderMenu from "./HeaderMenu";

function MainHeader() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const onLogoClickHandler = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <header className={Classes.header}>
      <div className={Classes.logocontainer}>
        <div className={Classes.logo} onClick={onLogoClickHandler}>
          <img alt="logo" src={require("../images/logo.png")} />
        </div>
        {isNavBarOpen && <HeaderMenu/>}

      </div>
    </header>
  );
}
export default MainHeader;
