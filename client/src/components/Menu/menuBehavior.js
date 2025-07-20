import { useState, useEffect } from "react";

export function useMenuBehavior() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showCloseHandle, setShowCloseHandle] = useState(false);
  const [menuBeltStyle, setMenuBeltStyle] = useState(false);

  function hamburgerHandle() {
    setShowHamburger(false);
  }

  function closeMobileHandle() {
    setShowHamburger(true);
  }

  useEffect(() => {
    const navigationBehaviorHandle = () => {
      if (window.innerWidth < 750) {
        //In mobile mode, shows hamburger and close
        setShowHamburger(true);
        setShowCloseHandle(true);
      } else {
        //Hides mobile buttons in desktop mode
        setShowHamburger(false);
        setShowCloseHandle(false);
      }

      if (window.innerWidth > 750) {
        //On the desktop, changes the style of the bar after scrolling
        if (window.pageYOffset > 0) {
          setMenuBeltStyle(true);
        } else {
          setMenuBeltStyle(false);
        }
      }
    };

    navigationBehaviorHandle();

    //Additional function (but the name and logic are a bit misleading) - connects the scroll handler only in the desktop
    function closeMobileHandle() {
      if (window.innerWidth > 750) {
        window.addEventListener("scroll", navigationBehaviorHandle);
      }
    }

    //Listens for resize
    window.addEventListener("resize", navigationBehaviorHandle);

    //Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", navigationBehaviorHandle);


      navigationBehaviorHandle();
      closeMobileHandle();
    };
  }, []);

//Returns values and handlers to use in the component
  return {
    showHamburger,
    showCloseHandle,
    menuBeltStyle,
    hamburgerHandle,
    closeMobileHandle,
  };
}
