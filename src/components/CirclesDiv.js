import { useEffect, useRef } from "react";
import classes from "./CirclesDiv.module.css";

export default function CirclesDiv(props) {
  function onDivClickHandler(divID, e) {
    e.stopPropagation();
    props.onClick(divID);
    if (divID === "c1") {
      triangle1.current.classList.add(classes.visible);
      triangle2.current.classList.remove(classes.visible);
      triangle3.current.classList.remove(classes.visible);
    }
    if (divID === "c2") {
      triangle1.current.classList.remove(classes.visible);
      triangle2.current.classList.add(classes.visible);
      triangle3.current.classList.remove(classes.visible);
    }
    if (divID === "c3") {
      triangle1.current.classList.remove(classes.visible);
      triangle2.current.classList.remove(classes.visible);
      triangle3.current.classList.add(classes.visible);
    }
  }

  function hideAllArrows() {
    triangle1.current.classList.remove(classes.visible);
    triangle2.current.classList.remove(classes.visible);
    triangle3.current.classList.remove(classes.visible);
  }

  useEffect(() => {
    hideAllArrows();
  }, [props.hideArrows]);

  const triangle1 = useRef();
  const triangle2 = useRef();
  const triangle3 = useRef();

  return (
    <div className={classes.circlesDiv} onClick={(e) => e.stopPropagation()}>
      <div className={classes.section}>
        <div
          className={classes.circle}
          onClick={
            window.innerWidth >= 1200
              ? onDivClickHandler.bind(null, "c1")
              : null
          }
        >
          <img
            id={classes.descimg1}
            alt="descimg1"
            src={require("../images/descimg1.png")}
            draggable="false"
          />
        </div>
        <p className={classes.circleDesc}>
          Lo Studio esegue la progettazione e la direzione lavori per la
          realizzazione di impianti fotovoltaici. Dal 2008 sono stati progettati
          oltre 1.000 impianti sia a terra che su edificio. Sono stati
          realizzati impianti di potenza fino a 1 MWp sia in conto energia che
          in scambio sul posto e ritiro dedicato. Oltre alle norme
          impiantistiche, particolare attenzione viene dedicata alle norme di
          antincendio per garantire la massima sicurezza in fase realizzativa e
          di gestione.
        </p>
        <div
          className={`${classes.triangle} ${classes.triangle1}`}
          ref={triangle1}
        ></div>
      </div>
      <div className={classes.section}>
        <div
          className={classes.circle}
          onClick={
            window.innerWidth >= 1200
              ? onDivClickHandler.bind(null, "c2")
              : null
          }
        >
          <img
            id={classes.descimg2}
            alt="descimg2"
            src={require("../images/descimg2.png")}
            draggable="false"
          />
        </div>
        <p className={classes.circleDesc}>
          Efficientamento energetico edifici civili. Lo studio esegue l’analisi
          energetica dell’edificio per definire le migliori strategie per
          ridurre i consumi energetici. Queste possono essere l'isolamento
          termico dell’involucro, la sostituzione degli impianti con soluzioni
          più efficienti come generatori ibridi, pompe di calore, pannelli
          solari termici e fotovoltaici. Tutte le soluzioni beneficeranno degli
          incentivi statali per l'efficienza energetica.
        </p>
        <div
          className={`${classes.triangle} ${classes.triangle2}`}
          ref={triangle2}
        ></div>
      </div>
      <div className={classes.section}>
        <div
          className={classes.circle}
          onClick={
            window.innerWidth >= 1200
              ? onDivClickHandler.bind(null, "c3")
              : null
          }
        >
          <img
            id={classes.descimg3}
            alt="descimg3"
            src={require("../images/descimg3.png")}
            draggable="false"
          />
        </div>
        <p className={classes.circleDesc}>
          Efficientamento energetico dei consumi delle attività artigianali ed
          industriali. Analisi dei consumi energetici (elettrici e termici)
          ricavando i dati dalle fatture di energia oppure tramite sistemi di
          monitoraggio dedicati. Questi permetteranno un’analisi approfondita
          dell’andamento dei consumi per definire la migliore strategia per la
          loro riduzione.
        </p>
        <div
          className={`${classes.triangle} ${classes.triangle3}`}
          ref={triangle3}
        ></div>
      </div>
    </div>
  );
}
