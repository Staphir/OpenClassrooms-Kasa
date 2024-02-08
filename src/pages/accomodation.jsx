import { useParams } from "react-router-dom";
import "../style/accomodation.scss";
import logementsDB from "../data/logements.json";
import Slideshow from "../components/slideshow";
import Tag from "../components/tag";
import Collapse from "../components/collapse";
import Rating from "../components/rating";

function Accomodation() {
    const {logementId} = useParams();
    const logementSelected = logementsDB.find(logement => {
        return logement.id === logementId;
    })
    
    const logementEquipements = logementSelected.equipments.map((equipement) => {
        return <li>{equipement}</li>;
    });

    return (
        <main className="accomodation-main">
            <section>
                <Slideshow pictures={logementSelected.pictures}></Slideshow>
            </section>
            <section className="accomodation-title">
                <h1 className="name">{logementSelected.title}</h1>
                <h2 className="location">{logementSelected.location}</h2>
            </section>
            <section className="tags">
                {logementSelected.tags.map((tag) => {
                    return <Tag key={tag} text={tag}></Tag>
                })}
            </section>
            <section className="rate-host">
                <Rating rate={parseInt(logementSelected.rating)} maxRate={5}></Rating>
                {/* <div className="rate">
                    <FontAwesomeIcon icon={faStar} className={"star " + (parseInt(logementSelected.rating) >= 1 ? "solid" : "regular")}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className={"star " + (parseInt(logementSelected.rating) >= 2 ? "solid" : "regular")}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className={"star " + (parseInt(logementSelected.rating) >= 3 ? "solid" : "regular")}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className={"star " + (parseInt(logementSelected.rating) >= 4 ? "solid" : "regular")}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className={"star " + (parseInt(logementSelected.rating) >= 5 ? "solid" : "regular")}></FontAwesomeIcon>
                </div> */}
                <div className="host">
                    <h3>{logementSelected.host.name}</h3>
                    <img src={logementSelected.host.picture} alt="Profile de l'hôte"></img>
                </div>
            </section>
            <section className="details">
                <Collapse title="Description" content={logementSelected.description}></Collapse>
                <Collapse title="Équipements" content={<ul>{logementEquipements}</ul>}></Collapse>
            </section>
        </main>
    );
}

export default Accomodation;