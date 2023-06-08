import classes from "./SocialNav.module.css";


export default function SocialNav(){
return(
    <div className={classes.socialLinks}>
    <a
      id={classes.IconFacebook}
      href="https://www.facebook.com/"
      className={classes.link}
    >
      <div id={classes.LinkFacebook} className="fa fa-facebook"></div>
    </a>
    <a
      id={classes.IconInstagram}
      href="https://www.instagram.com/"
      className={classes.link}
    >
      <div id={classes.LinkInstagram} className="fa fa-instagram"></div>
    </a>
    <a
      id={classes.IconTwitter}
      href="https://www.twitter.com/"
      className={classes.link}
    >
      <div id={classes.LinkTwitter} className="fa fa-twitter"></div>
    </a>
    <a
      id={classes.IconGoogle}
      href="https://www.google.com/"
      className={classes.link}
    >
      <div id={classes.LinkGoogle} className="fa fa-google"></div>
    </a>
    <a
      id={classes.IconSkype}
      href="https://www.skype.com/"
      className={classes.link}
    >
      <div id={classes.LinkSkype} className="fa fa-skype"></div>
    </a>
  </div>
    )

}