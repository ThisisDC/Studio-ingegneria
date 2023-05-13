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
            <li>HOME</li>
          </NavLink>
          <NavLink to="chi-siamo" onClick={onNavLinkClick}>
            <li>CHI SIAMO</li>
          </NavLink>
          <NavLink to="progetti" onClick={onNavLinkClick}>
            <li>PROGETTI</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
export default HeaderMenu;
