import { useEffect, useRef } from "react";
import classes from "./CirclesDiv.module.css";

export default function CirclesDiv(props) {
  function onDivClickHandler(divID, e) {
    e.stopPropagation();
    props.onClick(divID);
    if (divID === "c1") {
      triangle1.current.classList.add(classes.visible);
      triangle2.current.classList.remove(classes.visible);
      triangle3.current.classList.remove(classes.visible);
    }
    if (divID === "c2") {
      triangle1.current.classList.remove(classes.visible);
      triangle2.current.classList.add(classes.visible);
      triangle3.current.classList.remove(classes.visible);
    }
    if (divID === "c3") {
      triangle1.current.classList.remove(classes.visible);
      triangle2.current.classList.remove(classes.visible);
      triangle3.current.classList.add(classes.visible);
    }
  }

  function hideAllArrows() {
    triangle1.current.classList.remove(classes.visible);
    triangle2.current.classList.remove(classes.visible);
    triangle3.current.classList.remove(classes.visible);
  }

  useEffect(() => {
    hideAllArrows();
  }, [props.hideArrows]);

  const triangle1 = useRef();
  const triangle2 = useRef();
  const triangle3 = useRef();

  return (
    <div className={classes.circlesDiv} onClick={(e) => e.stopPropagation()}>
      <div className={classes.section}>
        <div
          className={classes.circle}
          onClick={onDivClickHandler.bind(null, "c1")}
        >
          <img
            id={classes.descimg1}
            alt="descimg1"
            src={require("../images/descimg1.png")}
            draggable="false"
          />
        </div>
        <p className={classes.circleDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco l
        </p>
        <div
          className={`${classes.triangle} ${classes.triangle1}`}
          ref={triangle1}
        ></div>
      </div>
      <div className={classes.section}>
        <div
          className={classes.circle}
          onClick={onDivClickHandler.bind(null, "c2")}
        >
          <img
            id={classes.descimg2}
            alt="descimg2"
            src={require("../images/descimg2.png")}
            draggable="false"
          />
        </div>
        <p className={classes.circleDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco l
        </p>
        <div
          className={`${classes.triangle} ${classes.triangle2}`}
          ref={triangle2}
        ></div>
      </div>
      <div className={classes.section}>
        <div
          className={classes.circle}
          onClick={onDivClickHandler.bind(null, "c3")}
        >
          <img
            id={classes.descimg3}
            alt="descimg3"
            src={require("../images/descimg3.png")}
            draggable="false"
          />
        </div>
        <p className={classes.circleDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco l
        </p>
        <div
          className={`${classes.triangle} ${classes.triangle3}`}
          ref={triangle3}
        ></div>
      </div>
    </div>
  );
}
