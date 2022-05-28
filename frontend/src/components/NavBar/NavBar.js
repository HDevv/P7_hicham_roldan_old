import "../../styles/NavBar.scss";

import React from "react";

const NavBar = () => {
  function open() {
    const hamburgerToggler = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".navlinks-container");

    const toggleNav = () => {
      hamburgerToggler.classList.toggle("open");

      const ariaToggle =
        hamburgerToggler.getAttribute("aria-expanded") === "true"
          ? "false"
          : "true";
      hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

      navLinksContainer.classList.toggle("open");
    };
    hamburgerToggler.addEventListener("click", toggleNav);
  }

  return (
    <div>
      <nav className="NavBar">
        <div className="main-navlinks">
          <button
            onClick={() => open()}
            className="hamburger"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navlinks-container">
            <a href="/">
              {" "}
              <img
                className="groupo_icon"
                src="./imgs/logo/icon.png"
                alt="groupo_icon"
              />
              Groupomania
            </a>
            <a href="/">Acceuil</a>
            <a href="/login">Connexion</a>
            <a href="/signup">Inscritpion</a>
            <a href="/User">Profil</a>
          </div>
        </div>
        <div className="nav-auth">
          <a href="/login" className="user-toggler" aria-label="Sign in page">
            <img
              className="logo2"
              src="./imgs/logo/logo-black2.png"
              alt="Groupomania"
            />
          </a>
          <div className="sign-btns">
            <a href="/login">
            <button type="button">Connexion</button>
            </a>
            <a href="/signup">
            <button type="button">Inscription</button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
