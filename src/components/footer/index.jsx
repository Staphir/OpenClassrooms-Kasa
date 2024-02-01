import "./style.scss";

function Footer({srcLogo}) {
    return (
        <footer>
            <img className="logo" src={srcLogo} alt="logo Kasa"/>
            <p className="siteProperty">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;