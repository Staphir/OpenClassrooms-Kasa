// import '../style/error.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import logo_header from '../asset/kasa_logo_header.png'
import logo_footer from '../asset/kasa_logo_footer.png'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Error() {
    const menuPages = {"Accueil": "", "A propos": "about"};

    return (
        <Fragment>
            <Header srcLogo={logo_header} menuPages={menuPages}></Header>
            <main>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="">Retourner sur la page d’accueil</Link>
            </main>
            <Footer srcLogo={logo_footer}></Footer>
        </Fragment>
    );
    }
    
    export default Error;