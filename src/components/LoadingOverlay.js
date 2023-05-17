import classes from "./LoadingOverlay.module.css";
import { motion } from "framer-motion";

const LoadingOverlay = (props) => {
  const handleAnimationComplete = () => {
    props.setAnimationEnded();
  };

  return (
    props.isLoading && (
      <motion.div
        className={classes.overlay}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onAnimationComplete={handleAnimationComplete}
      >
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
      </motion.div>
    )
  );
};

export default LoadingOverlay;
