import '../style/home.scss';
import Card from '../components/card';
import Banner from '../components/banner';
import homeBannerImg from '../asset/presentation_image.png';
import { Fragment } from 'react';
import logementsDB from "../data/logements.json";


function Home() {
  const bannerText = "Chez vous, partout et ailleurs";
  const altBannerImg = "image de paysage";

  return (
    <Fragment>
        <main>
          <section className='home-banner'>
            <Banner text={bannerText} srcImage={homeBannerImg} altImage={altBannerImg}></Banner>
          </section>
          <section className='locations'>
            {logementsDB.map((logement)=>
            <Card key={logement.id} id={logement.id} src_image={logement.cover} location_title={logement.title}></Card>
            )}
          </section>
        </main>
    </Fragment>
  );
}

export default Home;
