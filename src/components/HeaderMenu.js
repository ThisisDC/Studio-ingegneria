import classes from "./HeaderMenu.module.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function HeaderMenu(props) {
  const menu = useRef();
  const ul = useRef();

  function onNavCloseRequest(event) {
    if (event.target === menu.current || event.target === ul.current) return;
    props.onLinkClick();
  }

  return (
    <AnimatePresence>
      {props.isNavOpen && (
        <>
          <motion.div
            className={classes.backdrop}
            onClick={onNavCloseRequest}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <motion.nav
            className={classes.menu}
            ref={menu}
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: "0" }}
            exit={{ opacity: 0, translateX: "-100%" }}
          >
            <div className={classes.x} onClick={onNavCloseRequest}>
              &#x2715;
            </div>
            <ul className={classes.list} ref={ul}>
            <li to="chi-siamo" onClick={onNavCloseRequest}>
              CHE COSA FACCIAMO?
             </li>
              <li to="progetti" onClick={onNavCloseRequest}>
                CHI SIAMO
              </li>
              <li to="chi-siamo" onClick={onNavCloseRequest}>
                DOVE SIAMO
              </li>
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
export default HeaderMenu;
