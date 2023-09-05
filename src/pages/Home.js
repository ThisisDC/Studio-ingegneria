import { useRef, useState } from "react";
import classes from "./Home.module.css";
import Slideshow from "../components/Slideshow";
import SocialNav from "../components/SocialNav";
import CirclesDiv from "../components/CirclesDiv";

function HomePage({ imagesLoaded }) {
  // mobile

  const cheCosaFacciamoDiv = useRef();
  const chiSiamoDiv = useRef();
  const doveSiamoDiv = useRef();

  // desktop

  const [isFirstCircleOpen, setIsFirstCircleOpen] = useState(false);
  const [isSecondCircleOpen, setIsSecondCircleOpen] = useState(false);
  const [isThirdCircleOpen, setIsThirdCircleOpen] = useState(false);
  const [needArrowsToBeHided, setNeedArrowsToBeHided] = useState(false);

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const circleDivModal = useRef();
  const smallerDiv1 = useRef();
  const smallerDiv2 = useRef();

  function askToHideAllTheArrows() {
    setNeedArrowsToBeHided((oldState) => !oldState);
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

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className={classes.homebody}>
        <Slideshow imagesLoaded={imagesLoaded} />
        <div
          className={classes.descriptionDiv}
          ref={cheCosaFacciamoDiv}
          id="cheCosaFacciamo"
        >
          <h1>Che cosa facciamo?</h1>
          <CirclesDiv />
        </div>
        <div className={classes.chiSiamo} ref={chiSiamoDiv} id="chiSiamo">
          <h1>Chi siamo</h1>
          <p>
            Chi siamo Lo Studio Ingegneria Caldarigi Claudio si occupa di
            progettazione di impianti per l'efficienza energetica in edifici
            civili ed attività industriali. Lo Studio è situato in via Garibaldi
            n°40 in San Lorenzo in campo (PU).
          </p>
        </div>
        <div className={classes.doveSiamo} ref={doveSiamoDiv} id="doveSiamo">
          <h1>Dove siamo!</h1>
          <div className={classes.modalMaps}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.174240661532!2d12.941854312631982!3d43.60291357098421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132da8df71cc98a1%3A0x93120a7b1b181cd4!2sSTUDIO%20INGEGNERIA%20CALDARIGI%20CLAUDIO!5e0!3m2!1sit!2sit!4v1686069705582!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={classes.desktopView} onClick={desktopViewClickHandler}>
        <div className={classes.mouseIcon}>
          <div className={classes.scrollDowns}>
            <div className={classes.mousey}>
              <div className={classes.scroller}></div>
            </div>
          </div>
          <p>Scorri in basso</p>
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
                {isFirstCircleOpen && (
                  <div className={classes.descriptionDivModal}>
                    <span
                      class="material-symbols-outlined"
                      onClick={closeAllModals}
                    >
                      arrow_back
                    </span>
                    <h1>Titolo 1</h1>
                    <p>
                      Lo Studio esegue la progettazione e la direzione lavori
                      per la realizzazione di impianti fotovoltaici. Dal 2008
                      sono stati progettati oltre 1.000 impianti sia a terra che
                      su edificio. Sono stati realizzati impianti di potenza
                      fino a 1 MWp sia in conto energia che in scambio sul posto
                      e ritiro dedicato. Oltre alle norme impiantistiche,
                      particolare attenzione viene dedicata alle norme di
                      antincendio per garantire la massima sicurezza in fase
                      realizzativa e di gestione.
                    </p>
                  </div>
                )}
                {isSecondCircleOpen && (
                  <div className={classes.descriptionDivModal}>
                    <span
                      class="material-symbols-outlined"
                      onClick={closeAllModals}
                    >
                      arrow_back
                    </span>

                    <div className={classes.backButton}></div>
                    <h1>Titolo 2</h1>
                    <p>
                      Efficientamento energetico edifici civili. Lo studio
                      esegue l’analisi energetica dell’edificio per definire le
                      migliori strategie per ridurre i consumi energetici.
                      Queste possono essere l'isolamento termico dell’involucro,
                      la sostituzione degli impianti con soluzioni più
                      efficienti come generatori ibridi, pompe di calore,
                      pannelli solari termici e fotovoltaici. Tutte le soluzioni
                      beneficeranno degli incentivi statali per l'efficienza
                      energetica.
                    </p>
                  </div>
                )}
                {isThirdCircleOpen && (
                  <div className={classes.descriptionDivModal}>
                    <span
                      class="material-symbols-outlined"
                      onClick={closeAllModals}
                    >
                      arrow_back
                    </span>

                    <div className={classes.backButton}></div>

                    <h1>Titolo 3</h1>
                    <p>
                      Efficientamento energetico dei consumi delle attività
                      artigianali ed industriali. Analisi dei consumi energetici
                      (elettrici e termici) ricavando i dati dalle fatture di
                      energia oppure tramite sistemi di monitoraggio dedicati.
                      Questi permetteranno un’analisi approfondita
                      dell’andamento dei consumi per definire la migliore
                      strategia per la loro riduzione.
                    </p>
                  </div>
                )}
              </div>
              <div
                className={classes.smallerDiv1}
                ref={smallerDiv1}
                onClick={mapModalClickHandler}
              >
                {isMapOpen ? (
                  <>
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.174240661532!2d12.941854312631982!3d43.60291357098421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132da8df71cc98a1%3A0x93120a7b1b181cd4!2sSTUDIO%20INGEGNERIA%20CALDARIGI%20CLAUDIO!5e0!3m2!1sit!2sit!4v1686069705582!5m2!1sit!2sit"
                      width="400"
                      height="400"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </>
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
                      Lo Studio Ingegneria Caldarigi Claudio si occupa di
                      progettazione di impianti per l'efficienza energetica in
                      edifici civili ed attività industriali. Lo Studio è
                      situato in via Garibaldi n°40 in San Lorenzo in campo
                      (PU).
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
