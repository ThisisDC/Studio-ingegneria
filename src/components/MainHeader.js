import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import SocialNav from "./SocialNav";
import { useEffect, useState } from "react";

function MainHeader(props) {
  const [isButtonJustClicked, setIsButtonJustClicked] = useState(false);

  const onMenuClickHandler = () => {
    props.onMenuButtonClick();
  };

  useEffect(() => {
    setTimeout(() => setIsButtonJustClicked(false), 1100);
  }, [isButtonJustClicked]);

  function scrollToTop() {
    if (!isButtonJustClicked) {
      window.scrollTo(0, 0);
      setIsButtonJustClicked(true);
    }
  }

  function scrollToBottom() {
    if (!isButtonJustClicked) {
      window.scrollTo(0, window.innerHeight);
      setIsButtonJustClicked(true);
    }
  }

  return (
    <>
      <div className={classes.contactsnav}>
        <p className={classes.numberMail}>
          +39 328 178 9139 | caldarigic@gmail.com
        </p>
        <SocialNav />
      </div>
      <header>
        <div className={classes.menuIcon} onClick={onMenuClickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.logocontainer}>
          <Link to="/" onClick={scrollToTop}>
            <div className={`${classes.logo}`}>
              <img
                alt="logo"
                src={require("../images/logo.png")}
                draggable="false"
              />
              <p>STUDIO INGEGNERIA CALDARIGI</p>
            </div>
          </Link>
        </div>
        <ul className={classes.desktopmenu}>
          <li onClick={scrollToBottom}>DOVE SIAMO</li>
          <li onClick={scrollToBottom}>CHI SIAMO</li>
        </ul>
      </header>
    </>
  );
}
export default MainHeader;
