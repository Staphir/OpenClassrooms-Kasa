import '../style/error.scss';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <Fragment>
            <main className='error-main'>
                <h2 className='error-title'>404</h2>
                <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className='error-link' to="">Retourner sur la page d’accueil</Link>
            </main>
        </Fragment>
    );
    }
    
    export default Error;