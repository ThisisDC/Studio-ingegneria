import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MainHeader(props) {
  const onMenuClickHandler = () => {
    props.onMenuButtonClick();
  };

  return (
    <>
      <div className={classes.contactsnav}>
        <p className={classes.numberMail}>
          +39 328 178 9139 | caldarigic@gmail.com
        </p>
        <div className={classes.socialLinks}>
          <a
            id={classes.IconFacebook}
            href="https://www.facebook.com/"
            className={classes.link}
          >
            <div id={classes.LinkFacebook} className="fa fa-facebook"></div>
          </a>
          <a
            id={classes.IconInstagram}
            href="https://www.instagram.com/"
            className={classes.link}
          >
            <div id={classes.LinkInstagram} className="fa fa-instagram"></div>
          </a>
          <a
            id={classes.IconTwitter}
            href="https://www.twitter.com/"
            className={classes.link}
          >
            <div id={classes.LinkTwitter} className="fa fa-twitter"></div>
          </a>
          <a
            id={classes.IconGoogle}
            href="https://www.google.com/"
            className={classes.link}
          >
            <div id={classes.LinkGoogle} className="fa fa-google"></div>
          </a>
          <a
            id={classes.IconSkype}
            href="https://www.skype.com/"
            className={classes.link}
          >
            <div id={classes.LinkSkype} className="fa fa-skype"></div>
          </a>
        </div>
      </div>
      <header>
        <div className={classes.menuIcon} onClick={onMenuClickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.logocontainer}>
          <Link
            to="/"
            onClick={() => props.isNavBarOpen && onMenuClickHandler()}
          >
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
      </header>
    </>
  );
}
export default MainHeader;
