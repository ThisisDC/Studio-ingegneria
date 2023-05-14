import classes from "./LoadingOverlay.module.css";

const LoadingOverlay = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.block}>
        <div className={classes.logo}>
          <img
            alt="logo"
            src={require("../images/logo.png")}
            draggable="false"
          />
        </div>
        <p>STUDIO INGEGNERIA CALDARIGI</p>
        <div className={classes.spin}></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
