import '../style/home.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import logo_header from '../asset/kasa_logo_header.png';
import logo_footer from '../asset/kasa_logo_footer.png';
import presentation_img from '../asset/presentation_image.png';
import { Fragment } from 'react';


function Home() {
  const menuPages = {"Accueil": "", "A propos": "about"};
  // id - title - cover
  
  return (
    <Fragment>
        <Header srcLogo={logo_header} menuPages={menuPages}></Header>
        <main>
          <section className='presentation'>
            <h2>Chez vous, partout et ailleurs</h2>
            <img className='presentation-img' src={presentation_img} alt='image de paysage'></img>
          </section>
          <section className='locations'>
            <Card 
            id="c67ab8a7"
            src_image="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            location_title="Appartement cosy">
            </Card>
          </section>
        </main>
        <Footer srcLogo={logo_footer}></Footer>
    </Fragment>
  );
}

export default Home;
