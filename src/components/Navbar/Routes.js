import React from "react";
import { NavLink } from "react-router-dom";
function Dropdown(props) {
    return (
        <React.Fragment>
            <NavLink activeClassName="active" to="/home">
                <div className="navs">Home</div>
            </NavLink>
            <NavLink to="/education" activeClassName="active">
                <div className="navs">Devnet</div>
            </NavLink>
            <NavLink to="/certifications" activeClassName="active">
                {/* <div className="navs">Certifications</div> */}
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
                <div className="navs">Testnet</div>
            </NavLink>
            <NavLink to="/about-me" activeClassName="active">
                <div className="navs">About</div>
            </NavLink>
        </React.Fragment>
    )
}
export default Dropdown;