import React from "react";
import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
       <div className="row">
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img src={"images/logopizza.png"} alt={"logo de pizza"} width={120}></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" activeclassname="active" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeclassname="page" to={"/categoria/Pizzas"}>Pizzas</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeclassname="page" to={"/categoria/Hamburguesas"}>Hamburguesas</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link"activeclassname="page" to={""}>Locales</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeclassname="page" to={""}>Contacto</NavLink>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>

    </div>
       
    )
}
   
export default NavBar;