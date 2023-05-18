import { useState } from "react";
import classes from "./Home.module.css";
import { useRef } from "react";
import Slideshow from "../components/Slideshow";

function HomePage() {
  const emailRef = useRef();
  const [isBoxChecked, setBoxChecked] = useState(false);



  const onSubmitNewsletter = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
  };

  const onCheckedBox = () => {
    setBoxChecked(!isBoxChecked);
  };

  return (
    <>
      <div className={classes.homebody}>
        <Slideshow />
        <div className={classes.descriptionDiv}>
          <h1>Che cosa facciamo?</h1>
          <div className={classes.circlesDiv}>
            <div className={classes.section}>
              <div className={classes.circle}>
              <img
                id={classes.descimg1}
                alt="descimg1"
                src={require("../images/descimg1.png")}
                draggable="false"
              />
              </div>
              <p className={classes.circleDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco l
              </p>
            </div>
            <div className={classes.section}>
              <div className={classes.circle}>
              <img
                id={classes.descimg2}
                alt="descimg2"
                src={require("../images/descimg2.png")}
                draggable="false"
              />
              </div>
              </div>
              <p className={classes.circleDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco l
              </p>
            </div>
            <div className={classes.section}>
              <div className={classes.circle}>
              <img
                id={classes.descimg3}
                alt="descimg3"
                src={require("../images/descimg3.png")}
                draggable="false"
              />
              </div>
              <p className={classes.circleDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco l
              </p>
            </div>
          </div>
          <div className={classes.newsLetterSection}>
            <form onSubmit={onSubmitNewsletter}>
              <h1>Iscriviti alla nostra Newsletter</h1>
              <input
                type="text"
                placeholder="Email adress"
                name="name"
                ref={emailRef}
                required
              ></input>
              <div className={classes.checkboxSection}>
                <p>Voglio rimanere aggiornato tramite email</p>
                <input
                  type="checkbox"
                  name="subscribe"
                  onChange={onCheckedBox}
                  required
                ></input>
              </div>
              <input type="submit" value="Iscriviti"></input>
            </form>
          </div>
        </div>
    </>
  );
}

export default HomePage;
