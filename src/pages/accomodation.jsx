import { useParams, Navigate } from "react-router-dom";
import "../style/accomodation.scss";
import logementsDB from "../data/logements.json";
import Slideshow from "../components/slideshow";
import Tag from "../components/tag";
import Collapse from "../components/collapse";
import Rating from "../components/rating";
import { Fragment } from "react";

function Accomodation() {
    const {logementId} = useParams();
    const logementSelected = logementsDB.find(logement => {
        return logement.id === logementId;
    })
    
    if(!logementSelected) {
        return (
            <Fragment>
                <Navigate to={"/error"} replace={true}></Navigate>
            </Fragment>
        );
    }  

    const logementEquipements = logementSelected.equipments.map((equipement) => {
        return <li key={equipement}>{equipement}</li>;
    });

    return (
        <main className="accomodation-main">
            <section>
                <Slideshow pictures={logementSelected.pictures}></Slideshow>
            </section>
            <section className="accomodation-informations">
                <div className="title-tags">
                    <section className="accomodation-title">
                        <h1 className="name">{logementSelected.title}</h1>
                        <h2 className="location">{logementSelected.location}</h2>
                    </section>
                    <section className="tags">
                        {logementSelected.tags.map((tag) => {
                            return <Tag key={tag} text={tag}></Tag>
                        })}
                    </section>
                </div>
                <section className="rate-host">
                    <Rating rate={parseInt(logementSelected.rating)} maxRate={5}></Rating>
                    <div className="host">
                        <h3>{logementSelected.host.name}</h3>
                        <img src={logementSelected.host.picture} alt="Profile de l'hôte"></img>
                    </div>
                </section>
            </section>
            <section className="details">
                <Collapse title="Description" content={logementSelected.description}></Collapse>
                <Collapse title="Équipements" content={<ul>{logementEquipements}</ul>}></Collapse>
            </section>
        </main>
    );
}

export default Accomodation;