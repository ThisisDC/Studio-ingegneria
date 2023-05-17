import { useRef, useEffect, useState } from "react";
import classes from "./Slideshow.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function App() {
  const slides = {
    0: <div className={classes.imagecontainer} id={classes.slide0}></div>,
    1: <div className={classes.imagecontainer} id={classes.slide1}></div>,
    2: <div className={classes.imagecontainer} id={classes.slide2}></div>,
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds((seconds) => seconds + 1);
      if (0 <= currentSlide && currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const MoreButtonClickHandler = () => {};

  return (
    <div className={classes.slideShow}>
      <div className={classes.imageFrame}>
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className={classes.imageFrame}
            key={currentSlide}
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
        <div className={classes.paragraph}>
          <div className={classes.imagetext}>
            Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
            <Link to="/progetti">
              <motion.button
                onClick={MoreButtonClickHandler}
                className={classes.imagebutton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Scopri di più!
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* // import { useRef, useEffect, useState } from "react";
// import classes from "./Slideshow.module.css";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";
// function Slideshow() {
//   useEffect(() => SlideShowEngine(slideIndex), []);
//   const intervalID = useRef();
//   const [activeSlide, setActiveSlide] = useState(0);
//   let slideIndex = 1;
//   function SlideShowEngine(n) {
//     let i;
//     let slides = document.getElementsByClassName(classes.imagecontainer);
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//   }
//   const plusSlide = (n) => {
//     SlideShowEngine((slideIndex += n));
//   };
//   const slideButtonHandlerNext = () => {
//     stopAutoSlider();
//     plusSlide(1);
//   };
//   const slideButtonHandlerBack = () => {
//     stopAutoSlider();
//     plusSlide(-1);
//   };
//   useEffect(() => {
//     intervalID.current = setInterval(() => {
//       plusSlide(1);
//     }, 4000);
//     return () => clearInterval(intervalID.current);
//   }, []);
//   const stopAutoSlider = () => {
//     clearInterval(intervalID.current);
//   };
//   const MoreButtonClickHandler = () => {};
//   return (
//     <div className={classes.slideShow}>
//       
//       <div className={classes.imageFrame}>
//         
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 0 }}
//           transition={{ duration: 4 }}
//           id={classes.slide1}
//           className={`${classes.imagecontainer} ${classes.fade}`}
//         ></motion.div>
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 0 }}
//           transition={{ duration: 4 }}
//           id={`${classes.slide2}`}
//           className={`${classes.imagecontainer}  ${classes.fade}`}
//         ></motion.div>
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 0 }}
//           transition={{ duration: 4 }}
//           id={`${classes.slide3}`}
//           className={`${classes.imagecontainer}  ${classes.fade}`}
//         ></motion.div>
//         <div className={classes.paragraph}>
//           
//           <div className={classes.imagetext}>
//             
//             Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
//             <Link to="/progetti">
//               
//               <motion.button
//                 onClick={MoreButtonClickHandler}
//                 className={classes.imagebutton}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 
//                 Scopri di più!
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Slideshow; */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* // import { useRef, useEffect } from "react";
// import classes from "./Slideshow.module.css";
// import { motion } from "framer-motion";

// let slideIndex = 1;
// function SlideShowEngine(n) {
//   let i;
//   let slides = document.getElementsByClassName(classes.imagecontainer);
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "flex";
//   // if (slideIndex !== slides.length) {
//   //   slides[slideIndex].style.display = "flex";
//   // } else {
//   //   slides[0].style.display = "flex";
//   // }
// }

// const plusSlide = (n) => {
//   SlideShowEngine((slideIndex += n));
// };

// function Slideshow() {
//   useEffect(() => SlideShowEngine(slideIndex), []);
//   const intervalID = useRef();

//   const slideButtonHandlerNext = () => {
//     stopAutoSlider();
//     plusSlide(1);
//   };

//   const slideButtonHandlerBack = () => {
//     stopAutoSlider();
//     plusSlide(-1);
//   };

//   useEffect(() => {
//     intervalID.current = setInterval(() => {
//       plusSlide(1);
//     }, 4000);
//     return () => clearInterval(intervalID.current);
//   }, []);

//   const stopAutoSlider = () => {
//     clearInterval(intervalID.current);
//   };

//   const MoreButtonClickHandler = () => {};
//   return (
//     <div className={classes.slideShow}>
//       <div
//         id={classes.slide1}
//         className={`${classes.imagecontainer} ${classes.fade}`}
//       ></div>
//       <div
//         id={`${classes.slide2}`}
//         className={`${classes.imagecontainer}  ${classes.fade}`}
//       ></div>
//       <div
//         id={`${classes.slide3}`}
//         className={`${classes.imagecontainer}  ${classes.fade}`}
//       ></div>
//       <div className={classes.paragraph}>
//         <div className={classes.imagetext}>
//           Con il sole risparmi moltissimi soldi e puoi anche abbronzarti!
//           <motion.button
//             onClick={MoreButtonClickHandler}
//             className={classes.imagebutton}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             Scopri di più!
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Slideshow; */
