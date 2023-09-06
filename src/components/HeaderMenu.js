import classes from "./HeaderMenu.module.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function HeaderMenu(props) {
  const menu = useRef();
  const ul = useRef();

  const cheCosaFacciamo = document.getElementById("cheCosaFacciamo");
  const chiSiamo = document.getElementById("chiSiamo");
  const DoveSiamo = document.getElementById("doveSiamo");

  function clickHandler(event, sectionId) {
    if (!(event.target === menu.current || event.target === ul.current)) {
      props.onLinkClick();
      if (sectionId === "s1") {
        cheCosaFacciamo.scrollIntoView(true);
      } else if (sectionId === "s2") {
        chiSiamo.scrollIntoView(true);
      } else if (sectionId === "s3") {
        DoveSiamo.scrollIntoView(true);
      }
    }
  }

  return (
    <AnimatePresence>
      {props.isNavOpen && (
        <>
          <motion.div
            className={classes.backdrop}
            onClick={clickHandler}
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
            <div className={classes.x} onClick={clickHandler}>
              &#x2715;
            </div>
            <ul className={classes.list} ref={ul}>
              <li onClick={(event) => clickHandler(event, "s1")}>
                CHE COSA FACCIAMO?
              </li>
              <li onClick={(event) => clickHandler(event, "s2")}>CHI SIAMO</li>
              <li onClick={(event) => clickHandler(event, "s3")}>DOVE SIAMO</li>
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
export default HeaderMenu;
