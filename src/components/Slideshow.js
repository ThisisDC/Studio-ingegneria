import { useCallback, useEffect, useState } from "react";
import classes from "./Slideshow.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import useIsMobile from "../util/useIsMobile";
import image1 from "../images/pale-eoliche.png";
import image2 from "../images/pompa-di-calore.jpg";
import image3 from "../images/dji_fly_20230521_182050_12_1684686059162_photo_optimized.jpg";
import { useContext } from "react";
import { globalContext } from "../App";

const images = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
];

export default function Slideshow() {
  const context = useContext(globalContext);

  const [imgsLoaded, setImgsLoaded] = useState(false);

  const setAppReady = useCallback(() => {
    context.setAppReady();
  }, []);

  useEffect(() => {
    if (imgsLoaded) {
      setAppReady();
    }
  }, [imgsLoaded, setAppReady]);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image.url);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  const slides = images.map((image, idx) => (
    <img
      className={classes.imagecontainer}
      key={idx}
      alt={idx}
      src={image.url}
    ></img>
  ));

  const isMobile = useIsMobile();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (0 <= currentSlide && currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={classes.slideShow}>
      <div className={classes.imageFrame}>
        <AnimatePresence mode="popLayout">
          <motion.div
            className={classes.imageFrame}
            key={currentSlide}
            initial={isMobile ? { x: "100%" } : { opacity: 0 }}
            animate={
              isMobile
                ? { x: 0 }
                : {
                    opacity: 1,
                    transition: { duration: 2, ease: "easeOut" },
                  }
            }
            exit={isMobile ? { x: "-100%" } : { opacity: 0 }}
            transition={
              isMobile && {
                x: { type: "spring", stiffness: 150, damping: 20 },
                opacity: { duration: 0.2 },
              }
            }
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
