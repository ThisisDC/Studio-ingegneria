import classes from "./Home.module.css";

function HomePage() {
  const buttonClickHandler = () => {};

  return (
    <div>
        {/* <img
          alt="Pannelli solari"
          className={classes.img}
          src={require("../images/pannelli.png")}
        /> */}
        <div style={{backgroundImage: `url(${require("../images/pannelli.png")})`}} className={classes.imagecontainer}>
          <div className={classes.imagetext}>
            Il sole ti può fare risparmiare tantissimi soldi e anche abbronzarti!
          </div>
          <button onClick={buttonClickHandler} className={classes.imagebutton}>
            Maggiori informazioni!
          </button>
        </div>
        
      <div className={classes.descriptionDiv}></div>
    </div>
  );
}

export default HomePage;
