import { useRef, useState, useEffect } from "react";
import classes from "./Home.module.css";
import Slideshow from "../components/Slideshow";
import SocialNav from "../components/SocialNav";
import CirclesDiv from "../components/CirclesDiv";

function HomePage() {
  const [currentNewsletterInputValue, setCurrentNewsletterInputValue] =
    useState("");

  const [isFirstCircleOpen, setIsFirstCircleOpen] = useState(false);
  const [isSecondCircleOpen, setIsSecondCircleOpen] = useState(false);
  const [isThirdCircleOpen, setIsThirdCircleOpen] = useState(false);
  const [needArrowsToBeHided, setNeedArrowsToBeHided] = useState(false);

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const [currentScrollStatus, setcurrentScrollStatus] = useState(0.8);

  const circleDivModal = useRef();
  const smallerDiv1 = useRef();
  const smallerDiv2 = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  function scrollHandler() {
    if (!(window.innerWidth <= 1200)) {
      let h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      let scrollValue =
        0.8 - (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);

      getScrollPercent(scrollValue);
    } else {
      getScrollPercent(0.8);
    }
  }

  function getScrollPercent(opacityValue) {
    setcurrentScrollStatus(() => opacityValue);
  }

  function askToHideAllTheArrows() {
    setNeedArrowsToBeHided(Math.random());
  }

  const closeAllModals = () => {
    setIsFirstCircleOpen(false);
    setIsSecondCircleOpen(false);
    setIsThirdCircleOpen(false);
    askToHideAllTheArrows();
    circleDivModal.current.classList.remove(classes.modalOpen);

    setIsMapOpen(false);
    setIsBioOpen(false);
    smallerDiv1.current.classList.remove(classes.modalOpen);
    smallerDiv2.current.classList.remove(classes.modalOpen);
    smallerDiv2.current.style.position = "static";
    smallerDiv1.current.style.position = "static";
  };

  const circlesDivClickHandler = (circleClicked) => {
    circleDivModal.current.classList.add(classes.modalOpen);
    if (circleClicked === "c1") {
      setIsFirstCircleOpen(true);
      setIsSecondCircleOpen(false);
      setIsThirdCircleOpen(false);
    } else if (circleClicked === "c2") {
      setIsFirstCircleOpen(false);
      setIsSecondCircleOpen(true);
      setIsThirdCircleOpen(false);
    } else if (circleClicked === "c3") {
      setIsFirstCircleOpen(false);
      setIsSecondCircleOpen(false);
      setIsThirdCircleOpen(true);
    }
  };

  const mapModalClickHandler = (event) => {
    setIsBioOpen(false);
    setIsMapOpen(true);
    smallerDiv1.current.classList.add(classes.modalOpen);
    event.stopPropagation();
    smallerDiv1.current.style.position = "absolute";
    smallerDiv2.current.style.position = "absolute";
  };

  const bioModalClickHandler = (event) => {
    setIsMapOpen(false);
    setIsBioOpen(true);
    smallerDiv2.current.classList.add(classes.modalOpen);
    event.stopPropagation();
    smallerDiv1.current.style.position = "absolute";
    smallerDiv2.current.style.position = "absolute";
  };

  const backdropClickHandler = () => {
    closeAllModals();
  };

  const BackdropOrScrollCondition =
    isMapOpen ||
    isBioOpen ||
    isFirstCircleOpen ||
    isSecondCircleOpen ||
    isThirdCircleOpen;

  const desktopViewClickHandler = (event) => {
    event.stopPropagation();

    if (BackdropOrScrollCondition) {
      backdropClickHandler();
    } else {
      scrollToTop();
    }
  };

  const modalDivClickHandler = (event) => {
    if (BackdropOrScrollCondition) {
      backdropClickHandler();
    } else {
      event.stopPropagation();
    }
  };

  const onChangeNewsletter = (event) => {
    setCurrentNewsletterInputValue(event.target.value);
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div
        className={classes.homebody}
        style={{
          filter: !(window.innerWidth <= 1200)
            ? `blur(${(0.8 * 4 - currentScrollStatus * 4) / 2}px)`
            : "none",
        }}
      >
        <Slideshow />
        <div className={classes.descriptionDiv}>
          <h1>Che cosa facciamo?</h1>
          <CirclesDiv />
        </div>
        <div className={classes.chiSiamo}>

        </div>
        <div className={classes.doveSiamo}>

        </div>
      </div>

      <div className={classes.desktopView} onClick={desktopViewClickHandler}>
        <div
          className={classes.mouseIcon}
          style={{ opacity: currentScrollStatus }}
        >
          <div className={classes.scrollDowns}>
            <div className={classes.mousey}>
              <div className={classes.scroller}></div>
            </div>
          </div>
          <p>Scorri in basso!</p>
        </div>
        <div className={classes.modalDiv} onClick={modalDivClickHandler}>
          <SocialNav />
          <div className={classes.modalContent}>
            <CirclesDiv
              onClick={circlesDivClickHandler}
              hideArrows={needArrowsToBeHided}
            />
            <div className={classes.smallerDivs}>
              <div
                className={classes.circleDivModal}
                ref={circleDivModal}
                onClick={(e) => e.stopPropagation()}
              >
                {isFirstCircleOpen && <div>1 paragrafo</div>}
                {isSecondCircleOpen && <div>2 paragrafo</div>}
                {isThirdCircleOpen && <div>3 paragrafo </div>}
              </div>
              <div
                className={classes.smallerDiv1}
                ref={smallerDiv1}
                onClick={mapModalClickHandler}
              >
                {isMapOpen ? (
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.174240661532!2d12.941854312631982!3d43.60291357098421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132da8df71cc98a1%3A0x93120a7b1b181cd4!2sSTUDIO%20INGEGNERIA%20CALDARIGI%20CLAUDIO!5e0!3m2!1sit!2sit!4v1686069705582!5m2!1sit!2sit"
                    width="400"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className={classes.positionPreview}>
                    <img
                      src={require("../images/positionImage.png")}
                      alt="position"
                    />
                    <p>Dove siamo</p>
                  </div>
                )}
              </div>
              <div
                className={classes.smallerDiv2}
                ref={smallerDiv2}
                onClick={bioModalClickHandler}
              >
                {isBioOpen ? (
                  <div className={classes.bioContent}>
                    <h2>Chi siamo</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                  </div>
                ) : (
                  <div className={classes.bioPreview}>
                    <img src={require("../images/bookImage.png")} alt="bio" />
                    <p>Chi siamo</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={classes.desktopFooter}>
            <div className={classes.elementFooterName}>+39 328 178 9139</div>
            <div className={classes.elementFooterName}>
              Studio ingegneria Caldarigi® 2023
            </div>
            <div className={classes.elementFooterName}>
              caldarigic@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
