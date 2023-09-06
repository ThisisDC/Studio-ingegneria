import classes from "./LoadingOverlay.module.css";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingOverlay = (props) => {
  const controls = useAnimationControls();

  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    if (props.isAppReady) {
      controls.start({ opacity: 0, transition: { duration: 1 } });
      setTimeout(() => setShowOverlay(false), 1000);
    }
  }, [props.isAppReady, controls]);

  return (
    showOverlay && (
      <motion.div
        className={classes.overlay}
        initial={{ opacity: 1 }}
        animate={controls}
        transition={{ delay: 1.5, duration: 0.5 }}
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
