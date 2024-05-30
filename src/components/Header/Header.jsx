import React from "react";
import "./Style.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#project",
    display: "Project",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <h2 className="logo__h2">Digency</h2>

          {/* ======== navigation =======*/}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item">
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ light mode ============= */}
          <div className="light__mode">
            <span>
              <i class="ri-sun-line"></i> Light Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
