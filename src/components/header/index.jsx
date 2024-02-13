import "./style.scss";
import { NavLink } from "react-router-dom";
import logo from "../../asset/kasa_logo_header.png";

function Header() {
    const menuPages = {"Accueil": "", "A propos": "about"};

    return (
        <header>
            <img className="logo-header" src={logo} alt="logo Kasa"/>
            <nav className="menu">
                {Object.keys(menuPages).map((page) => <NavLink key={page} to={menuPages[page]}>{page.toUpperCase()}</NavLink>)}
            </nav>
        </header>
    )
}

export default Header;