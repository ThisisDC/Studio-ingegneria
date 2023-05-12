import classes from "./HeaderMenu.module.css";
import { NavLink } from "react-router-dom";

function HeaderMenu(props) {
  function onNavLinkClick() {
    props.onLinkClick();
  }

  return (
    <>
      <div className={classes.menu}>
        <div className={classes.x} onClick={onNavLinkClick}>
          <img src={require("../images/298889_x_icon.png")} alt="close" />
        </div>

        <ul className={classes.list}>
          <NavLink to="/" onClick={onNavLinkClick}>
            <li>Home</li>
          </NavLink>
          <NavLink to="chi-siamo" onClick={onNavLinkClick}>
            <li>Chi siamo</li>
          </NavLink>
          <NavLink to="progetti" onClick={onNavLinkClick}>
            <li>Progetti</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
export default HeaderMenu;
