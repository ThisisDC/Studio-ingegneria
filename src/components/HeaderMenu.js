import classes from "./HeaderMenu.module.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

function HeaderMenu(props) {
  const menu = useRef();
  const ul = useRef();

  function onNavCloseRequest(event) {
    if (event.target === menu.current || event.target === ul.current) return;
    props.onLinkClick();
  }

  const cssAnimationsTiming = {
    start: 300,
    exit: 300,
  };
  
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.isNavOpen}
      timeout={cssAnimationsTiming}
      classNames="fade-slide"
    >
      <div className={classes.backdrop} onClick={onNavCloseRequest}>
        <div className={classes.menu} ref={menu}>
          <div className={classes.x} onClick={onNavCloseRequest}>
            &#x2715;
          </div>
          <ul className={classes.list} ref={ul}>
            <NavLink to="/" onClick={onNavCloseRequest}>
              <li>HOME</li>
            </NavLink>
            <NavLink to="chi-siamo" onClick={onNavCloseRequest}>
              <li>CHI SIAMO</li>
            </NavLink>
            <NavLink to="progetti" onClick={onNavCloseRequest}>
              <li>PROGETTI</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
}
export default HeaderMenu;
