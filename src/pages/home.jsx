import '../style/home.scss';
import Card from '../components/card';
import Banner from '../components/banner';
import homeBannerImg from '../asset/presentation_image.png';
import logementsDB from "../data/logements.json";
import { Link } from 'react-router-dom';


function Home() {
  const bannerText = "Chez vous, partout et ailleurs";
  const altBannerImg = "image de paysage";

  return (
      <main>
        <section className='home-banner'>
          <Banner text={bannerText} srcImage={homeBannerImg} altImage={altBannerImg}></Banner>
        </section>
        <section className='locations'>
          {logementsDB.map((logement)=>
          <Link key={"link" + logement.id} to={"accomodation/" + logement.id}>
            <Card key={logement.id} src_image={logement.cover} location_title={logement.title}></Card>
          </Link>
          )}
        </section>
      </main>
  );
}

export default Home;
