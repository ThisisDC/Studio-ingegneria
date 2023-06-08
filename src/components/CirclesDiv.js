import classes from "./CirclesDiv.module.css";

export default function CirclesDiv() {
  return (
    <div className={classes.circlesDiv}>
      <div className={classes.section}>
        <div className={classes.circle}>
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
      </div>
      <div className={classes.section}>
        <div className={classes.circle}>
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
      </div>
      <div className={classes.section}>
        <div className={classes.circle}>
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
      </div>
    </div>
  );
}
