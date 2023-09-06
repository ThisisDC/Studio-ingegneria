import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [width, setWidth] = useState();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < 1200;

  return isMobile;
}
