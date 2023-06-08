import { useRef, useState, useEffect } from "react";
import classes from "./Home.module.css";
import Slideshow from "../components/Slideshow";
import SocialNav from "../components/SocialNav";
import CirclesDiv from "../components/CirclesDiv";

function HomePage() {
  const [currentNewsletterInputValue, setCurrentNewsletterInputValue] =
    useState("");

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const smallerDiv1 = useRef();
  const smallerDiv2 = useRef();

  const mapModalClickHandler = (event) => {
    setIsBioOpen(false);
    setIsMapOpen(true);
    smallerDiv1.current.classList.add(classes.modalOpen);
    event.stopPropagation();
  };

  const bioModalClickHandler = (event) => {
    setIsMapOpen(false);
    setIsBioOpen(true);
    smallerDiv2.current.classList.add(classes.modalOpen);
    event.stopPropagation();
  };

  const backdropClickHandler = () => {
    smallerDiv1.current.classList.remove(classes.modalOpen);
    smallerDiv2.current.classList.remove(classes.modalOpen);
    setIsBioOpen(false);
    setIsMapOpen(false);
  };

  // const [isAtTheTop, setIsAtTheTop] = useState(true);
  // const [isAtTheBottom, setIsAtTheBottom] = useState(false);

  const onSubmitNewsletter = (event) => {
    event.preventDefault();
    console.log(
      "added email to the newsletter: " + currentNewsletterInputValue
    );
    setCurrentNewsletterInputValue("");
  };

  const onChangeNewsletter = (event) => {
    setCurrentNewsletterInputValue(event.target.value);
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <>
      <div className={classes.homebody}>
        <Slideshow />
        <div className={classes.descriptionDiv}>
          <h1>Che cosa facciamo?</h1>
          <CirclesDiv />
        </div>
        <div className={classes.newsLetterSection}>
          <form onSubmit={onSubmitNewsletter}>
            <h1>Iscriviti alla nostra Newsletter</h1>
            <input
              type="text"
              placeholder="Email adress"
              name="name"
              value={currentNewsletterInputValue}
              onChange={onChangeNewsletter}
              required
            ></input>
            <div className={classes.checkboxSection}>
              <p>Voglio rimanere aggiornato tramite email</p>
              <input type="checkbox" name="subscribe" required></input>
            </div>
            <input type="submit" value="Iscriviti"></input>
          </form>
        </div>
      </div>
      <div className={classes.desktopView} onClick={backdropClickHandler}>
        <div className={classes.mouseIcon}>
          <div className={classes.scrollDowns}>
            <div className={classes.mousey}>
              <div className={classes.scroller}></div>
            </div>
          </div>
          <p>Scorri in basso!</p>
        </div>
        <div className={classes.modalDiv}>
          <SocialNav />
          <div className={classes.modalContent}>
            <CirclesDiv />
            <div className={classes.smallerDivs}>
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
                      ullamco lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam
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
            Studio ingegneria Caldarigi
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
