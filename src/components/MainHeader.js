import Classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

function MainHeader(props) {

  const onMenuClickHandler = () => {
    props.onMenuButtonClick()
  };

  return (
    <>
      <div className={Classes.contactsnav}>
        <p className={Classes.numberMail}>
          +39 328 178 9139 | caldarigic@gmail.com
        </p>
        <div className={Classes.socialLinks}>
          <a href="https://www.facebook.com/" className="fa fa-facebook"> </a>
          <a href="https://www.instagram.com/" className="fa fa-instagram"> </a>
          <a href="https://twitter.com/home" className="fa fa-twitter"> </a>
          <a href="https://www.google.com/" className="fa fa-google"> </a>
          <a href="https://www.skype.com/it/" className="fa fa-skype"> </a>

        </div>
      </div>
      <header>
      <div className={Classes.menuIcon} onClick={onMenuClickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <div className={Classes.logocontainer}>
          <Link to="/" onClick={() => props.isNavBarOpen && onMenuClickHandler()}>
            <div
              className={`${Classes.logo}`}
            >
              <img
                alt="logo"
                src={require("../images/logo.png")}
                draggable="false"
              />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
export default MainHeader;
