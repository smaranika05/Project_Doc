import React from "react";
import Logo from "./../../Assets/praxis-logo.png";
import "./header.scss";

import { NavLink, Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.headerNavbar = React.createRef();
    this.menuWrapper = React.createRef();
    this.hamburger = React.createRef();
    this.state = {
      navLinks: [
        // {
        //   linkName: "Home",
        //   linkAdd: "#root",
        //   active: false,
        //   useNavLink: true,
        // },
        {
          linkName: "Home",
          linkAdd: "#",

          useNavLink: true,
        },

        {
          linkName: "Pakete",
          linkAdd: "Pakete",

          useNavLink: true,
        },
        {
          linkName: "Referenzen",
          linkAdd: "Referenzen",

          useNavLink: true,
        },
        {
          linkName: "Blog",
          linkAdd: "Blog",

          useNavLink: true,
        },
        {
          linkName: "Kontakt",
          linkAdd: "Kontakt",
          useNavLink: true,
        },
      ],
      scrollCheck: false,
    };
  }

  handleHamburger = () => {
    if (window.innerWidth < 1000) {
      this.hamburger.current.classList.toggle("open");
      const submenu = this.menuWrapper.current;
      if (!submenu.classList.contains("menuWrapper_display")) {
        submenu.classList.add("menuWrapper_display");
        setTimeout(function () {
          submenu.classList.add("menuWrapper_fadein");
        }, 10);
      } else {
        submenu.classList.remove("menuWrapper_fadein");
        setTimeout(function () {
          submenu.classList.remove("menuWrapper_display");
        }, 500);
      }
    }
  };

  componentDidMount() {
    var prevScrollPos = window.pageYOffset;
    document.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset;
      if (this.headerNavbar.current) {
        if (currentScrollPos > prevScrollPos && currentScrollPos > 640) {
          this.headerNavbar.current.style.top = "-100px";
          this.hamburger.current.style.top = "-100px";
        } else {
          this.headerNavbar.current.style.top = "0px";
          this.hamburger.current.style.top = "14px";
        }
      }
      prevScrollPos = currentScrollPos;
    });
  }

  render() {
    const navlinks = this.state.navLinks.map((navLink) => {
      return (
        <div onClick={this.handleHamburger}>
          {navLink.useNavLink && (
            <NavLink
              exact
              to={`/${navLink.linkAdd}`}
              className="navLink"
              activeClassName="navLink_active"
              aria-current="page"
            >
              {navLink.linkName}
            </NavLink>
          )}
          {/* {!navLink.useNavLink && (
            <a href={`/${navLink.linkAdd}`}>{navLink.linkName}</a>
          )} */}
        </div>
      );
    });

    return (
      <>
        <div className="menuWrapper" ref={this.menuWrapper}>
          <div className="linksWrapper">{navlinks}</div>
        </div>
        <div className="header-wrap" ref={this.headerNavbar}>
          <div className="brandLogo">
            <Link smooth to="/">
              <img src={Logo} alt="Praxis"></img>
            </Link>
          </div>

          <div className="navLinks">
            <div className="desktopView">{navlinks}</div>
          </div>
        </div>
        <div ref={this.hamburger} id="hamburger" onClick={this.handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </>
    );
  }
}

export default Header;
