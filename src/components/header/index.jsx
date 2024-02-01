import "./style.scss";
import { Link } from "react-router-dom";

function Header({srcLogo, menuPages}) {
    return (
        <header>
            <img className="logo" src={srcLogo} alt="logo Kasa"/>
            <nav className="menu">
                {Object.keys(menuPages).map((page) => <Link key={page} id={page} to={menuPages[page]}>{page.toUpperCase()}</Link>)}
            </nav>
        </header>
    )
}

export default Header;