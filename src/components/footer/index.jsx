import "./style.scss";
import logo from "../../asset/kasa_logo_footer.png";

function Footer() {
    return (
        <footer>
            <img className="logo-footer" src={logo} alt="logo Kasa"/>
            <p className="siteProperty">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;