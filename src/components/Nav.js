import React from "react";

import logo from '../img/logo_justinberghahn.png';

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a href="" className="navbar-item">
            <img src={logo} width="112" height="28"/>
        </a>

        <a role={"button"} className={"navbar-burger"} aria-label={"menu"} aria-expanded={"false"}  data-target={"navbarBasicExample"} >
            <span aria-hidden={"true"}></span>
            <span aria-hidden={"true"}></span>
            <span aria-hidden={"true"}></span>
        </a>
    </div>
    <div id={"navbarBasicExample"} className={"navbar-menu"}>
        <div className={"navbar-end"}>
            <a className={"navbar-item "}>
                Home
            </a>
            <a className={"navbar-item"}>
                About Me
            </a>
            <div className={"navbar-item has-dropdown is-hoverable "}>
                <a className={"navbar-link"}>
                    Projects
                </a>
                <div className={"navbar-dropdown"}>
                    <a className={"navbar-item"}>
                        WebDesign
                    </a>
                    <a className={"navbar-item"}>
                        WebApps
                    </a>
                    <a className={"navbar-item"}>
                        Plugins
                    </a>
                </div>
            </div>
        </div>
    </div>
  </nav>
);

export default Nav;
