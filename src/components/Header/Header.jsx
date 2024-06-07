import React, { useRef, useEffect } from "react";
import "./Style.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Project",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    if (targetAttr) {
      const element = document.querySelector(targetAttr);
      if (element) {
        const location = element.offsetTop;
        window.scrollTo({
          left: 0,
          top: location - 80,
        });
      } else {
        console.error(`Element not found for selector: ${targetAttr}`);
      }
    } else {
      console.error(`Invalid attribute: href is ${targetAttr}`);
    }
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <h2 className="logo__h2">Digency</h2>

          {/* ======== navigation =======*/}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu__link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ light mode ============= */}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i class="ri-moon-line"></i>Dark Mode
                </span>
              ) : (
                <span>
                  {" "}
                  <i class="ri-sun-line"></i> Light Mode
                </span>
              )}
            </span>
          </div>
          <span className="mobile__menu">
            <i class="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
