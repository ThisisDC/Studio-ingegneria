import { useState } from "react";
import classes from "./Home.module.css";
import { useRef } from "react";

function HomePage() {
  const emailRef = useRef()
  const [isBoxChecked, setBoxChecked] = useState(false);

  const onSubmitNewsletter = (event) => {
    event.preventDefault()
    const email = emailRef.current.value;
    console.log(email)
  };

  const infoButtonClickHandler = () => {};

  const onCheckedBox = () => {
    setBoxChecked(!isBoxChecked);
  };

  return (
    <div className={classes.homebody}>
      {/* <img
          alt="Pannelli solari"
          className={classes.img}
          src={require("../images/pannelli.png")}
        /> */}
      <div className={classes.imagecontainer}>
        <div className={classes.imagetext}>
          Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
          <button
            onClick={infoButtonClickHandler}
            className={classes.imagebutton}
          >
            Maggiori informazioni!
          </button>
        </div>
      </div>
      <div className={classes.descriptionDiv}>
        <h1>Che cosa facciamo?</h1>
        <div className={classes.circlesDiv}>
          <div className={classes.section}>
            <div className={classes.circle}></div>
            <p className={classes.circleDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
            </p>
          </div>
          <div className={classes.section}>
            <div className={classes.circle}></div>
            <p className={classes.circleDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
            </p>
          </div>
          <div className={classes.section}>
            <div className={classes.circle}></div>
            <p className={classes.circleDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
            </p>
          </div>
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
  );
}

export default HomePage;
