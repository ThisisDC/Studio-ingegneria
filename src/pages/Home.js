import classes from './Home.module.css'

function HomePage() {
  return (
    <div>
      <div className={classes.imagecontainer}>
        <img alt="Pannelli solari" src={require("../images/pannelli.png")}/>
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;
