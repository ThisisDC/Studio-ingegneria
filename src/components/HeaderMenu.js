import classes from "./HeaderMenu.module.css";
import { NavLink } from "react-router-dom";

function HeaderMenu(props) {
  function onNavCloseRequestClick() {
    props.onLinkClick();
  }

  return (
    <div className={classes.backdrop} onClick={onNavCloseRequestClick}>
      <div className={classes.menu}>
        <div className={classes.x} onClick={onNavCloseRequestClick}>
          &#x2715;
        </div>
        <ul className={classes.list}>
          <NavLink to="/" onClick={onNavCloseRequestClick}>
            <li>HOME</li>
          </NavLink>
          <NavLink to="chi-siamo" onClick={onNavCloseRequestClick}>
            <li>CHI SIAMO</li>
          </NavLink>
          <NavLink to="progetti" onClick={onNavCloseRequestClick}>
            <li>PROGETTI</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
export default HeaderMenu;
