import { useEffect, useState } from "react";
import classes from "./Slideshow.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Slideshow({ imagesLoaded }) {
  const [areImagesLoaded, setAreImagesLoaded] = useState({
    image1: false,
    image2: false,
    image3: false,
  });

  function setImageLoaded(imageId) {
    const newState = [...areImagesLoaded];
    newState[imageId] = true;
    setAreImagesLoaded(newState);
    if (
      areImagesLoaded.image1 &&
      areImagesLoaded.image2 &&
      areImagesLoaded.image3
    ) {
      imagesLoaded();
    }
  }

  const slides = [
    <div
      className={classes.imagecontainer}
      id={classes.slide0}
      onLoad={() => setImageLoaded("image1")}
    ></div>,
    <div
      className={classes.imagecontainer}
      id={classes.slide1}
      onLoad={() => setImageLoaded("image2")}
    ></div>,
    <div
      className={classes.imagecontainer}
      id={classes.slide2}
      onLoad={() => setImageLoaded("image3")}
    ></div>,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds((seconds) => seconds + 1);
      if (0 <= currentSlide && currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // const MoreButtonClickHandler = () => {};

  return (
    <div className={classes.slideShow}>
      <div className={classes.imageFrame}>
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className={classes.imageFrame}
            key={currentSlide}
            transition={{
              x: { duration: 1.5 },
            }}
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
        <div className={classes.paragraph}>
          <div className={classes.imagetext}>
            Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
            <Link to="/progetti">
              {/* <motion.button
                onClick={MoreButtonClickHandler}
                className={classes.imagebutton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Scopri di più!
              </motion.button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
