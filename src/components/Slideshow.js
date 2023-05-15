import { useRef, useEffect } from "react";
import classes from "./Slideshow.module.css";

let slideIndex = 1;
function SlideShowEngine(n) {
  let i;
  let slides = document.getElementsByClassName(classes.imagecontainer);
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

const plusSlide = (n) => {
  SlideShowEngine(slideIndex += n);
};

function Slideshow() {
  useEffect(() => SlideShowEngine(slideIndex), []);
  const intervalID = useRef();

  const slideButtonHandlerNext = () => {
    stopAutoSlider();
    plusSlide(1);
  };

  const slideButtonHandlerBack = () => {
    stopAutoSlider();
    plusSlide(-1);
  };

  useEffect(() => {
    intervalID.current = setInterval(() => {
      plusSlide(1);
    }, 4000);
    return () => clearInterval(intervalID.current);
  }, []);

  const stopAutoSlider = () => {
    clearInterval(intervalID.current);
  };

  const MoreButtonClickHandler = () => {};
  return (
    <div className={classes.slideShow}>
      <button
        id={classes.button1}
        onClick={slideButtonHandlerBack}
        className={classes.slideButton}
      >
        &#10094;
      </button>
      <div id={classes.slide1} className={`${classes.imagecontainer} ${classes.fade}`}>
        <div className={classes.imagetext}>
          Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
          <button
            onClick={MoreButtonClickHandler}
            className={classes.imagebutton}
          >
            Scopri di più!
          </button>
        </div>
      </div>
      <div id={`${classes.slide2}`} className={`${classes.imagecontainer}  ${classes.fade}`}>
        <div className={classes.imagetext}>
          Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
          <button
            onClick={MoreButtonClickHandler}
            className={classes.imagebutton}
          >
            Scopri di più!
          </button>
        </div>
      </div>
      <div id={`${classes.slide3}`} className={`${classes.imagecontainer}  ${classes.fade}`}>
        <div className={classes.imagetext}>
          Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
          <button
            onClick={MoreButtonClickHandler}
            className={classes.imagebutton}
          >
            Scopri di più!
          </button>
        </div>
      </div>
      <button
        id={classes.button2}
        onClick={slideButtonHandlerNext}
        className={classes.slideButton}
      >
        &#10095;
      </button>
    </div>
  );
}
export default Slideshow;
