import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const lenis = useLenis();

  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");

    const clickHandler = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        if (section && lenis) {
          lenis.scrollTo(section);
        }
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", clickHandler);
    });

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", clickHandler);
      });
    };
  }, [lenis]);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          A
        </a>
        <a
          href="mailto:akilankaran0512@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          akilankaran0512@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
